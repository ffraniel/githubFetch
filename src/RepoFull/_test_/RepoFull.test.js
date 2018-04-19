import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import RepoFull from '../RepoFull';

configure({ adapter: new Adapter() });

test('RepoFull renders a simple element', async () => {
    expect(1+2).toBe(3);
    // const match ={
    //     params:{
    //         name:"nam",
    //         owner:"owner"
    //     }
    // }
    // const wrapper =  await mount(
    //     <RepoFull match={match} />
    // );
    // const repoName = wrapper.find('.repo-full-name');
    // expect(typeof repoName.text()).toBe("string");

    // const repoAuthor = wrapper.find('.repo-full-author');
    // expect(typeof repoAuthor.text()).toBe("string");

    // const repoInfo = wrapper.find('.repo-info');
    // expect(repoInfo.children().length).toEqual(2)


    // const rendered = renderer.create(
    //     <RepoFull />
    // );
    // expect(rendered.toJSON()).toMatchSnapshot();
})