import * as React from 'react';

interface ColorDropDownProps {
    // onChange : void,
    onClick : any,
    color?: string,
    open : string
}

const ColorDropDown : React.SFC < ColorDropDownProps > = ({color, open, onClick}) => (
    <div className='awesomeColorDropDown'>
        <span onClick={onClick}>▼</span>
        <ul className={open}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
)

ColorDropDown.defaultProps = {
    color: 'white'
}
export default ColorDropDown;