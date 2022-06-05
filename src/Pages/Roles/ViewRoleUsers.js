import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const ViewRoleUsers = () => {
  const [role, setRole] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleRole(id);
    }
  }, [id]);

  const getSingleRole = async (id) => {
    const response = await axios.get(`http://loacalhost:4000/role/${id}`);
    if (response.status === 200) {
      setRole({ ...response.data[0] });
    }
  };
  return (
    <div style={{ margin: '150px 50px 75px' }}>
      <Card
        style={{
          width: '50rem',
          margin: '0 auto',
          float: 'none',
          marginBottom: '10px',
        }}
      >
        <Card.Body>
          <Card.Title>Role Details</Card.Title>
          <Card.Text>
            <strong>ID:</strong>
            <span>{id}</span>
            <br />
            <br />
            <strong>Name:</strong>
            <span>{role && role.roleName}</span>
            <br />
            <br />
            <strong>Role Description:</strong>
            <span>{role && role.roleDescription}</span>
            <br />
            <br />
            <strong>Date Created:</strong>
            <span>{role && role.created_at}</span>
            <br />
            <br />
            {/* need to show all users under (companies) under this role */}
          </Card.Text>
          <Link to="/roles">
            <Button variant="primary">Go Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewRoleUsers;
