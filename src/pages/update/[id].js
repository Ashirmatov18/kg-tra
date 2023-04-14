import React, { useEffect, useState } from "react";
import axios from "axios";
import AddEdit from "../../components/Admin/AddEdit";
import { toast } from "react-toastify";
import AddTest from "../../components/Admin/AddTest";

const update = ({ item }) => {
  // const items = JSON.stringify(item);
  return <h1>{item.id}</h1>
  // return <AddTest/>
};


export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`http://localhost:3306/api/get/${id}`);
  const data = await res.json();
  
  return {
    props: { item: data },
  };
}


export default update;
