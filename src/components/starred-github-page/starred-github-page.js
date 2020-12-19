import React from 'react';
import { connect } from 'react-redux';
import { _GetRepositoryName } from '../../redux-action/repo-action'
import styles from './starred-github-page.module.css'
import Avatar from 'react-avatar';

// import {}

class starredGithubPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.GetRepositoryName()
    }

    render() {
        return (
            <div>
                <h1 className={styles.title}>
                    The most starred Github repos created in the last 30 days
                </h1>


                {this.props?.data?.map((element, index) => {
                    return (
                        <div className={styles.starred_github_page}>
                            <div className={styles.avatar_username}>
                                <Avatar size="100" round={true} src={element?.avatar_url} />
                                <p className={styles.username}>{element.username}</p>
                            </div>
                            <p className={styles.desc_name}>{index + 1}* {element?.name}</p>
                            <div className={styles.desc_star}>
                                <div>
                                    <span>&#11088;</span>
                                    <p className={styles.count}>{element?.stargazers_count}</p>
                                </div>
                                <p className={styles.description_base}>{element?.description}</p>
                            </div>
                            <p className={styles.issues_count}>Number of issues: {element?.open_issues_count}</p>

                        </div>
                    );

                })}

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