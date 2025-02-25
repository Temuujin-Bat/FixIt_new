import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import sum from "lodash/sum";
import { useBoolean } from "../../../hooks/useBoolean";
import { FormProvider } from "../../../components";
import { CheckoutNewCardForm } from "./CheckoutNewCardForm";
import { CheckoutOrderSummary } from "./CheckoutOrderSummary";
import { CheckoutPaymentMethod } from "./CheckoutPaymentMethod";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppStore";
import { getCheckoutData } from "../../../store/products/selectors";
import { CheckoutShippingMethod } from "./CheckoutShippingMethod";
import { CheckoutPersonalDetails } from "./CheckoutPersonalDetails";
import {
  PAYMENT_OPTIONS,
  SHIPPING_OPTIONS,
  SHIPPING_VALUE_LABEL_MAP,
} from "../../../data/tamirData/data";
import { productActions } from "../../../store/products/slice";
import { useCreateOrderAPI } from "../../../hooks/API/useOrders";
import { TCreateOrderReq } from "../../../types/requests";
import {useNavigate} from "react-router-dom";
import {CheckoutShippingDetails} from "./CheckoutShippingDetails.tsx";

type StepLabelProps = {
  step: string;
  title: string;
};

function StepLabel({ step, title }: StepLabelProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ mb: 3, typography: "h6" }}>
      <Box
        sx={{
          mr: 1.5,
          width: 28,
          height: 28,
          flexShrink: 0,
          display: "flex",
          typography: "h6",
          borderRadius: "50%",
          alignItems: "center",
          bgcolor: "primary.main",
          justifyContent: "center",
          color: "primary.contrastText",
        }}
      >
        {step}
      </Box>
      {title}
    </Stack>
  );
}

const CheckoutView = () => {
  const { mutateAsync: createOrderApi, isPending } = useCreateOrderAPI();
  const checkout = useAppSelector(getCheckoutData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formOpen = useBoolean();

  const CheckoutSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    emailAddress: Yup.string().required("Email address is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    shipping: Yup.string(),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    country: "",
    zipCode: "",
    shipping: "selfPickup",
    paymentMethods: "cash",
  };

  const methods = useForm({
    resolver: yupResolver(CheckoutSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const subtotal = sum(
    checkout.cart?.map((product) => product.price * product.quantity)
  );

  const subTotalSales = sum(
    checkout.cart?.map((product) =>
      product.onSaleData?.salePrice
        ? product.onSaleData.salePrice * product.quantity
        : 0
    )
  );

  const discount = subTotalSales > 0 ? subtotal - subTotalSales : 0;

  const total = subtotal - discount;

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      const lineItems = checkout.cart?.map((item) => ({
        quantity: item.quantity,
        product: {
          brandLogoUrl: item.brandLogoUrl,
          colors: item.colors,
          model: item.model,
          vendor: item.vendor,
          brand: item.brand,
          thumbNail: item.thumbNail,
          gallery: item.gallery,
          onSaleData: item.onSaleData,
          description: item.description,
          category: item.category,
          inStock: item.inStock,
          unitsInStock: item.unitsInStock,
          isOnSale: item.isOnSale,
          isPublished: item.isPublished,
          id: item.id,
          shopId: item.shopId,
          name: item.name,
          sku: item.sku,
          price: item.price,
        },
      }));

      const customer = {
          phoneNumber: { phoneString: data.phoneNumber },
          email: data.emailAddress,
          name: `${data.firstName} ${data.lastName}`,
        }

      dispatch(productActions.setCustomer({
        ...customer,
        streetAddress: data?.streetAddress || '',
        zipcode: data?.zipcode || '',
        city: data?.city || '',
      }))

      const payload = {
        lineItems,
        customer,
        shippingMethod: SHIPPING_VALUE_LABEL_MAP[data.shipping],
        shippingPrice: 0,
        subTotal: total,
        isPaid: false,
        paymentMethod: data.paymentMethods,
      } as unknown as TCreateOrderReq["orderData"];

      const rsp: any = await createOrderApi(payload);

      if(rsp?.success) {
        dispatch(productActions.setOrderDetails({
          orderId: rsp.orderId,
          orderUuid: rsp.orderUuid,
          shopId: '20'
        }))
      }
      if (data.paymentMethods === 'bit') {
        navigate('/payment/bit')
      } else {
        reset();
        dispatch(productActions.resetCart());
      }
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Container
      sx={{
        overflow: "hidden",
        pt: 5,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Typography variant="h3" sx={{ mb: 5 }}>
        תשלום
      </Typography>

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={8}>
            <Stack
              spacing={5}
              divider={<Divider sx={{ borderStyle: "dashed" }} />}
            >
              <div>
                <StepLabel title="פרטים אישיים" step="1" />
                <CheckoutPersonalDetails />
              </div>

              <div>
                <StepLabel title="משלוח" step="3" />
                <CheckoutShippingMethod options={SHIPPING_OPTIONS} />
              </div>

              {methods.watch("shipping") === 'shipping' && <div>
                <StepLabel title="פרטי משלוח" step="2" />
                <CheckoutShippingDetails />
               </div>}

              <div>
                <StepLabel title="אמצעי תשלום" step="4" />

                <CheckoutPaymentMethod options={PAYMENT_OPTIONS} />

                <Collapse in={formOpen.value} unmountOnExit>
                  <CheckoutNewCardForm />
                </Collapse>
              </div>
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <CheckoutOrderSummary
              total={total}
              subtotal={subtotal}
              shipping={0}
              discount={discount}
              loading={isPending}
            />
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
};

export { CheckoutView };
