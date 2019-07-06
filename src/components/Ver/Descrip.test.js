import { shallow } from 'enzyme'
import React from 'react';
import Descrip from './Descrip'

let gato = {
    coords: "-34.5473024, -58.451558399999996",
    descr: "",
    fechahora: "2019-06-21T22:37:51.154Z",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD",
    nombre: "",
    __v: 0,
    _id: "5d0d5c3f4c2c1600275a0692"
}

describe('description', () => {
    it('expect to render Descripción component', () => {
    expect(shallow(<Descrip descr={gato.descr}
                            fechahora={gato.fechahora} />)).toMatchSnapshot()
    })
    
    it('expect to render empty Descripción component', () => {
        expect(shallow(<Descrip />)).toMatchSnapshot()
    })
})

