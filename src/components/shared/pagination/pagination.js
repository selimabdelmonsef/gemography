import React, { useState } from 'react';
import Pagination from "react-js-pagination";
import { _GetRepositoryName } from '../../../redux-action/repo-action'
import { connect } from 'react-redux';
import classnames from 'classnames'
import styles from './pagination.module.css'

export var current_page = 1;
class PaginationFooter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: [1, 2]
        }
    }

    handleClick = async (currentPage) => {

        if (currentPage >= this.state.count.length) {
            this.setState(prevState => ({
                count: [...prevState.count, currentPage,1]
            }))
        }
        else if (currentPage + 3 <= this.state.count.length) {
            this.state.count.pop();
        }
        current_page = currentPage;
        await this.props.GetRepositoryName();
        if (this.props.loading === true && this.props.data != null) {
            setTimeout(() => {
                window.scrollTo(0, 200);
            }, 1800);
        }
    };


    render() {
        return (
            <div >
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        {this.state.count.map((el, i) =>                 
                            <li class="page-item">
                                <a className={classnames("page-link", styles.marked_page)} href={"#" + (i + 1)} onClick={() => this.handleClick(i + 1)}>
                                    {i + 1}
                                </a>
                            </li>

                        )}
                         ...
                    </ul>
                </nav>
            </div >
        );
    }
}

// }
const mapStateToProps = (state) => {
    return {
        data: state.RepoReducer.data,
        loading: state.RepoReducer.loading


    }
}

const mapDisaptchToProps = (dispatch) => {
    return {
        GetRepositoryName: (data, onSucess) => {
            dispatch(_GetRepositoryName(data, onSucess));
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(PaginationFooter);

