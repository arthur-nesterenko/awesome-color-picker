import * as React from 'react';

interface ColorDropDownItemProps {
    value : string,
    colorName : string,
    isSelected : boolean
}

const ColorDropDownItem = ({value, colorName, isSelected} : ColorDropDownItemProps) : JSX.Element => (
    <li
        data-value={value}
        className={isSelected
        ? 'awesomeActive'
        : ''}>
        <span className='awesomeColorName'>
            {colorName}</span>
        <span
            className='awesomeColorSquare'
            style={{
            backgroundColor: value
        }}></span>
    </li>
);

export default ColorDropDownItem;