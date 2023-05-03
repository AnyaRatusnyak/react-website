import React from "react";

import Pagination from "../common/Pagination/Pagination";
import User from "./User";

let Users = ({
  totalUsersCount,
  pageSize,
  onChangedPage,
  currentPage,
  users,
  ...props
}) => {
  return (
    <div>
      <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onChangedPage={onChangedPage}
        currentPage={currentPage}
      />
      <div>
        {users.map((u, index) => (
          <User
            user={u}
            key={index}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
