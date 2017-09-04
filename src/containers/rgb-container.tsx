import * as React from 'react';
import RangeInput from './../components/range-input'
import Color, {RgbObject} from './../lib/color'

interface RgbContainerState {
    rgb : RgbObject,
    initialColor : string,
    isChanged : boolean
}

interface RgbContainerProps {
    activeColor : string,
    onChange : any,
    onClose?: any
}

interface Object {
    [key : string] : number
}

class RgbContainer extends React.PureComponent < RgbContainerProps,
RgbContainerState > {

    state = {
        rgb: {
            ...Color.toRgb(this.props.activeColor)
        },
        initialColor: this.props.activeColor,
        isChanged: false
    }

    componentWillReceiveProps(nextProps : RgbContainerProps) {
        this.setState({
            rgb: {
                ...Color.toRgb(nextProps.activeColor)
            }
        })
    }

    onClickBtn = (e : any) => {

        const type = e.target.name;
        const {isChanged} = this.state;

        if (type === 'cancel') {

            if (isChanged) {
                this.setState({isChanged: false});
                this
                    .props
                    .onChange(this.state.initialColor);
            }

        } else {
            this.setState({isChanged: false, initialColor: this.props.activeColor})
        }

        this
            .props
            .onClose()
    }

    onChange = (e : Event) => {

        const target = e.target as HTMLInputElement;
        const {isChanged} = this.state;

        if (!isChanged) {

            this.setState({isChanged: true, initialColor: this.props.activeColor})
        }

        this.setState(prevState => ({
            rgb: {
                ...prevState.rgb,
                [target.name]: Number(target.value)
            }

        }));

        this
            .props
            .onChange(Color.toHexFromRgb(this.state.rgb))

    }

    render() : JSX.Element {

        const {rgb} = this.state;

        return <div>
                {Object
                    .keys(rgb)
                    .map((key : string) => <li key={key}><RangeInput name={key} value={rgb[key]} onChange={this.onChange}/>
                    </li>)}

                <li className='footer'>
                    <button
                        onClick={this.onClickBtn}
                        name='cancel'
                        className='awesomeBtn awesomeBtn--default'>Cancel</button>
                    <button
                        onClick={this.onClickBtn}
                        name='ok'
                        className='awesomeBtn awesomeBtn--agree'>ok</button>
                </li>
            </div>
    }
}

export default RgbContainer;