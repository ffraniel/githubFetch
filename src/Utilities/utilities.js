export const fetchRepos = (searchValue, pageNum) => {
    let link;
    let response = {};
    return fetch(`https://api.github.com/search/repositories?q=${searchValue}&page=${pageNum}&per_page=10`, {
        headers:{
            Accept:"application/vnd.github.v3+json"
        }
    })
    .then(resbuffer => {
        link = resbuffer.headers.map.link;
        return resbuffer.json();
    })
    .then(res => {
        response.headers = { link };
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