import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import _ from 'lodash';
import React, { useState } from "react";

const Student = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "ali",
      email: "ali@gmail.com",
      phone: 9097000000,
      address: "dhanbad",
    },

    {
      id: 2,
      name: "shah",
      email: "shah@gmail.com",
      phone: 90973456677,
      address: "bokaro",
    },

    {
      id: 3,
      name: "salman",
      email: "salman@gmail.com",
      phone: 9097845673,
      address: "bihar",
    },

    {
      id: 4,
      name: "saddam",
      email: "ala@gmail.com",
      phone: 90978567653,
      address: "bihar",
    },

    {
      id: 5,
      name: "john",
      email: "john@gmail.com",
      phone: 934562653,
      address: "USA",
    },

    {
      id: 6,
      name: "imarn",
      email: "imran@gmail.com",
      phone: 90456653,
      address: "Saudi",
    },
  ]);

  const [editdata, setEditData] = useState([]);
  const [update, setUpdate] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState(_.get(editdata, 'name', ''));
  const [email, setEmail] = useState(_.get(editdata, 'email', ''));
  const [phone, setPhone] = useState(_.get(editdata, 'phone', ''));
  const [address, setAddress] = useState(_.get(editdata, 'Address', ''));
  const [showEditModal, setShowEditModal] = useState(false);

  const addStudent = () => {
    setData([...data, { name, email, phone, address, id: Math.random() }]);
    setShow(false);
  };
  const deleteStudent = (id) => {
    setData(data.filter((data) => data.id !== id));
  };

  const editStudent = (editdata) => {
    setData(
        data.map((d) => {
            return d.id === editdata.id ? {...editdata, name, email, phone, address, id: editdata.id} : d;
        })
    );
    setShowEditModal(false);
  };
  console.log(data);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center mt-4 mb-4">
          <h1 className="text-dark">Students' list</h1>
          <a
            href="/"
            className="btn btn-secondary float-start"
            style={{ width: "200px" }}
          >
            Go Back
          </a>
          <button
            className="btn btn-primary float-end"
            onClick={() => setShow(true)}
            style={{ width: "200px" }}
          >
            Add student
          </button>
        </div>
        <div className="col-md-12 bg-light text-dark p-4">
          <div className="row">
            <div className="col-2 text-success">Name</div>
            <div className="col-3 text-success">Email</div>
            <div className="col-3 text-success">phone</div>
            <div className="col-2 text-success">Address</div>
          </div>
        </div>
        {data &&
          data.map((d) => (
            <div className="col-md-12 bg-dark text-white p-2">
              <div className="row">
                <div className="col-2">{d.name}</div>
                <div className="col-3">{d.email}</div>
                <div className="col-3">{d.phone}</div>
                <div className="col-2">{d.address}</div>
                <div className="col-1">
                  <button type="button" className="btn btn-warning" onClick={() => { setShowEditModal(true); setEditData(d)}}>edit</button>
                </div>
                <div className="col-1">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteStudent(d.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        <Modal show={show} onHide={() => setShow(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input className="form-control mb-4" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="form-control mb-4" type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="form-control mb-4" type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input className="form-control mb-4" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <button type="submit" className="btn btn-primary" onClick={addStudent}>Add</button>
            </form>
          </Modal.Body>
        </Modal>
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input className="form-control mb-4" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="form-control mb-4" type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="form-control mb-4" type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input className="form-control mb-4" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <button type="submit" className="btn btn-primary" onClick={editStudent}>Update</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Student;
