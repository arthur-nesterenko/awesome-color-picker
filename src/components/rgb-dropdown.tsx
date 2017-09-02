import * as React from 'react';
import RangeInput from './range-input'
import Dropdown from './../hoc/dropdown'

interface RgbDropDownProps {
    color?: string,
    onTrigger : any,
    isOpen : boolean
}

const RgbDropDown : React.SFC < RgbDropDownProps > = ({color, isOpen, onTrigger}) => (
    <div className='awesomeRgbDropDown'>
        <button
            className='awesomeBtn'
            onClick={onTrigger}
            style={{
            color
        }}></button>
        <ul className={isOpen
            ? 'awesomeOpen'
            : ''}>
            <li>
                <div>R</div>
                <div>
                    <RangeInput name='r'/>
                </div>
            </li>
            <li>
                <div>G</div>
                <div>
                    <RangeInput name='g'/>
                </div>
            </li>

            <li>
                <div>B</div>
                <div>
                    <RangeInput name='b'/>
                </div>
            </li>
        </ul>
    </div>
);

RgbDropDown.defaultProps = {
    color: 'white'
}
export default Dropdown(RgbDropDown);
