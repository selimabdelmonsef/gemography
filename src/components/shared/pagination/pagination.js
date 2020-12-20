import React, { useState } from 'react';
import Pagination from "react-js-pagination";
import { _GetRepositoryName } from '../../../redux-action/repo-action'
import { connect } from 'react-redux';

export var current_page = 0;

class PaginationFooter extends React.Component {

    constructor(props) {
        super(props);

    }
    handleClick = (currentPage) => {
        current_page = currentPage;
        this.props.GetRepositoryName();
    }

    render() {
        return (
            <div >
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">

                        <li class="page-item"><a class="page-link" href="#page1" onClick={() => this.handleClick(1)}>1</a></li>
                        <li class="page-item"><a class="page-link" href="#page2" onClick={() => this.handleClick(2)}>2</a></li>
                        <li class="page-item"><a class="page-link" href="#page3" onClick={() => this.handleClick(3)}>3</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

// }
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

export default connect(mapStateToProps, mapDisaptchToProps)(PaginationFooter);

