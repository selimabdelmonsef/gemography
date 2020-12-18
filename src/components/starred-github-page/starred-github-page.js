import React from 'react';
import { connect } from 'react-redux';
import { _GetRepositoryName } from '../../redux-action/repo-action'
// import {}

class starredGithubPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    componentDidUpdate() {
        console.log(11, this.props)
    }

    componentDidMount() {
        this.props.GetRepositoryName()

        // console.log(12665432, this.props)

    }

    render() {
        return (
            <div>
                SELIM 
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.RepoReducer.data


    }
}

const mapDisaptchToProps = (dispatch) => {
    return {
        GetRepositoryName: (data, onSucess) => {
            dispatch(_GetRepositoryName(data, onSucess));
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(starredGithubPage);