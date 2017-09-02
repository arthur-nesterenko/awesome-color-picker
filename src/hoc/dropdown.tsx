import * as React from 'react';
import {Component} from 'react';

interface DropdownState {
    isOpen : boolean
}

function dropdown < P > (WrappedComponent : React.ComponentClass < any > | React.StatelessComponent < any >,) : React.ComponentClass < any > {
    return class HOCDropDown extends React.Component < any,
    DropdownState > {

        state = {
            isOpen: false
        }

        onOpen = () => this.setState({isOpen: true});
        onClose = () => this.setState({isOpen: false});
        onTrigger = () => this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }))

        render() {

            return <WrappedComponent
                {...this.props}
                {...this.state}
                onTrigger={this.onTrigger}
                onOpen={this.onOpen}
                onClose={this.onClose}/>
        }
    }
}

export default dropdown;