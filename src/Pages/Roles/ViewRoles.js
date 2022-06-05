import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
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

  const onDeleteRole = async (id) => {
    if (
      window.confirm('Are you sure that you wanted to delete that role record?')
    ) {
      const response = await axios.delete(`http://loacalhost:4000/role/${id}`);
      if (response.status === 200) {
        toast.success(response.data);
        getRoles();
      }
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
                      <Link to={`/roles/update/${item.id}`}>
                        <Button variant="outline-success" size="sm">
                          Edit
                        </Button>
                      </Link>
                      <Link to={`/roles/view/${item.id}`}>
                        <Button variant="outline-primary" size="sm">
                          View
                        </Button>
                      </Link>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => onDeleteRole(item.id)}
                      >
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
