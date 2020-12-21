const initState = [{ loading: true }];

export default function RepoReducer(state = initState, action) {

    switch (action.type) {
        case 'GET_REPOSITORY_DATA':
            return {
                ...state,
                data: action.data
            };
        case "LOADING":
            return {
                ...state,
                loading: action.data
            };
        default: return state;
    }
}