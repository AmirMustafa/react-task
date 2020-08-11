import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Profile = props => {
  const [userdata, setUserData] = useState({
    name: "loading",
    picture: ""
  });
  useEffect(() => {
    if (props.user) {
      setUserData({
        name: props.user.username,
        picture: props.user.picture
      });
    }
  }, []);
  // if (!props.user) {
  //   props.history.push("/");
  // }
  return (
    <div>
      <div
        className="card"
        style={{ margin: "10%", padding: "10px", textAlign: "center" }}
      >
        <h1>My Profile</h1>
        <h2>{userdata.name}</h2>
        <img
          className="circle"
          src={userdata.picture}
          style={{ width: "50%" }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state", state.auth);
  return {
    user: state.auth || {
      _id: "5e2f8e93dccdb213d8d7ce55",
      googleId: "117264194640574093530",
      username: "Amir Mustafa",
      picture:
        "https://lh3.googleusercontent.com/a-/AAuE7mCn-ml9gLue1SgHTHCi2ECdu_jx1lMjKn7tNOqZ",
      __v: 0
    }
  };
};
// window.setTimeout(mapStateToProps, 5000);

export default connect(mapStateToProps)(Profile);
