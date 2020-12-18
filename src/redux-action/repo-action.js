import Axios from 'axios';


export const _GetRepositoryName = (data) => {
    return (dispatch) => {
        Axios.get(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`).
            then(response => {
                // console.log(response)
                let data = [];
                response.data.items.forEach((element, index) => {
                    if (index < 10) {
                        data = [
                            ...data,
                            {
                                name:element.name,
                                username: element.owner.login,
                                description:element.description,
                                stargazers_count:element.stargazers_count,
                                open_issues_count:element.open_issues_count,
                            }
                        ];
                     
                    }
                       dispatch({
                            type: "GET_REPOSITORY_DATA",
                            data: data
                        });
                        // console.log(initState)
                   
                });
                // console.log(data);
                // console.log(response.data);
            }).catch(error => {
                console.log(error);
            });

    }
}
