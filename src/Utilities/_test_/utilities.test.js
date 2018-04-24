import React from 'react';
import ReactDOM from 'react-dom';
import { fetchRepos, useRepos, paginateCalc, getRepo, getUser, splitRepoList } from '../utilities';

test('fetchRepos returns response from github', async () => {
    const data = await fetchRepos('test', 1);

    expect(typeof data).toBe("object");
    expect(typeof data.body).toBe("object");
    expect(Array.isArray(data.body.items)).toBe(true);
})

test('tests useRepos return a state object', () => {
    const dummyState = {
        foundRepos:[]
    }

    const fakeReponse = { 
        body:
        { total_count: 2617160,
        incomplete_results: false,
        items: [ {}, {} ]
        }
    };
    const state = useRepos(fakeReponse, dummyState);
    const foundRepos = state.foundRepos;
    expect(typeof state).toBe("object");
    expect(Array.isArray(foundRepos)).toBe(true);
})

test('tests useRepos puts items in foundRepos', () => {
    const dummyState = {
        foundRepos:[]
    }

    const fakeReponse = { 
        body:
        { total_count: 2,
        incomplete_results: false,
        items: [ 
            {
                id: 11111111,
                name: 'test',
                full_name: 'coolTest',
                owner:
                { 
                    login: 'tester1',
                    id: 1000000,
                },
                forks_count:322,
                forks_url: 'https://api.github.com/repos/pytest-dev/pytest/forks',
                has_issues: true,
                open_issues_count: 34,
                issue_comment_url: 'https://api.github.com/repos/marmelab/gremlins.js/issues/comments',
                issues_url: 'https://api.github.com/repos/marmelab/gremlins.js/issues',
                issue_events_url: 'https://api.github.com/repos/marmelab/gremlins.js/issues/events'
            }, 
            {
                id: 22222222,
                name: 'test1',
                full_name: 'coolTest1',
                owner:
                { 
                    login: 'tester1',
                    id: 11111111,
                },
                forks_count: 21,
                forks_url: 'https://api.github.com/repos/pytest-dev/pytest/forks',
                has_issues: true,
                open_issues_count: 34,
                issue_comment_url: 'https://api.github.com/repos/marmelab/gremlins.js/issues/comments',
                issues_url: 'https://api.github.com/repos/marmelab/gremlins.js/issues',
                issue_events_url: 'https://api.github.com/repos/marmelab/gremlins.js/issues/events'
            } ]
        }
    };

    const state = useRepos(fakeReponse, dummyState);
    const foundRepos = state.foundRepos;
    const fetchedReposLength = fakeReponse.body.items.length;
    expect(Object.keys(state).length).toBe(1);
    expect(foundRepos.length).toBe(fetchedReposLength);  
    expect(typeof foundRepos[0]).toBe("object");
    expect(typeof foundRepos[0].name).toBe("string");
    expect(foundRepos[0].name).toBe(fakeReponse.body.items[0].name);

})

test('paginationCalc works out how many pages they are', () => {
    const fakeRepos = [ {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1} ];
    const numberOfPages1 = paginateCalc(fakeRepos);
    expect(numberOfPages1).toBe(2);
    const fakeReponse4 =  [ {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1}, {A:1} ];
    const numberOfPages2 = paginateCalc(fakeReponse4);
    expect(numberOfPages2).toBe(3);
})

test('getRepo returns an individual object containing repo json', async ()=>{
    let repoUser = "ffraniel";
    let repoName = "jenniW";
    let data = await getRepo(repoUser, repoName);
    expect(typeof data).toBe("object");
    expect(data.name).toBe(repoName);
    expect(data.owner.login).toBe(repoUser);
})

test('getUser returns an individual object containing repo json', async ()=>{
    let repoUser = "ffraniel";
    let data = await getUser(repoUser);
    expect(typeof data).toBe("object");
    expect(data.login).toBe(repoUser);
})

test('check splitRepoList consistently splits the repos into groups of ten', ()=>{
    let allRepos = [];
    for(var i = 0; i < 75; i ++ ){
        allRepos.push({i})
    }
    
    let pageThree = splitRepoList(allRepos, 3);
    expect(pageThree[0].i).toBe(20);
    expect(pageThree[9].i).toBe(29);
    expect(pageThree[5].i).toBe(25);
    expect(pageThree.length).toBe(10);

    let pageTwo = splitRepoList(allRepos, 2);
    expect(pageTwo[0].i).toBe(10);
    expect(pageTwo[9].i).toBe(19);
    expect(pageTwo[5].i).toBe(15);
    expect(pageTwo.length).toBe(10);

    let pageSeven = splitRepoList(allRepos, 7);  
    expect(pageSeven[0].i).toBe(60);
    expect(pageSeven[5].i).toBe(65);
    expect(pageSeven[9].i).toBe(69);
    expect(pageSeven.length).toBe(10);

    let pageThreeAgain = splitRepoList(allRepos, 3);
    expect(pageThreeAgain[0].i).toBe(20);
    expect(pageThreeAgain[5].i).toBe(25);
    expect(pageThreeAgain[9].i).toBe(29);
    expect(pageThreeAgain.length).toBe(10); 

    let lessRepos = [];
    for(var j = 0; j < 7; j ++ ){
        lessRepos.push({j})
    }
    let lessReposSplitFirstPage = splitRepoList(lessRepos, 1)
    expect(lessReposSplitFirstPage[0].j).toBe(0);
    expect(lessReposSplitFirstPage.length).toBe(7);
})