import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import { _GetRepositoryName } from '../../../redux-action/repo-action';
import { SpinnerFooter } from '../spinner/spinner';

export var curr = 1;
// const Scroll=()=> {
//     render() 
//         return (
//             window.addEventListener('scroll', () => {
//             const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//             console.log(scrollTop, scrollHeight, clientHeight)
//             if (clientHeight + scrollTop >= scrollHeight) {

//                 console.log("bottom");
//                 // if (this.props.loading == false) {
//                 curr = curr + 1;
//                 this.props.GetRepositoryName();
//                 setTimeout(() => {
//                     window.scrollTo(0, 200);
//                 }, 1800);
//                 // }

//             }
//         })
//         )
//     }


class Scroll extends React.Component {

    render() {

        window.addEventListener('scroll', () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            // console.log(scrollTop, scrollHeight, clientHeight)
            if (clientHeight + scrollTop >= scrollHeight) {

                // console.log("bottom");
                if (this.props.loading == false) {
                    curr = curr + 1;
                    setTimeout(() => {
                        this.props.GetRepositoryName();
                    }, 3000);

                    setTimeout(() => {
                        window.scrollTo(0, 200);
                    }, 3000);
                }

            }

        })
        return (

            <div>
                {this.props.data === null ?
                    <h1>No more data</h1>
                    :
                    ""
                }
            </div>
        )

    }
}

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

export default connect(mapStateToProps, mapDisaptchToProps)(Scroll);