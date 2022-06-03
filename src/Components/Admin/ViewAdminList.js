import 'bootstrap/dist/css/bootstrap.min.css';
import {FaRegAddressCard, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import{
  Button,
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    Table,  
} from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";

import user2 from "../../Assets/user.png";


const ViewAdminList= ()=> {

  const [userData,setUserData]= useState([]);

  //to get data when the application loads
  useEffect( () =>{
    axios.get("http://localhost:3001/adminuser").then(
      (response)=>{
        setUserData(response.data);
      })
  },[])



   //To get a specific user by id
   const GetData =(id)=>{
    axios.get(`http://localhost:3001/adminuser/${id}`).then(
      (response)=>{
        
      }
    )
  }



  //To delete a specific user by id
  const onDelete =(id)=>{
    axios.delete(`http://localhost:3001/adminuser/delete/${id}`).then(
      (response)=>{
        setUserData(userData.filter((val)=>{
          return(
            val.id !== id
          )
        }))
      }
    )
  }


  //to delete all users
  const DeleteAll = () =>{
    axios.delete("http://localhost:3001/adminuser")
  }



    return(
        <>
        <Card style={{padding:"30px 100px 10px 100px"}}>
            <CardBody>
                <CardTitle tag="h5">All Admin Users</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">Overview of Users</CardSubtitle>
                <div>
                      <Button className="no-wrap mt-3">Add a new User</Button>
                      <Button className="no-wrap mt-3 " onClick={DeleteAll}>Delete All</Button>
                </div>
         
                <Table className="no-wrap mt-3 align-middle" responsive striped>
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
                                <td><Button><FaRegEdit/></Button></td>
                                <td><Button onClick={()=>onDelete(tdata.id)}><FaTrashAlt/></Button></td>
                                <td><Button onClick={()=>GetData(tdata.id)}><FaRegAddressCard/></Button></td>
                               
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


export default ViewAdminList;