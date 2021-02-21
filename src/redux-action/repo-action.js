import Axios from 'axios';
import { api, github_allApi } from '../constants/apis.constant';
import { myDate } from '../utils/utils';

var currentPage = 0;
export const _GetRepositoryName = () => (dispatch, data) => {
    // console.log(today)
    console.log(myDate);
    currentPage += 1;
    dispatch({
        type: "LOADING",
        data: true
    });


    Axios.get(api.github_api.replace("{{myDate}}", myDate).replace('{{currentPage}}', currentPage)).

        then(response => {
            // console.log(curr)
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
                    data: data,
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
