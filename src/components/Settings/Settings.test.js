import { shallow } from 'enzyme'
import React from 'react';
import Settings from './Settings';

describe('Settings', () => {
    it('expect to render Settings component', () => {
    expect(shallow(<Settings />)).toMatchSnapshot()
    })
})

