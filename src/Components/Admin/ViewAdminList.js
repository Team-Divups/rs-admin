import {FaRegAddressCard, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import{
  Button,
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table,  
} from "reactstrap";

import axios from "axios";
import { useEffect, useState } from "react";

import user2 from "../../Assets/user.png";
import EditAdmin from './EditAdmin';
import ViewAdmin from './ViewAdmin';


const ViewAdminList= ()=> {

  const [userData,setUserData]= useState([]);
  const [showEdit,setShowEdit]= useState(false);
  const [showView,setShowView]= useState(false);
  const [userId,setUserId] = useState();
  const [showDelete,setShowDelete]= useState(false);

  //to get data when the application loads
  useEffect( () =>{
    axios.get("http://localhost:3001/adminuser").then(
      (response)=>{
        setUserData(response.data);
      })
  },[])

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

  
  //to Show edit modal
  const ShowEditModal = () => setShowEdit(true);
  const CloseEditModal = () => setShowEdit(false);

  //to show view modal
  const ShowViewModal = ()=>setShowView(true);
  const CloseViewModal = ()=>setShowView(false);

  //to show delete confiramtion alert
  const ShowDeleteModal = ()=>setShowDelete(true);
  const CloseDeleteModal = ()=>setShowDelete(false);



    return(
        <>
        <Card style={{padding:"30px 100px 10px 100px"}}>
            <CardBody>
                <CardTitle tag="h5">All Admin Users</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">Overview of Users</CardSubtitle>
                <div>
                      <Button className="no-wrap mt-3 " onClick={DeleteAll}>Delete All</Button>
                </div>
                
                {/* Admin table  */}
                <Table className="no-wrap mt-3 align-middle" responsive striped>
                   <thead>
                       <tr>
                           <th>User</th>
                           <th>Organization</th>
                           <th>Designation</th>
                           <th>Role</th>
                           <th>Status</th>
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
                 
                           
                           <td>{tdata.organization}</td>
                           <td>{tdata.designation}</td>
                           <td>{tdata.role}</td>
                           <td>
                               {tdata.status === "joined" ? (
                                  <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                            ) : tdata.status === "invited" ? (
                                  <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                            ) : (
                                  <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                                )}
                           </td>
                           <td>{tdata.joined_date}</td>
                           
                           <td>
                              <tr>
                                <td>
                                    <Button onClick={()=>{ShowEditModal();setUserId(tdata.id)}}>
                                      <FaRegEdit/>
                                    </Button>
                                </td>
                                <td>
                                    <Button onClick={()=>{ShowDeleteModal();setUserId(tdata.id)}}>
                                      <FaTrashAlt/>
                                    </Button>
                                </td>
                                <td>
                                   <Button onClick={()=>{ShowViewModal();setUserId(tdata.id)}}>
                                      <FaRegAddressCard/>
                                   </Button>
                                </td>
                              </tr>
                           </td>

                         </tr>
                     ))
                     }
                   </tbody>
                </Table>
            </CardBody>
        </Card>


        {/* modal to edit Admin*/}
        <Modal isOpen={showEdit} >
          <ModalHeader  toggle={CloseEditModal} >Edit Admin User</ModalHeader>
          <ModalBody>
            <EditAdmin id={userId}/>
          </ModalBody>
        </Modal>



        {/* modal to View Admin*/}
        <Modal isOpen={showView} toggle={CloseViewModal}>
          <ModalHeader togagle={CloseViewModal}>Admin User</ModalHeader>
          <ModalBody>
            <ViewAdmin id={userId}/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={CloseViewModal}>Save</Button>
            <Button onClick={CloseViewModal}>Back</Button>
          </ModalFooter>
        </Modal>



        {/* Modal to delete a user*/}
        <Modal isOpen={showDelete}>
          <ModalHeader toggle={CloseDeleteModal}>Delete Confirmation</ModalHeader>
          <ModalBody>
            <p>Are you sure you want to delete ?</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>onDelete(userId)}>Yes,Delete</Button>
            <Button onClick={CloseDeleteModal}>No,Go Back</Button>
          </ModalFooter>
        </Modal>

        </>
    );
}


export default ViewAdminList;