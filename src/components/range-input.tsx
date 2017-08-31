import * as React from 'react'

interface RangeInputProps {
    name : string,
    min?: number,
    max?: number,
    value?: number
};

const RangeInput : React.SFC < RangeInputProps > = (props) => (<input type="range" {...props}/>);

RangeInput.defaultProps = {
    value: 5,
    min: 0,
    max: 255
}

export default RangeInput;