import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import BlankList from '../BlankList';

configure({ adapter: new Adapter() });

test('BlankList renders a simple element', () => {
    const wrapper = mount(
        <BlankList />
    );
    const textP = wrapper.find('.blankList p');
    expect(textP.text()).toBe("No repos to show.");

    const rendered = renderer.create(
        <BlankList />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
})