import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import RepoFull from '../RepoFull';

configure({ adapter: new Adapter() });

test('RepoFull renders a simple element', () => {
    const match ={
        params:{
            name:"name",
            owner:"owner"
        }
    }
    const wrapper = mount(
        <RepoFull match={match} />
    );
    const repoName = wrapper.find('.repo-full-name');
    expect(typeof repoName.text()).toBe("string");

    const repoAuthor = wrapper.find('.repo-full-author');
    expect(typeof repoAuthor.text()).toBe("string");

    const repoReadme = wrapper.find('.repo-full-readme');
    expect(typeof repoReadme.text()).toBe("string");

    const repoInfo = wrapper.find('.repo-info');
    expect(repoInfo.children().length).toEqual(2)


    // const rendered = renderer.create(
    //     <RepoFull />
    // );
    // expect(rendered.toJSON()).toMatchSnapshot();
})