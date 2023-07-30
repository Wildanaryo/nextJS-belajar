import axios from "axios";
import React from "react";

const UserDetails = ({ user }) => {
  console.log(user);
  return (
    <>
      <h1>{user.name}</h1>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await res.data;
  return {
    props: { user: data },
  };
}

export default UserDetails;
