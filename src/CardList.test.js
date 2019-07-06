import { shallow, mount, render } from 'enzyme'
import React from 'react';
import CardList from './CardList';

it('expect to render Card component', () => {
    const mockGatos = [
        {
            nombre: 'Lala',
            img: '',
            fechahora: '2018-10-04T14:11:01Z'
        },
        {
            nombre: 'Michu',
            img: '',
            fechahora: '2019-10-04T14:11:01Z'
        },
        {
            nombre: 'Nico',
            img: '',
            fechahora: '2017-10-04T14:11:01Z'
        }
    ]
    expect(shallow(<CardList gatos={mockGatos} />)).toMatchSnapshot()
})
