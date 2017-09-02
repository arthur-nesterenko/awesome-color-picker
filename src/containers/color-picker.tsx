import * as React from 'react';
import RgbDropDown from './../components/rgb-dropdown';
import ColorDropDown from './../components//color-dropdown';
import ColorInput from './../components/color-input'
import './../styles/styles.scss';

class ColorPicker extends React.PureComponent < undefined,
undefined > {

    render() : JSX.Element {
        return <div className='awesomeColorPicker'>
                <ColorInput/>
                <RgbDropDown/>
                <ColorDropDown/>
            </div>
    }
}

export default ColorPicker;