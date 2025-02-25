import React, { useState } from "react";

// MUI
import { Box } from "@mui/material";

// Components
import { getUserData } from "../../../store/authenticate/selectors";
import { AddEventHeader, AddEventActions, FirstStep, SecondStep } from "..";
import { DBEventModel } from "../type";
import { TArenas } from "../../../types";

// Hooks
import { useAddEventAPI } from "../../../hooks/API/events";

export default function AddEvent() {
  const { userInfo } = getUserData();
  const [activeStep, setActiveStep] = useState<number>(0);

  const [formData, setFormData] = useState<DBEventModel>({
    // Basic event information and Event features
    event_title: "",
    event_subtitle: "",
    event_description: "",

    isPublic: true,
    isPublished: true,
    event_registrationRequired: true,

    address_addressString: "",
    address_guidance: "",
    event_start: "",
    event_end: "",
    address_wazeLink: "",
    event_facebookLink: "",

    event_rentalsInPlace: false,
    event_sellersInPlace: false,
    event_marshalsInPlace: false,
    event_bathroomInPlace: false,
    event_waterInPlace: false,

    // Arena
    isArena: false,
    arena: {} as TArenas,
    arenaName: "",

    // Payment details and Prize Section and Team Event
    isPaid: false,
    payment_amount: 0,
    payment_description: "",
    payment_paymentLink: "",
    payment_payInPlace: false,
    payment_registerInPlace: false,

    event_isPrizedEvent: false,
    event_prize_title: "",
    event_prize_subtitle: "",

    // Event Photo
    event_gallery: [],

    // Creator Info
    contact_name: userInfo?.name ? userInfo?.name : "",
    contact_email: userInfo?.email ? userInfo?.email : "",
    contact_phoneNumber: userInfo?.phone ? userInfo?.phone : "",
    creatorEmail: userInfo?.email ? userInfo?.email : "",
  });

  const { mutate: addEvent, isPending } = useAddEventAPI();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const eventData: DBEventModel = {
      ...formData,
    };

    addEvent({ eventData });
  };

  return (
    <Box>
      <AddEventHeader activeStep={activeStep} totalSteps={2} />

      <Box
        component={"form"}
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        onSubmit={handleSubmit}
      >
        {/* Basic event information and Event features */}
        {activeStep === 0 && (
          <FirstStep formData={formData} setFormData={setFormData} />
        )}

        {/* Payment details and Prize Section and Team event and Creator info */}
        {activeStep === 1 && (
          <SecondStep formData={formData} setFormData={setFormData} />
        )}

        {/* Navigation Buttons */}
        <Box mt={"auto"}>
          <AddEventActions
            isPending={isPending}
            formData={formData}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </Box>
      </Box>
    </Box>
  );
}
