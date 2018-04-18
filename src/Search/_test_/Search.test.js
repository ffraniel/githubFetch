import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Search from '../Search';

configure({ adapter: new Adapter() });

test('filler test', () => {
  const wrapper = mount(
      <Search />
  );
  const searchForm = wrapper.find('.searchForm');
  console.log(searchForm);
  expect(2+1).toBe(3);
//   expect(searchForm.text()).toBe('hya');
})