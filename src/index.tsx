import * as React from 'react';
import {render} from "react-dom";
import ColorPicker from './containers/color-picker';

const colors = ['green', 'red', '#fff', '#eee']

render(
    <ColorPicker colors={colors}/>, document.getElementById('root'));