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

        let colors = Color.colors;

        if (this.props.colors) {
            colors = Color.normlize(this.props.colors)as Array < string >;

            /**
             * Check if initial value different from custom array,
             */
            if (this.props.value && (colors.indexOf(Color.getColorName(this.props.value)) === -1)) {

                colors = [
                    ...colors,
                    Color.getColorName(this.props.value)
                ];
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