import 'bootstrap/dist/css/bootstrap.min.css';
import {FaRegAddressCard, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import{
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    Table,  
} from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";

import user2 from "../../../Assets/user2.jpg";

const ViewClientList= ()=> {

  const [userData,setUserData]= useState([]);

   // Using useEffect to call the API once mounted and set the data
   useEffect(() => {(async (e) => {
      e.preventDefault();
      const result = await axios("http://localhost:3001/adminuser");
      setUserData(result.data);})
      ();
  }, []);

    return(
        <>
        <Card>
            <CardBody>
                <CardTitle tag="h5">All Admin Users</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">Overview of Users</CardSubtitle>
               
                <Table className="no-wrap mt-3 align-middle" responsive >
                   <thead>
                       <tr>
                           <th>User</th>
                           <th>Designation</th>
                           <th>Role</th>
                           <th>Joined on</th>
                           <th>Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                     { userData.map((tdata,index)=>(
                        <tr key={index} className="border-top">
                          <td>
                            <div className="d-flex align-items-center p-2">
                              <img
                              src={user2}
                              className="rounded-circle"
                              alt="avatar"
                              width="45"
                              height="45"/>
                              <div className="ms-3">
                                <h6 className="mb-0">{tdata.name}</h6>
                                <span className="text-muted">{tdata.email}</span>
                              </div>
                            </div>
                          </td>
                 
                           <td>{tdata.designation}</td>
                           <td>{tdata.role}</td>
                           <td>{tdata.joined_at}</td>
                           
                           <td>
                              <tr>
                                <td><FaRegEdit/></td>
                                <td><FaRegAddressCard/></td>
                                <td><FaTrashAlt/></td>
                              </tr>
                           </td>
                         </tr>
                     ))
                     }
                   </tbody>
                </Table>
            </CardBody>
        </Card>
        </>
    );
}

export default ViewClientList;