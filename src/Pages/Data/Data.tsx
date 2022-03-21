import { useState, useEffect, useContext } from "react";
import { CrudContext } from "../../Contexts/crud";
import { Helmet } from "react-helmet";
import "./Data.css";

function Data() {
    const { crudStatus, setCrudStatus } = useContext(CrudContext);

  const getRequest = () => fetch("/crud/").then(async(res) => res.text().then((data) => setCrudStatus({...crudStatus, read: data})));
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
      setCrudStatus({...crudStatus, create: data})
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
      setCrudStatus({...crudStatus, update: data});
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
      setCrudStatus({...crudStatus, delete: data})
    })
  }

  
  useEffect(() => {
    // postRequest()
    // getRequest()
    // putRequest()
    // deleteRequest()
  }, [])
  
  return (
    <>
      <Helmet>
        <title>Data</title>
        <meta name="description" content="My Blog Data page" />
      </Helmet>
      <div>
        <p><button onClick={() => postRequest()}>C</button>Create: {crudStatus.create}</p>
        <p><button onClick={() => getRequest()}>R</button>Read: {crudStatus.read}</p>
        <p><button onClick={() => putRequest()}>U</button>Update: {crudStatus.update}</p>
        <p><button onClick={() => deleteRequest()}>D</button>Delete: {crudStatus.delete}</p>
      </div>
    </>
  );
}

export default Data;
