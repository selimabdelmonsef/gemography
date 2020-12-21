import Axios from 'axios';
import { api } from '../constants/apis.constant';
import { today } from '../utils/utils';
import { current_page } from '../components/shared/pagination/pagination'


export const _GetRepositoryName = (data) => {
    return (dispatch) => {
        dispatch({
            type: "LOADING",
            data: true
          });
        Axios.get(api.github_api.replace('{{today}}', today).replace('{{currentPage}}', current_page)).

            then(response => {
                console.log(current_page)
                console.log(response)
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
                    dispatch({
                        type: "LOADING",
                        data: false
                      });

                });
            }).catch(error => {
                console.log(error);
            });

    }
}
