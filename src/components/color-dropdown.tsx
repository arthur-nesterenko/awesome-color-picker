import * as React from 'react';
import Dropdown from './../hoc//dropdown'

interface ColorDropDownProps {
    onChange : void,
    onClick?: any,
    color?: string,
    isOpen : string,
    onTrigger : any,
    colors : Array < string >,
    selected : any,
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
            {colors.map(color => <li
                data-value={color}
                className={color === selected
                ? 'awesomeActive'
                : ''}
                key={color}>
                <span>
                    {color}</span>
                <span
                    className='awesomeColorSquare'
                    style={{
                    backgroundColor: color
                }}></span>
            </li>)}
        </ul>
    </div>
)

ColorDropDown.defaultProps = {
    selected: 'white'
}
export default Dropdown(ColorDropDown);