import React from "react";
import UserResult from "../components/users/UserResult";
import UserSearch from "../components/users/UserSearch";

const Home = () => {
  return (
    <>
      {/* SEARCH COMPONENT */}
      <UserSearch />
      {/* SEARCH RESULT */}
      <UserResult />
    </>
  );
};

export default Home;
