import { useState } from 'react';

// MUI
import { Box } from '@mui/material';

// Components
import { TEvent, DBEventModel } from '../type';
import { getUserData } from '../../../store/authenticate/selectors';
import { FirstStep, SecondStep, EditEventHeader, EditEventActions } from '..';

// Hooks
import { useEditEventAPI } from '../../../hooks/API/events';

export default function EditEvent({ event }: { event: TEvent }) {
  const { userInfo } = getUserData();
  const [activeStep, setActiveStep] = useState<number>(0);

  const [formData, setFormData] = useState<DBEventModel>({
    // Basic event information and Event features
    event_title: event?.eventInfo.title || '',
    event_subtitle: event?.eventInfo?.subtitle || '',
    event_description: event?.eventInfo?.description || '',

    isPublic: event?.isPublic,
    event_registrationRequired: event?.eventInfo?.registrationRequired,
    isPublished: event?.isPublished,

    address_addressString: event?.locationInfo?.address?.addressString || '',
    address_guidance: event?.locationInfo?.address?.guidance || '',
    event_start: event?.eventInfo?.start || '',
    event_end: event?.eventInfo?.end || '',
    address_wazeLink: event?.locationInfo?.address?.wazeLink || '',
    event_facebookLink: event?.eventInfo?.facebookLink || '',

    event_rentalsInPlace: event?.eventInfo?.rentalsInPlace,
    event_sellersInPlace: event?.eventInfo?.sellersInPlace,
    event_marshalsInPlace: event?.eventInfo?.marshalsInPlace,
    event_bathroomInPlace: event?.eventInfo?.bathroomInPlace,
    event_waterInPlace: event?.eventInfo?.waterInPlace,

    // Arena
    isArena: event?.locationInfo?.isArena,
    arena: event?.locationInfo?.arena,
    arenaName: event?.locationInfo?.name || '',

    // Payment details and Prize Section and Team Event
    isPaid: event?.isPaid,
    payment_amount: event?.paymentInfo?.amount || 0,
    payment_description: event?.paymentInfo?.description || '',
    payment_paymentLink: event?.paymentInfo?.paymentLink || '',
    payment_payInPlace: event?.paymentInfo?.payInPlace,
    payment_registerInPlace: event?.paymentInfo?.registerInPlace,

    event_isPrizedEvent: event?.eventInfo?.isPrizedEvent,
    event_prize_title: event?.eventInfo?.prizeInfo?.title || '',
    event_prize_subtitle: event?.eventInfo?.prizeInfo?.subtitle || '',

    // Gallery
    event_gallery: (event?.eventInfo?.gallery || []).map((item) => item || null),

    // Creator Info
    contact_name: userInfo?.name || event?.contactInfo.name || '',
    contact_email: userInfo?.email || event?.contactInfo.email || '',
    contact_phoneNumber: userInfo?.phone || event?.contactInfo.phoneNumber || '',
    creatorEmail: userInfo?.email || event?.contactInfo.email || '',

    // Links
    postEvent_links: event?.postEventInfo?.eventLinks || [],
  });

  const [initialFormData] = useState<DBEventModel>({
    // Basic event information and Event features
    event_title: event?.eventInfo.title || '',
    event_subtitle: event?.eventInfo?.subtitle || '',
    event_description: event?.eventInfo?.description || '',

    isPublic: event?.isPublic,
    event_registrationRequired: event?.eventInfo?.registrationRequired,
    isPublished: event?.isPublished,

    address_addressString: event?.locationInfo?.address?.addressString || '',
    address_guidance: event?.locationInfo?.address?.guidance || '',
    event_start: event?.eventInfo?.start || '',
    event_end: event?.eventInfo?.end || '',
    address_wazeLink: event?.locationInfo?.address?.wazeLink || '',
    event_facebookLink: event?.eventInfo?.facebookLink || '',

    event_rentalsInPlace: event?.eventInfo?.rentalsInPlace,
    event_sellersInPlace: event?.eventInfo?.sellersInPlace,
    event_marshalsInPlace: event?.eventInfo?.marshalsInPlace,
    event_bathroomInPlace: event?.eventInfo?.bathroomInPlace,
    event_waterInPlace: event?.eventInfo?.waterInPlace,

    // Arena
    isArena: event?.locationInfo?.isArena,
    arena: event?.locationInfo?.arena,
    arenaName: event?.locationInfo?.name || '',

    // Payment details and Prize Section and Team Event
    isPaid: event?.isPaid,
    payment_amount: event?.paymentInfo?.amount || 0,
    payment_description: event?.paymentInfo?.description || '',
    payment_paymentLink: event?.paymentInfo?.paymentLink || '',
    payment_payInPlace: event?.paymentInfo?.payInPlace,
    payment_registerInPlace: event?.paymentInfo?.registerInPlace,

    event_isPrizedEvent: event?.eventInfo?.isPrizedEvent,
    event_prize_title: event?.eventInfo?.prizeInfo?.title || '',
    event_prize_subtitle: event?.eventInfo?.prizeInfo?.subtitle || '',

    // Gallery
    event_gallery: (event?.eventInfo?.gallery || []).map((item) => item || null),

    // Creator Info
    contact_name: userInfo?.name || event?.contactInfo.name || '',
    contact_email: userInfo?.email || event?.contactInfo.email || '',
    contact_phoneNumber: userInfo?.phone || event?.contactInfo.phoneNumber || '',
    creatorEmail: userInfo?.email || event?.contactInfo.email || '',

    // Links
    postEvent_links: event?.postEventInfo?.eventLinks || [],
  });

  const id = Number(event?.eventId);

  const { mutate: editEvent, isPending } = useEditEventAPI();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const eventData = {
      ...formData,
    };

    editEvent({
      email: eventData?.contact_email || '',
      eventId: id,
      eventData,
    });
  };

  return (
    <Box>
      <EditEventHeader
        activeStep={activeStep}
        totalSteps={2}
      />

      <Box
        component={'form'}
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        onSubmit={handleSubmit}
      >
        {/* Basic event information and Event features */}
        {activeStep === 0 && (
          <FirstStep
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {/* Payment details and Prize Section and Team event and Creator info */}
        {activeStep === 1 && (
          <SecondStep
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {/* Navigation Buttons */}
        <Box mt={'auto'}>
          <EditEventActions
            isPending={isPending}
            formData={formData}
            initialFormData={initialFormData}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </Box>
      </Box>
    </Box>
  );
}
