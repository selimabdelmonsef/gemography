var today = new Date(new Date().setDate(new Date().getDate() - 30));
today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
export const api = {
    github_api: 'https://api.github.com/search/repositories?q=created:>' + today + '&sort=stars&order=desc'
}

