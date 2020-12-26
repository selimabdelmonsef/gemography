import Axios from 'axios';
import { api, github_allApi } from '../constants/apis.constant';
import { today } from '../utils/utils';
import { current_page } from '../components/shared/pagination/pagination'
import { curr } from '../components/shared/scroll/scroll'
import { currPage } from '../components/starred-github-page/starred-github-page'

var currentPage = 0;
export const _GetRepositoryName = () => (dispatch, data) => {
    currentPage += 1;
    dispatch({
        type: "LOADING",
        data: true
    });


    Axios.get(api.github_api.replace('{{today}}', today).replace('{{currentPage}}', currentPage)).

        then(response => {
            // console.log(curr)
            console.log(response)

            let data = [];
            let dataConcat = [];
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
                // dispatch({
                //     type: "TRIAL",
                //     trial: dataConcat

                // });

                dispatch({
                    type: "LOADING",
                    data: false
                });

            });
        }).catch(error => {
            console.log(error);
        });



}
