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
    currentColor : any,
    colors : Array < string >
}

class ColorPicker extends React.PureComponent < ColorPickerProps,
ColorPickerState > {

    state = {
        currentColor: this.props.value
            ? Color.validate(this.props.value)
            : this.props.colors
                ? Color.getHexColor(this.props.colors[0])
                : Color.hexColors[0],
        colors: this.props.colors
            ? Color.normlize(this.props.colors)
            : Color.colors
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

        console.log(this.state);

        return <div className='awesomeColorPicker'>
                <ColorInput value={currentColor}/>
                <RgbDropDown currentColor={currentColor} onChange={this.onChange}/>
                <ColorDropDown
                    onChange={this.onChange}
                    selected={Color.toCssNameFromHex(currentColor)}
                    colors={this.state.colors}/>
            </div>
    }
}

export default ColorPicker;
``