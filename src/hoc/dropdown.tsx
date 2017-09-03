import * as React from 'react';
import {PureComponent} from 'react';
import {findDOMNode} from 'react-dom';

interface DropdownState {
    isOpen : boolean,
    selected : any
}

function dropdown < P > (WrappedComponent : React.ComponentClass < any > | React.StatelessComponent < any >,) : React.ComponentClass < any > {
    return class HOCDropDown extends React.PureComponent < any,
    DropdownState > {

        state = {
            isOpen: false,
            selected: ''
        }

        componentDidMount() {

            window.addEventListener('click', this._onWindowClick.bind(this));
            window.addEventListener('touchstart', this._onWindowClick.bind(this));
        }

        componentWillUnmount() {
            window.removeEventListener('click', this._onWindowClick.bind(this));
            window.removeEventListener('touchstart', this._onWindowClick.bind(this));
        }

        _onWindowClick(event : any) {

            const dropdownElement = findDOMNode(this);
            if (event.target !== dropdownElement && !dropdownElement.contains(event.target) && this.state.isOpen) {
                this.onClose()
            }
        }

        onOpen = () => this.setState({isOpen: true});
        onClose = () => this.setState({isOpen: false});
        onTrigger = () => this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));

        onSelect = (e : any) => {
            const target = e.target;
            const parentNode = target.parentNode;
            const targetTagName = 'LI';

            const targerElem = (target.tagName === targetTagName)
                ? target
                : (parentNode.tagName === targetTagName)
                    ? target.parentNode
                    : undefined;

            if (targerElem) {
                const val = targerElem.getAttribute('data-value');
                this.setState({selected: val})

                if (this.props.onChange) 
                    this.props.onChange(val);
                }
            
        }

        render() : JSX.Element {return <WrappedComponent
            {...this.props}
            {...this.state}
            onTrigger={this.onTrigger}
            onOpen={this.onOpen}
            onClose={this.onClose}
            onSelect={this.onSelect}/>}
    }
}

export default dropdown;