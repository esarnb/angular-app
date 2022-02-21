import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Data.css";

function Data() {
    const [Create, setCreate] = useState("");
    const [Read, setRead] = useState("");
    const [Update, setUpdate] = useState("");
    const [Delete, setDelete] = useState("");

  const getRequest = () => fetch("/crud/").then(async(res) => res.text().then((data) => setRead(data)));
  const postRequest = () => {
    fetch('/crud/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: 1,
          firstname: "John",
          lastname: "Doe",
          avatar_url: "https://i.imgur.com/BQ7Q4L0.jpeg",
          age: 24,
        })
    }).then((res) => res.text()).then((data) => {
        setCreate(data);
    })
  }
  const putRequest = () => {
    fetch('/crud/', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: 1,
          firstname: "Play"
        })
    }).then((res) => res.text()).then((data) => {
        setUpdate(data);
    })
  }

  const deleteRequest = () => {
    fetch('/crud/', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: 1, b: 'Textual content'})
    }).then((res) => res.text()).then((data) => {
        setDelete(data);
    })
  }

  
  useEffect(() => {
    getRequest()
    postRequest()
    putRequest()
    deleteRequest()
  }, [])
  
  return (
    <>
      <Helmet>
        <title>Data</title>
        <meta name="description" content="My Blog Data page" />
      </Helmet>
      <div>
        <p>Create: {Create}</p>
        <p>Read: {Read}</p>
        <p>Update: {Update}</p>
        <p>Delete: {Delete}</p>
      </div>
    </>
  );
}

export default Data;
