import * as React from 'react';
import RangeInput from './range-input'

interface RgbDropDownProps {
    color?: string
}

const RgbDropDown : React.SFC < RgbDropDownProps > = ({color}) => (
    <div className='awesomeRgbDropDown'>
        <span style={{
            color
        }}></span>
        <ul>
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
export default RgbDropDown;
