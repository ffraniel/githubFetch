import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Profile from '../Profile';

configure({ adapter: new Adapter() });

test('filler test', () => {
    expect(2+2).toBe(4);
})

// test('Profile renders correctly', () => {
//     const wrapper = mount(
//         <Profile />
//     );
//     const textP = wrapper.find('.blankList p');
//     expect(textP.text()).toBe("No repos to show.");

//     const rendered = renderer.create(
//         <Profile />
//     );
//     expect(rendered.toJSON()).toMatchSnapshot();
// })