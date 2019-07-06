import { shallow } from 'enzyme'
import React from 'react';
import CardSlider from './CardSlider'

let wrapper;
beforeEach(() => {
    const mockProps = {
        gatos: [
            {
                coords: "-34.5473024, -58.451558399999996",
                descr: '',
                nombre: 'Lala',
                img: '',
                fechahora: '2019-10-04T14:11:01.333Z',
                _id: "5d0d5c3f4c2c1600275a0692",
                __v: 0,
            },
            {
                coords: "-34.5473024, -58.451558399999996",
                descr: "",
                fechahora: "2019-06-21T22:37:51.154Z",
                img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD",
                nombre: "",
                __v: 0,
                _id: "5d0d5c3f4c2c1600275a0692"
            },
            {
                coords: "-34.5473024, -58.451558399999996",
                descr: "",
                fechahora: "2019-06-21T20:09:29.784Z",
                img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD",
                nombre: "",
                __v: 0,
                _id: "5d0d3979b2049f25c07830ce"
            }
        ]
    }
    wrapper = shallow(<CardSlider {...mockProps} />)
})

it('expect to render CardList component', () => {
    expect(wrapper).toMatchSnapshot()
})
