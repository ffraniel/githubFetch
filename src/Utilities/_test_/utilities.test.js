import React from 'react';
import ReactDOM from 'react-dom';
import { fetchRepos, useRepos, paginateCalc, getRepo } from '../utilities';

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
    const fakeReponse3 = { 
        body:
        { total_count: 245,
        incomplete_results: false,
        items: [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        }
    };
    const numberOfPages1 = paginateCalc(fakeReponse3);
    expect(numberOfPages1).toBe(25);

    const fakeReponse4 = { 
        body: { total_count: 83}
    };

    const numberOfPages2 = paginateCalc(fakeReponse4)
    expect(numberOfPages2).toBe(9);

})

test('getRepo returns an individual object containing repo json', async ()=>{
    let repoUser = "ffraniel";
    let repoName = "jenniW";
    let data = await getRepo(repoUser, repoName);
    console.log(data)
    expect(1+1).toBe(2);
    expect(typeof data).toBe("object");
    expect(data.name).toBe(repoName);
    expect(data.owner.login).toBe(repoUser);
})