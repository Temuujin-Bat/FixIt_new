// Components
import { DBEventModel, TEvent } from "../types";

const MapDBEventToTEvent = (dbEvent: DBEventModel, eventId: number): TEvent => {
  return {
    eventId: eventId,
    isPublished: dbEvent.isPublished,
    isPublic: dbEvent.isPublic,
    status: dbEvent.status || "",
    creatorEmail: dbEvent.creatorEmail,
    locationInfo: {
      name: dbEvent.arenaName,
      isArena: dbEvent.isArena,
      arena: dbEvent.arena,
      address: {
        addressString: dbEvent.address_addressString,
        wazeLink: dbEvent.address_wazeLink,
        guidance: dbEvent.address_guidance,
      },
    },
    isPaid: dbEvent.isPaid,
    paymentInfo: dbEvent.isPaid
      ? {
          amount: dbEvent.payment_amount || 0,
          description: dbEvent.payment_description || "",
          paymentLink: dbEvent.payment_paymentLink,
          payInPlace: dbEvent.payment_payInPlace || false,
          registerInPlace: dbEvent.payment_registerInPlace || false,
        }
      : undefined,
    contactInfo: {
      name: dbEvent.contact_name,
      email: dbEvent.contact_email,
      phoneNumber: dbEvent.contact_phoneNumber,
    },
    eventInfo: {
      title: dbEvent.event_title,
      subtitle: dbEvent.event_subtitle,
      description: dbEvent.event_description,
      eventPhoto: dbEvent.event_gallery?.[0] || undefined,
      gallery: dbEvent.event_gallery?.filter((item): item is string => !!item),
      start: dbEvent.event_start,
      end: dbEvent.event_end,
      facebookLink: dbEvent.event_facebookLink,
      registeredPlayers: dbEvent.event_registeredPlayers,
      registeredPlayerCount: dbEvent.event_registeredPlayerCount || 0,
      registeredTeams: dbEvent.event_registeredTeams,
      registrationRequired: dbEvent.event_registrationRequired,
      rentalsInPlace: dbEvent.event_rentalsInPlace,
      sellersInPlace: dbEvent.event_sellersInPlace,
      marshalsInPlace: dbEvent.event_marshalsInPlace,
      bathroomInPlace: dbEvent.event_bathroomInPlace,
      waterInPlace: dbEvent.event_waterInPlace,
      isTeamsOnlyEvent: dbEvent.event_isTeamsOnlyEvent || false,
      minimalTeamSize: dbEvent.event_minimalTeamSize || 0,
      maximalTeamSize: dbEvent.event_maximalTeamSize || 0,
      isPrizedEvent: dbEvent.event_isPrizedEvent,
      prizeInfo: dbEvent.event_isPrizedEvent
        ? {
            title: dbEvent.event_prize_title || "",
            subtitle: dbEvent.event_prize_subtitle || "",
            gallery: dbEvent.event_prize_gallery,
          }
        : undefined,
    },
    postEventInfo: {
      winner: dbEvent.postEvent_winner || "",
      eventLinks: dbEvent.postEvent_links || [],
    },
  };
};

export { MapDBEventToTEvent };
