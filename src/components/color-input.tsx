import * as React from 'react';

interface ColorInputProps {
    value : string
}

const ColorInput = ({value} : ColorInputProps) : JSX.Element => (<input readOnly className='awesomeColorInput' type="text" value={value}/>)

export default ColorInput;