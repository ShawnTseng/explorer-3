'use client';

import { Progress } from "@nextui-org/progress";

const ProgressBar = ({ value = 0 }) => {

    return (
        <Progress
            value={value}
            showValueLabel={true}
        />
    )
}

export default ProgressBar