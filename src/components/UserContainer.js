import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({ userData, fetchUsers }) {
  useEffect(async () => {
    await fetchUsers();
    console.log("231545345", userData);
  }, []);
  return (
    <div>
      <h2>UserContainer</h2>
      {userData.loading ? (
        <h2>Loading...</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          <h2>User Lists</h2>
          <div>
            {userData &&
              userData.users &&
              userData.users.map((user, id) => {
                return (
                  <p key={id}>
                    {id + 1}.){user.name}
                  </p>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()) //it allows us to map the actionCreators to prop in our components
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
