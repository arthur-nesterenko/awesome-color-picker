import * as React from 'react';

interface ColorDropDownProps {
    // onChange : void, onClick : void,
    color?: string
}

const ColorDropDown : React.SFC < ColorDropDownProps > = ({color}) => (
    <div className='awesomeColorDropDown'>
        <span>▼</span>
        <ul>
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