import * as React from 'react'

interface RangeInputProps {
    name : string,
    value : number,
    onChange?: (e : any) => void
};

const RangeInput : React.SFC < RangeInputProps > = (props) => (
    <div>
        <span>{props
                .name
                .toUpperCase()}{' '}{props.value}</span>
        <input className='awesomeRangeInput' type="range" {...props} min='0' max='255'/></div>
);

export default RangeInput;