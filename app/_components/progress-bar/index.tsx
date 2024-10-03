'use client';

import { Progress } from "@nextui-org/progress";

const ProgressBar = ({ value = 0 }) => {

    return (
        <div className="flex justify-center">
            <Progress
                className="max-w-md"
                value={value}
                showValueLabel={true}
            />
        </div>
    )
}

export default ProgressBar