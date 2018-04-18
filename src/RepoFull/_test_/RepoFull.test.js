import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import RepoFull from '../RepoFull';

configure({ adapter: new Adapter() });

test('filler test', () => {
    expect(2+2).toBe(4);
})

// test('RepoFull renders a simple element', () => {
//     const wrapper = mount(
//         <RepoFull />
//     );
//     const textP = wrapper.find('.blankList p');
//     expect(textP.text()).toBe("No repos to show.");

//     const rendered = renderer.create(
//         <RepoFull />
//     );
//     expect(rendered.toJSON()).toMatchSnapshot();
// })