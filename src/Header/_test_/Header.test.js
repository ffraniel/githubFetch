import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Header from '../Header';

configure({ adapter: new Adapter() });

test('Header renders with title ', () => {
    const wrapper = mount(
        <Header />
    );
    const headerTitle = wrapper.find('.header-title');
    
    expect(headerTitle.text()).toBe("The Repo Room");

    const rendered = renderer.create(
        <Header />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
})