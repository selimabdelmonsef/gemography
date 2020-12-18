import {combineReducers} from 'redux';
import RepoReducer from '../redux-reducers/repo-reducer';

const rootReducer = combineReducers({


    RepoReducer
});

export const MainReducerActionType = {
    Clear: "ClearMainReducer"
}

export default function MainReducers(state, action) {
    switch (action.type) {
        case MainReducerActionType.Clear:
            state = undefined
        default: return rootReducer(state, action);
    }
}