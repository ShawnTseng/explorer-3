'use client';

import { Slider } from "@nextui-org/slider";

const SliderBar = ({ label = '', defaultValue = 1, maxValue = defaultValue, onChangeEnd = (value: number | number[]) => { console.log(value) } }) => {

    return (
        <Slider
            label={label}
            defaultValue={defaultValue}
            maxValue={maxValue}
            onChangeEnd={onChangeEnd}
            minValue={0}
            showTooltip={true}
            showSteps={true}
            step={1}
        />
    )
}

export default SliderBar