import * as React from 'react';
import Dropdown from './../hoc//dropdown'

interface ColorDropDownProps {
    onChange : void,
    onClick?: any,
    color?: string,
    isOpen : string,
    onTrigger : any,
    colors : Array < string >,
    activeColor : string
}

const ColorDropDown : React.SFC < ColorDropDownProps > = ({colors, activeColor, isOpen, onClick, onTrigger}) => (
    <div className='awesomeColorDropDown'>
        <button className='awesomeBtn' onClick={onTrigger}>▼</button>
        <ul className={isOpen
            ? 'awesomeOpen'
            : ''}>
            {colors.map(color => <li
                className={color === activeColor
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
    activeColor: 'white'
}
export default Dropdown(ColorDropDown);