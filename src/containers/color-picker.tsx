import * as React from 'react';
import RgbDropDown from './../components/rgb-dropdown';
import ColorDropDown from './../components//color-dropdown';
import ColorInput from './../components/color-input'
import './../styles/styles.scss';
import Color from './../lib/color';

interface ColorPickerProps {
    value?: string
    onChange?: any,
    colors?: Array < string >
}

interface ColorPickerState {
    currentColor : any
}

class ColorPicker extends React.PureComponent < ColorPickerProps,
ColorPickerState > {

    public static defaultProps : Partial < ColorPickerProps > = {
        colors: Color.colors
    };

    state = {
        currentColor: Color.hexColors[0]
    }

    onChange = (newColor : string) => {

        this.setState(prevState => ({
            prevColor: prevState.currentColor,
            currentColor: Color.getHexColor(newColor)
        }));
        if (this.props.onChange) {
            this
                .props
                .onChange({
                    hex: Color.getHexColor(newColor),
                    name: newColor,
                    rgb: [0, 0, 0]
                })
        }
    }

    render() : JSX.Element {

        const {currentColor} = this.state;

        return <div className='awesomeColorPicker'>
                <ColorInput value={currentColor}/>
                <RgbDropDown currentColor={currentColor} onChange={this.onChange}/>
                <ColorDropDown
                    onChange={this.onChange}
                    selected={Color.toCssNameFromHex(currentColor)}
                    colors={this.props.colors}/>
            </div>
    }
}

export default ColorPicker;
``