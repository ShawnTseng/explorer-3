import { format } from 'date-fns';
import { zhTW } from 'date-fns/locale';

const DateTimePipe1 = (timestamp: number) => {
    return format(new Date(timestamp * 1000), 'yyyy/MM/dd p', { locale: zhTW });
}

const toISO8601 = (timestamp: number) => {
    return format(new Date(timestamp * 1000), "yyyy-MM-dd'T'HH:mm");
}

const DateTimePipe = { DateTimePipe1, toISO8601 }

export default DateTimePipe