import * as React from 'react';
import Dropdown from './../hoc//dropdown'

interface ColorDropDownProps {
    // onChange : void,
    onClick?: any,
    color?: string,
    isOpen : string,
    onTrigger : any
}

const ColorDropDown : React.SFC < ColorDropDownProps > = ({color, isOpen, onClick, onTrigger}) => (
    <div className='awesomeColorDropDown'>
        <button onClick={onTrigger}>▼</button>
        <ul className={isOpen
            ? 'awesomeOpen'
            : ''}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
)

ColorDropDown.defaultProps = {
    color: 'white'
}
export default Dropdown(ColorDropDown);