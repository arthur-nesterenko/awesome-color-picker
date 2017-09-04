import * as React from 'react';
import Dropdown from './../hoc//dropdown'
import DropdownItem from './color-dropdown-item';

interface ColorDropDownProps {
    onChange : void,
    onClick?: any,
    isOpen : string,
    onTrigger : any,
    colors : object,
    selected : string,
    onSelect : any
}

const ColorDropDown : React.SFC < ColorDropDownProps > = ({
    colors,
    selected,
    isOpen,
    onClick,
    onTrigger,
    onSelect
}) => (
    <div className='awesomeColorDropDown'>
        <button className='awesomeBtn' onClick={onTrigger}>▼</button>
        <ul
            onClick={onSelect}
            className={isOpen
            ? 'awesomeOpen'
            : ''}>

            {Object
                .keys(colors)
                .map(color => <DropdownItem
                    key={color}
                    colorName={color}
                    isSelected={colors[color] === selected}
                    value={colors[color]}/>)}
        </ul>
    </div>
)

export default Dropdown(ColorDropDown);
