import { shallow } from 'enzyme'
import React from 'react';
import Credits from './Credits';

describe('Credits', () => {
    it('expect to render empty Credits component', () => {
    expect(shallow(<Credits />)).toMatchSnapshot()
    })
})

