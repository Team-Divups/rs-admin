import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
//import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './EditRole.css';

const initialState = {
  roleName: '',
  roleDescription: '',
  created_at: '',
};

const AddRole = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const { roleName, roleDescription, created_at } = initialState;

  const addRole = async (data) => {
    const response = await axios.post('http://loacalhost:4000/roles', data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!roleName || !roleDescription || !created_at) {
      toast.error('Please provide value into each field');
    } else {
      addRole(state);
      navigate('/roles');
    }
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="container">
      <Container className="AddRole">
        {/* <Helmet>
          <title>Add/Edit Roles</title>
        </Helmet> */}
        <h1 className="my-3">Create New Role </h1>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group
            className="mb-3"
            controlId="name"
            name="name"
            OnChange={handleInputChange}
            value={roleName}
          >
            <Form.Label>Role Name </Form.Label>
            <Form.Control type="name" required />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="description"
            name="description"
            OnChange={handleInputChange}
            value={roleDescription}
          >
            <Form.Label>Role Description </Form.Label>
            <Form.Control type="name" required />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Created date</Form.Label>
            <Form.Control
              className="mb-3"
              type="date"
              name="date"
              OnChange={handleInputChange}
              value={created_at}
            />
          </Form.Group>
          <div className="mb-3">
            <Button variant="danger" value="add">
              Discard
            </Button>
            <Button variant="primary" value="add">
              Add
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default AddRole;
