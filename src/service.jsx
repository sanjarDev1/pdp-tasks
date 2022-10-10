import React from "react";
import axios from "axios";


const doGet = (url) => {
    return  axios.get("https://jsonplaceholder.typicode.com" + url).then((res) => {
    return res.data
  });

   
};

export const doPost = (url,data) => {
  return  axios.post("https://jsonplaceholder.typicode.com" + url,data).then((res) => {
  return res.data
});

 
};

export default doGet;
