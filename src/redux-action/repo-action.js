import Axios from 'axios';
import { api } from '../constants/apis.constant'
import { today, current_page } from '../utils/utils'

export const _GetRepositoryName = (data) => {
    console.log(current_page)
    return (dispatch) => {
        Axios.get(api.github_api.replace('{{today}}', today).replace('{{currentPage}}', current_page)).
            then(response => {
                // console.log(response)
                let data = [];
                response.data.items.forEach((element, index) => {

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
