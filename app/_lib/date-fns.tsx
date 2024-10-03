import { format } from 'date-fns';
import { zhTW } from 'date-fns/locale';

const DateTimePipe = (timestamp: number) => {
    return format(new Date(timestamp * 1000), 'yyyy/MM/dd p', { locale: zhTW });
}

export default DateTimePipe