'use client';

import { Slider } from "@nextui-org/slider";

const SliderBar = ({ label = '', value = 1, maxValue = value, minValue = 0, onChangeEnd = (value: number | number[]) => { console.log(value) } }) => {

    return (
        <Slider
            label={label}
            defaultValue={value}
            maxValue={maxValue}
            minValue={minValue}
            onChangeEnd={onChangeEnd}
            showTooltip={true}
            showSteps={true}
            step={1}
        />
    )
}

export default SliderBar