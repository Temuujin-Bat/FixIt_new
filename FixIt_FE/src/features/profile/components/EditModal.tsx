import { useEffect, useMemo } from "react";

// MUI
import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

// Third party
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Components
import { TModal } from "../type";
import { FormProvider, RHFTextField } from "../../../components/hookForm";
import { getCustomerInfo } from "../../../store/authenticate/selectors";
import { useAppSelector } from "../../../hooks/useAppStore";

// Hooks
import { useUpdateProfileCustomerAPI } from "../../../hooks/API/profile";

const updateProfileSchema = yup.object().shape({
  name: yup.string().required("Нэр оруулна уу"),
});

const EditModal = ({ open, onClose }: TModal) => {
  const selectedCustomer = useAppSelector(getCustomerInfo);
  const {
    mutate: updateProfile,
    isSuccess,
    isPending,
  } = useUpdateProfileCustomerAPI({ onClose });

  const defaultValues = useMemo(
    () => ({
      name: selectedCustomer.name || "",
      phone: selectedCustomer.phone,
      name_changes: selectedCustomer.name_changes,
    }),
    [selectedCustomer],
  );

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(updateProfileSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { isDirty },
  } = methods;

  useEffect(() => {
    if (open) {
      reset(defaultValues);
    }
  }, [open, reset, defaultValues]);

  const onSubmit = async (data: { name: string }) => {
    try {
      updateProfile(data);

      if (isSuccess) {
        reset(
          (prevValues) => ({
            ...prevValues,
            name: data.name,
          }),
          { keepDirty: false, keepValues: true },
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        mt: "15vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "background.paper",
          padding: 4,
          borderRadius: 3,
          boxShadow: 24,
          minWidth: 300,
          position: "relative",
          width: { xs: "90%", sm: 400, md: 500 },
          maxWidth: 600,
        }}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 10, right: 10, color: "black" }}
          >
            <Close fontSize="medium" />
          </IconButton>

          <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
            Мэдээлэл өөрчлөх
          </Typography>

          <Stack spacing={3}>
            <RHFTextField label="Бүтэн нэр" name="name" />

            <RHFTextField
              label="Утасны дугаар (солих боломжгүй)"
              name="phone"
              InputProps={{ readOnly: true }}
            />

            {selectedCustomer?.name_changes === 1 && (
              <Typography variant="subtitle2" color={"error.main"}>
                Та нэрээ өөрчлөх эрх нэг удаа үлдсэн байна!
              </Typography>
            )}
          </Stack>

          <Button
            disabled={
              isPending || !isDirty || selectedCustomer.name_changes === 2
            }
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#2a2c32",
              borderRadius: 2.5,
              padding: 1.5,
              boxShadow: "none",
              mt: 3,
            }}
          >
            {isPending ? "Хадгалж байна..." : "Хадгалах"}
          </Button>
        </FormProvider>
      </Box>
    </Modal>
  );
};

export { EditModal };
