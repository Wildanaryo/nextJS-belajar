import Link from "next/link";
import React from "react";

const User = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <div key={index}>
          <Link href={`/users/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </>
  );
};

export default User;
