import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './ViewRole.css';
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
    <div style={{ marginTop: '150px' }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>Role</th>
            <th style={{ textAlign: 'center' }}>Role Description</th>
            <th style={{ textAlign: 'center' }}>Created Date</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.roleName}</td>
                  <td>{item.desc}</td>
                  <td>{item.created_at}</td>
                  <td>
                    <Link to={`/roles/update/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDeleteRole(item.id)}
                    >
                      Delete
                    </button>
                    <Link to={`/roles/view/${item.id}`}>
                      <button className="btn btn-view">view </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRoles;
