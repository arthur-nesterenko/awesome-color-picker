import * as React from 'react';
import RgbDropDown from './../components/rgb-dropdown';
import ColorDropDown from './../components//color-dropdown';
import ColorInput from './../components/color-input'
import './../styles/styles.scss';
import Color, {RgbObject} from './../lib/color';

interface onChangeProps {
    hex : string
    name : string,
    rgb : RgbObject
}

export interface ColorPickerProps {
    value?: string
    onChange?: (data : onChangeProps) => void,
    colors?: Array < string >
}

interface ColorPickerState {
    currentColor : any,
    colors : object
}

class ColorPicker extends React.PureComponent < ColorPickerProps,
ColorPickerState > {

    state = {
        currentColor: this._initialCurrentColor(),
        colors: this._initialColors()
    }

    _initialCurrentColor() {
        if (this.props.value) {
            return Color.validate(this.props.value);
        } else if (this.props.colors) {
            return Color.getHexColor(this.props.colors.slice().shift())
        } else 
            return Color
                .hexColors
                .slice()
                .shift()

        }

    _initialColors() {

        let colors = Color.listOfColors;

        if (this.props.colors) {
            colors = Color.normalize(this.props.colors)as object;

            /**
             * Check if initial value different from custom array,
             */

            if (this.props.value && !colors[Color.getColorName(this.props.value)]) {
                colors = Object.assign({}, colors, Color.normalize(this.props.value))
            }
        }

        /**
         *
         */
        return colors;
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
                    rgb: Color.toRgb(newColor)
                })
        }
    }

    render() : JSX.Element {

        const {currentColor, colors} = this.state;

        // console.log(currentColor);
        return <div className='awesomeColorPicker'>
                <ColorInput value={currentColor}/>
                <RgbDropDown currentColor={currentColor} onChange={this.onChange}/>
                <ColorDropDown
                    onChange={this.onChange}
                    selected={currentColor}
                    colors={colors}/>
            </div>
        }
    }

    export default ColorPicker;
