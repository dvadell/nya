import { shallow } from 'enzyme'
import React from 'react';
import Card from './Card';



let gato = {
    coords: "-34.5473024, -58.451558399999996",
    descr: "",
    fechahora: "2019-06-21T22:37:51.154Z",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD",
    nombre: "",
    __v: 0,
    _id: "5d0d5c3f4c2c1600275a0692"
}

it('expect to render Card component', () => {
    expect(shallow(<Card {...gato} />)).toMatchSnapshot()
})
