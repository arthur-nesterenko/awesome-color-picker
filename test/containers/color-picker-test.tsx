import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as enzyme from 'enzyme';

import ColorPicker from './../../src/';

test('Color picker should be render without props', () => {

    const component = renderer.create(<ColorPicker/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});

test('Color picker should be render with props', () => {

    const props = {
        value: '#fff',
        colors: [
            'green',
            'yellow',
            '#FF0000',
            'pink',
            'gray',
            'red'
        ],
        onChange: data => console.log('fire callback', data)
    }
    const component = renderer.create(<ColorPicker/>);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
    // tree     .props     .onChange('#FF0000')

});