import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
//import { getRoles } from '@testing-library/react';

const ViewRoles = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRoles();
  }, []);

  const getRoles = async () => {
    const response = await axios.get('http://loacalhost:4000/roles');
    if (response.status === 200) {
      setData(response.data);
    }
  };

  //console.log('data=>', data);
  return (
    <div style={{ margin: '150px 50px 75px' }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Role Description</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {data &&
              data.map((item) => {
                return (
                  <tr>
                    <th>{item.roleName}</th>
                    <td>{item.desc}</td>
                    <td>{item.created_at}</td>
                    <td>
                      <Link to={`update/${item.id}`}>
                        <Button variant="outline-success" size="sm">
                          Edit
                        </Button>
                      </Link>
                      <Link to={`view/${item.id}`}>
                        <Button variant="outline-primary" size="sm">
                          View
                        </Button>
                      </Link>
                      <Button variant="outline-danger" size="sm">
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ViewRoles;
