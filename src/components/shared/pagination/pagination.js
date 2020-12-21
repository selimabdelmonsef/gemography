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
            page_number: ""
        }

    }
    handleClick = async (currentPage) => {
        // this.setState({
        //     loading: true
        // });
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


                        {/* <li class="page-item">
                            <a className={classnames("page-link", styles.marked_page)} href="#page1" onClick={() => this.handleClick(1), this.disabled=true}>
                                1
                            </a>
                        </li>
                        <li class="page-item">
                            <a className={classnames("page-link", styles.marked_page)} href="#page2" onClick={() => this.handleClick(2)}>
                                2
                            </a>
                        </li>
                        <li class="page-item">
                            <a className={classnames("page-link", styles.marked_page)} href="#page3" onClick={() => this.handleClick(3)}>
                                3
                            </a>
                        </li> */}

                        <li class="page-item">
                            {current_page == 1 ?
                                <a className={classnames("page-link", styles.marked_page)} href="#page1">
                                    1
                            </a>
                                :
                                <a class="page-link" href="#page1" onClick={() => this.handleClick(1)}>
                                    1
                            </a>
                            }
                        </li>
                        <li class="page-item">
                            {current_page == 2 ?
                                <a className={classnames("page-link", styles.marked_page)} href="#page2">
                                    2
                            </a>
                                :
                                <a class="page-link" href="#page2" onClick={() => this.handleClick(2)}>
                                    2
                            </a>
                            }
                        </li>
                        <li class="page-item">
                            {current_page == 3 ?
                                <a className={classnames("page-link", styles.marked_page)} href="#page3">
                                    3
                            </a>
                                :
                                <a class="page-link" href="#page3" onClick={() => this.handleClick(3)}>
                                    3
                            </a>
                            }
                        </li>

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

