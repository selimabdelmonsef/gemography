import React from "react";
import { connect } from "react-redux";
import { _GetRepositoryName, _AllData } from "../../redux-action/repo-action";
import styles from "./starred-github-page.module.css";
import Avatar from "react-avatar";
// import PaginationFooter from "../shared/pagination";
import { SpinnerFooter } from "../shared/spinner/spinner";
import InfiniteScroll from "react-infinite-scroll-component";
// import ReactList from "react-list";

// export var currPage = 0;
export let topRatedMovies = [];
// export let initialData = []
export var x = -1;
export var counting = -1;

class starredGithubPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Array.from({ length: 1 }),
            initialData: []
        }


    }
    async componentDidMount() {
        await this.props.GetRepositoryName();


        setTimeout(() => {
            if (this.props.data != null) {
                this.setState({
                    items: this.state.items.concat(Array.from({ length: 0 })),
                    initialData: this.state.initialData.concat(this.props.data)
                })
            }

        }, 2500);

    }

    fetchMoreData = async () => {
        await this.props.GetRepositoryName();
        this.setState({
            pageCount: this.state.pageCount + 1,

        });
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 10 })),
            });
            this.setState({
                items: this.state.items.concat(Array.from({ length: 1 })),
                initialData: [...this.state.initialData, ...this.props.data]
            })

        }, 3000);
    };


    render() {
        return (
            <div>
                <h1 className={styles.title}>
                    The most starred Github repos created in the last 30 days
        </h1>
                <div>
                    <hr />
                    <div>
                        <div>
                            {this.state?.initialData?.map((element, index) => (


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





                            ))}
                        </div>

                        <InfiniteScroll
                            dataLength={this.state.items.length}
                            next={this.fetchMoreData}
                            hasMore={true}
                        >
                            {this.state.items.map((i, index) => {
                                return <div></div>
                            })}


                        </InfiniteScroll>

                    </div>
                    <div className={styles.spinner}>
                    {this.props.loading ? <SpinnerFooter></SpinnerFooter> : ""}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.RepoReducer.data,
        loading: state.RepoReducer.loading,
        trial: state.RepoReducer.trial,
        // allData: state.RepoReducer.AllData
    };
};

const mapDisaptchToProps = (dispatch) => {
    return {
        GetRepositoryName: (data, onSucess) => {
            dispatch(_GetRepositoryName(data, onSucess));
        },
    };
};

export default connect(mapStateToProps, mapDisaptchToProps)(starredGithubPage);























// import React from 'react';
// import { connect } from 'react-redux';
// import { _GetRepositoryName } from '../../redux-action/repo-action';
// import styles from './starred-github-page.module.css';
// import Avatar from 'react-avatar';
// import ReactDOM from 'react-dom'
// import PaginationFooter from '../shared/pagination/pagination'
// import { SpinnerFooter } from '../shared/spinner/spinner'
// import Scroll from '../shared/scroll/scroll'
// import InfiniteScroll from 'react-infinite-scroll-component';

// export var currentPage = 1;
// class starredGithubPage extends React.Component {

//     componentDidMount() {
//         this.props.GetRepositoryName()

//     }

//     render() {
//         return (
//             <div>
//                 <div>

//                     <h1 className={styles.title}>
//                         The most starred Github repos created in the last 30 days
//                 </h1>


//                     {this.props.loading ? (
//                         <div className={styles.spinner}>
//                             <SpinnerFooter></SpinnerFooter>
//                         </div>
//                     ) :
//                         <div>
//                             {this.props?.data?.map((element, index) => {

//                                 return (


//                                         <div>
//                                             <div className={styles.starred_github_page}>
//                                                 <div className={styles.avatar_username}>
//                                                     <Avatar size="100" round={true} src={element?.avatar_url} />
//                                                     <p className={styles.username}>{element.username}</p>
//                                                 </div>
//                                                 <p className={styles.desc_name}>{index + 1}* {element?.name}</p>
//                                                 <div className={styles.desc_star}>
//                                                     <div>
//                                                         <span>&#11088;</span>
//                                                         <p className={styles.count}>{element?.stargazers_count}</p>
//                                                     </div>
//                                                     <p className={styles.description_base}>{element?.description}</p>
//                                                 </div>
//                                                 <p className={styles.issues_count}>Number of issues: {element?.open_issues_count}</p>

//                                             </div>
//                                         </div>

//                                 );

//                             })}
//                         </div>

//                     }
//                     <Scroll></Scroll>
//                     {/* <PaginationFooter></PaginationFooter> */}

//                 </div>
//             </div>

//         )
//     }
// }


// const mapStateToProps = (state) => {
//     return {
//         data: state.RepoReducer.data,
//         loading: state.RepoReducer.loading


//     }
// }

// const mapDisaptchToProps = (dispatch) => {
//     return {
//         GetRepositoryName: (data, onSucess) => {
//             dispatch(_GetRepositoryName(data, onSucess));
//         }
//     }
// }

// export default connect(mapStateToProps, mapDisaptchToProps)(starredGithubPage);
// ReactDOM.render(starredGithubPage, document.getElementById('root'));