// Third party
import moment from "moment";

export const determineMonthKey = (
  eventEndDate: string
): "CURRENT_MONTH_EVENTS" | "NEXT_MONTH_EVENTS" | null => {
  const eventEnd = moment(eventEndDate, moment.ISO_8601, true);
  const now = moment();

  if (!eventEnd.isValid()) {
    console.error("Invalid date provided for event_end.");
    return null;
  }

  if (eventEnd.isSame(now, "month")) {
    return "CURRENT_MONTH_EVENTS";
  } else if (eventEnd.isSame(now.add(1, "month"), "month")) {
    return "NEXT_MONTH_EVENTS";
  }

  return null;
};
