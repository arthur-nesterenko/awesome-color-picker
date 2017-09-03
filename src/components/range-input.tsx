import * as React from 'react'

interface RangeInputProps {
    name : string,
    value : number,
    onChange?: any
};

const RangeInput : React.SFC < RangeInputProps > = (props) => (<input type="range" {...props} min='0' max='255'/>);

export default RangeInput;