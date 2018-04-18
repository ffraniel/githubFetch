export const fetchRepos = (searchValue, pageNum) => {
    let response = {};
    return fetch(`https://api.github.com/search/repositories?q=${searchValue}&page=${pageNum}&per_page=10`, {
        headers:{
            Accept:"application/vnd.github.v3+json"
        }
    })
    .then(resbuffer => {
        return resbuffer.json();
    })
    .then(res => {
        response.body = res;
        return response;
    })
    .catch(console.log)
}

export const useRepos = (searchResults, state) => {
    let items = searchResults.body.items;
    return {
        foundRepos:items
    }
} 