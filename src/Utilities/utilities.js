export const fetchRepos = (searchValue, pageNum = 1) => {
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

export const paginateCalc = (data) => {
    let numOfPages = Math.ceil(data.body.total_count / 10);
    return numOfPages; 
}

export const getRepo = (owner, name) =>{
    return fetch(`https://api.github.com/repos/${owner}/${name}`, {
        headers:{
            Accept:"application/vnd.github.v3+json"
        }
    })
    .then(resbuffer => resbuffer.json())
    .then((res)=>{
        return res;
    })
}


export const getUser = (user) => {
    return fetch(`https://api.github.com/users/${user}`, {
        headers:{
            Accept:"application/vnd.github.v3+json"
        }
    })
    .then(resbuffer => resbuffer.json())
    .then((res)=>{
        return res;
    })
}