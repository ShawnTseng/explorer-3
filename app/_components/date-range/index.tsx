'use client';

import { DateRangePicker } from "@nextui-org/date-picker";
import { parseDateTime, getLocalTimeZone, now } from "@internationalized/date";

const DateRange = ({ startDateTime = '', endDateTime = '' }) => {
    const start = startDateTime ? parseDateTime(startDateTime) : now(getLocalTimeZone());
    const end = endDateTime ? parseDateTime(endDateTime) : now(getLocalTimeZone());
    return (
        <div className="flex justify-center">
            <DateRangePicker
                isReadOnly
                defaultValue={{
                    start,
                    end
                }}
            />
        </div>
    )
}

export default DateRange