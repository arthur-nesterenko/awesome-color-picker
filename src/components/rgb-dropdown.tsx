import * as React from 'react';
import Dropdown from './../hoc/dropdown'
import RgbContainer from './../containers//rgb-container';

interface RgbDropDownProps {
    currentColor : string,
    onTrigger : () => void,
    isOpen : boolean,
    onChange : () => void,
    onClose : () => void
}

const RgbDropDown : React.SFC < RgbDropDownProps > = ({currentColor, isOpen, onClose, onTrigger, onChange}) => (
    <div className='awesomeRgbDropDown'>
        <button
            className='awesomeBtn'
            onClick={onTrigger}
            style={{
            background: currentColor
        }}></button>
        <ul className={isOpen
            ? 'awesomeOpen'
            : ''}>

            <RgbContainer onClose={onClose} onChange={onChange} activeColor={currentColor}/>

        </ul>
    </div>
);

// RgbDropDown.defaultProps = {     color: 'white' }
export default Dropdown(RgbDropDown);
