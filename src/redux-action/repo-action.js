import Axios from 'axios';
import { api } from '../constants/apis.constant'

export const _GetRepositoryName = (data) => {
    // console.log(thirtyDaysBefor)
    return (dispatch) => {
        Axios.get(api.github_api).
            then(response => {
                console.log(response)
                // console.log(api.github_api);

                let data = [];
                response.data.items.forEach((element, index) => {
                    if (index < 10) {
                        data = [
                            ...data,
                            {
                                name: element.name,
                                username: element.owner.login,
                                description: element.description,
                                stargazers_count: element.stargazers_count,
                                open_issues_count: element.open_issues_count,
                                avatar_url: element.owner.avatar_url
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
