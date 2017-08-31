import * as React from 'react';
import ColorDropDown from './../components/color-dropdown'

interface colorDropDownContainerProps {}
interface colorDropDownContainerState {
    isOpen?: boolean
}

class colorDropDownContainer extends React.PureComponent < undefined,
colorDropDownContainerState > {

    state = {
        isOpen: false
    }

    onClick = () => this.setState(prevState => ({
        isOpen: !prevState.isOpen
    }))

    render() : JSX.Element {

        const {isOpen} = this.state;
        return (<ColorDropDown
            open={isOpen
            ? 'awesomeOpen'
            : ''}
            onClick={this.onClick}/>)
    }
}

export default colorDropDownContainer;