// Third party
import moment from "moment-timezone";

// Components
import { TEvent } from "../../types";

const formatDateHelper = (startDate: string, endDate: string) => {
  const timezone = "Asia/Jerusalem";

  const start = moment.tz(startDate, timezone).format("DD/MM/YYYY HH:mm");
  const end = moment.tz(endDate, timezone).format("HH:mm");

  return `${start}-${end}`;
};

const getPrev15Days = () => {
  return moment().subtract(15, "days").toDate();
};

const getNext45Days = () => {
  return moment().add(45, "days").toDate();
};

const getUpcomingEvents = (userEvents: TEvent[]) => {
  const currentDate = moment().tz("Asia/Jerusalem");

  return userEvents.filter((event) => {
    const eventStart = moment(event.eventInfo.end);
    return eventStart.isSameOrAfter(currentDate);
  });
};

const getPastEvents = (userEvents: TEvent[]) => {
  const currentDate = moment();

  return userEvents.filter((event) => {
    const eventStart = moment(event.eventInfo.end);
    return eventStart.isBefore(currentDate);
  });
};

const isPastEvent = (
  endDate: string | undefined,
  timezone = "Asia/Jerusalem"
) => {
  if (!endDate) return false;
  const today = moment().tz(timezone).format("YYYY-MM-DDTHH:mm:ssZ");
  const end = moment(endDate).tz(timezone).format("YYYY-MM-DDTHH:mm:ssZ");
  return end < today;
};

export {
  formatDateHelper,
  getPrev15Days,
  getNext45Days,
  getUpcomingEvents,
  getPastEvents,
  isPastEvent,
};
