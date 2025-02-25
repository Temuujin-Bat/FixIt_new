import { Container, Box, Grid, Typography } from "@mui/material";
import Image from "./image";
import sum from "lodash/sum";
import { useAppSelector } from "../hooks/useAppStore.ts";
import { getCheckoutData, getCustomer, getOrderDetails } from "../store/products/selectors";
import { useState, useEffect } from "react";
import {SideLayout} from "../layouts/SideLayout.tsx";
import { BASE_URL } from "../../config";

function TranzilaBitPayment() {
  const TRANZILA_IFRAME_URL = "https://direct.tranzila.com/fxplizzi123/iframenew.php";
  const checkout = useAppSelector(getCheckoutData);
  const customer = useAppSelector(getCustomer);
  const orderDetails = useAppSelector(getOrderDetails);
  const [iframeSrc, setIframeSrc] = useState("");

  // Calculate order totals
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

  useEffect(() => {
    const url = new URL(TRANZILA_IFRAME_URL);
    url.searchParams.append("sum", String(total));
    url.searchParams.append("bit_pay", "1"); // Enable Bit
    url.searchParams.append("hide_cc", "1"); // Hide credit card
    url.searchParams.append("nologo", "1"); // Hide logo
    url.searchParams.append("contact", customer.name);
    url.searchParams.append("email", customer.email);
    url.searchParams.append("phone", (customer.phoneNumber.phoneString || ''));
    url.searchParams.append("address", (customer.streetAddress || ''));
    url.searchParams.append("city", (customer.city || ''));
    url.searchParams.append("shopId", (orderDetails.shopId || ''));
    url.searchParams.append("orderId", (orderDetails.orderId || ''));
    url.searchParams.append("orderUuid", (orderDetails.orderUuid || ''));
    url.searchParams.append("success_url_address", `${BASE_URL}orders/tranzila/success`);
    url.searchParams.append("notify_url_address", `${BASE_URL}orders/tranzila/notify?notify=true`);
    url.searchParams.append("fail_url_address", `${BASE_URL}orders/tranzila/failed`);
    url.searchParams.append("currency", "1"); // Set currency (ILS)
    url.searchParams.append("lang", "il"); // Hebrew Language
    url.searchParams.append("u71", "1"); // Enable product details


    // Append product details dynamically
    checkout.cart?.forEach((product, index) => {
      url.searchParams.append(`product_name_${index + 1}`, product.name);
      url.searchParams.append(`product_price_${index + 1}`, product.price);
      url.searchParams.append(`product_quantity_${index + 1}`, String(product.quantity));
    });

    setIframeSrc(url.toString())
  }, [total, checkout.cart]);

  return (
    <SideLayout title="Airsoft 4 U" image="/assets/Stores/TamirLogo2.png">
      <Container maxWidth="md">
        <Typography color="black" pt={2} textAlign="center" variant="h3">{` סה"כ לתשלום: ${total}₪`}</Typography>
        <Box pt={3} display="flex" justifyContent="center">
          <Image src="/assets/bit.png" width={100} height={100} />
        </Box>

        {/* Show Bit Payment Iframe Immediately on Mount */}
        <Grid container justifyContent="center" sx={{ mt: 5 }}>
          <Grid item xs={12} md={8}>
            <Box sx={{ width: "100%", height: 425 }}>
              <iframe
                id="tranzila-frame"
                name="tranzila"
                allow="payment"
                src={iframeSrc}
                style={{ width: "100%", height: "100%", border: "none" }}
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </SideLayout>
  );
}

export { TranzilaBitPayment };
