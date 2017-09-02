import * as React from 'react';
import RgbDropDown from './../components/rgb-dropdown';
import ColorDropDown from './../components//color-dropdown';
import ColorInput from './../components/color-input'
import './../styles/styles.scss';
import * as TinyColor from 'tinycolor2';

interface ColorPickerProps {
    value?: string
    onChange?: void,
    colors?: Array < string >
}

class ColorPicker extends React.PureComponent < ColorPickerProps,
undefined > {

    constructor(props : ColorPickerProps)
    {
        super(props);

        const test = TinyColor('red');

        console.log(test)

    }

    render() : JSX.Element {
        return <div className='awesomeColorPicker'>
                <ColorInput/>
                <RgbDropDown/>
                <ColorDropDown/>
            </div>
    }
}

export default ColorPicker;
``