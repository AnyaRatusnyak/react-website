import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {
  setCurrentPage,
  requestUsers,
  unfollow,
  follow,
} from "../../redux/users-reducer";
import {
  getUsers,
  getCurrentPage,
  getPageSize,
  getIsFetching,
  getTotalUsersCount,
  getFollowingInProgress,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }
  onChangedPage = (pageNumber) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onChangedPage={this.onChangedPage}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default connect(mapStateToProps, {
  unfollow,
  follow,

  setCurrentPage,

  requestUsers,
})(UsersContainer);
