const initState = [];

export default function RepoReducer(state = initState, action) {

    switch (action.type) {
        case 'GET_REPOSITORY_DATA':
            return {
                ...state,
                data: action.data
            }
        default: return state;
    }
}