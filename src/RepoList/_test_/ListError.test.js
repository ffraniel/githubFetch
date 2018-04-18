import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ListError from '../ListError';

configure({ adapter: new Adapter() });

test('filler test', () => {
  const wrapper = mount(
      <ListError />
  );
  const listErrorText = wrapper.find('.listError p');
  expect(listErrorText.text()).toBe('We had an error connecting to Github. Please refresh the page and try again.');
})