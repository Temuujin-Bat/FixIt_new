import React, { useState } from "react";

// MUI
import { Box } from "@mui/material";

// Components
import {
  AirsoftReplicasActions,
  AirsoftReplicasForm,
  AirsoftReplicasHeader,
  UserInfoForm,
} from "../index";
import { getUserData } from "../../../store/authenticate/selectors";

const AirsoftReplicas = () => {
  const { userInfo } = getUserData();
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    productName: "",
    gunCategory: "",
    customGunCategory: "",
    manufacturer: "",
    customManufacturer: "",
    gunType: "",
    condition: "",
    description: "",
    price: 0,
    name: userInfo?.name ? userInfo?.name : "",
    email: userInfo?.email ? userInfo?.email : "",
    address: "",
    phone: userInfo?.phone ? userInfo?.phone : "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Box>
      <AirsoftReplicasHeader activeStep={activeStep} totalSteps={2} />

      <Box
        component={"form"}
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
        onSubmit={handleSubmit}
      >
        {/* Step content */}
        {activeStep === 0 && (
          <AirsoftReplicasForm formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 1 && (
          <UserInfoForm formData={formData} setFormData={setFormData} />
        )}

        {/* Navigation Buttons */}
        <Box
          sx={{
            mt: "auto",
          }}
        >
          <AirsoftReplicasActions
            formData={formData}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AirsoftReplicas;
