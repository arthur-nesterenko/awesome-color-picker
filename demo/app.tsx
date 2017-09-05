import * as React from 'react';
import {render} from 'react-dom';
import ColorPicker from './../src/'

const rootEl = document.getElementById('root');

const onChange = data => console.log('onChange', data)

const styles = {
    marginTop: '15px'
}
const App = () => (
    <div>
        <div style={styles}>
            <h4>
                default props</h4>
            <ColorPicker onChange={onChange}/>
        </div>

        <div style={styles}>
            <h4>custom colors</h4>
            <ColorPicker colors={['white', 'red', '#fff', 'green']}/>
        </div>
        <div style={styles}>
            <h4>custom value</h4>
            <ColorPicker value='gold'/>
        </div>

        <div style={styles}>
            <h4>custom value and colors</h4>
            <ColorPicker value='blue' colors={['white', 'red', 'gray', 'green']}/>
        </div>
    </div>
)
/**
 *
 */
render(
    <App/>, rootEl);