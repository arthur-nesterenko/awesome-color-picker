import * as React from 'react';
import {render} from "react-dom";
import ColorPicker from './containers/color-picker';

const onChange = (data) => {

    console.log(data, '---');
}
render(
    <ColorPicker onChange={onChange}/>, document.getElementById('root'));