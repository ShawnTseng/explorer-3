'use client';

import { DateRangePicker } from "@nextui-org/date-picker";
import { parseDateTime, getLocalTimeZone, now } from "@internationalized/date";

const DateRange = ({ startDateTime = '', endDateTime = '' }) => {
    const start = startDateTime ? parseDateTime(startDateTime) : now(getLocalTimeZone());
    const end = endDateTime ? parseDateTime(endDateTime) : now(getLocalTimeZone());
    return (
        <DateRangePicker
            isReadOnly
            value={{
                start,
                end
            }}
        />
    )
}

export default DateRange