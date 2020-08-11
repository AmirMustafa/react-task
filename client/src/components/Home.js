import React from "react";

const Home = () => {
  return (
    <div
      className="card"
      style={{ margin: "10%", padding: "10%", textAlign: "center" }}
    >
      <div className="row">
        <a
          href="/auth/google"
          className="waves-effect waves-light btn red lighten-1"
        >
          Sign up
        </a>{" "}
        &emsp;&emsp;
      </div>
    </div>
  );
};

export default Home;
