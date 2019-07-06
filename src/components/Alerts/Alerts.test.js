import { shallow } from 'enzyme'
import React from 'react';
import Alerts from './Alerts';

describe('Alerts', () => {
    it('expect to render empty Alerts component', () => {
    expect(shallow(<Alerts />)).toMatchSnapshot()
    })
})

