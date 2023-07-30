import axios from "axios";
import React from "react";

import User from "@/components/listUser/user";

const ListUser = ({ data }) => {
  console.log("data dari server side props", data);
  return (
    <>
      <div>
        <User data={data} />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.data;
  return { props: { data } };
};

export default ListUser;
