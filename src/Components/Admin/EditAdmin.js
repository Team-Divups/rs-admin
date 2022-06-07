import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { FormSelect } from "react-bootstrap";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { Button} from "reactstrap";


const EditAdmin = (props)=>{

    const[name,setNewName]=useState("");
    const[email,setNewEmail]=useState("");
    const[organization,setNewOrganization]=useState("");
    const[designation,setNewDesignation]=useState("");
    const[role,setNewRole]=useState("");
    const[status,setNewStatus]=useState("");
    
    const[AdminData,setAdminData]=useState([]);
    
    //To load data
    useEffect( () =>{
        axios.get(`http://localhost:3001/adminuser/${props.id}`).then(
            (response)=>{
                setAdminData(response.data);
            })
    },[props.id])


    //update data
    const EditUser = async (id)=>{
                await axios.put(`http://localhost:3001/adminuser/edit`,{
                   name:name,
                   email:email,
                   organization:organization,
                   designation:designation,
                   role:role,
                   status:status,
                   id:id
                }).then(()=>{
                    alert("User Details Updated");
                })
    }


    const EditName = (id) =>{
        axios.put(`http://localhost:3001/adminuser/editname`,{
            name:name,
            id:id
        }).then(()=>{
            alert("User Details Updated");
        })
    }

    return(
        <>
            {AdminData.map((val,index)=>{
                return(
                    <div>
                        <Form>
                            <FormGroup>
                                <FormLabel>Name</FormLabel>
                                <tr>
                                    <td rowSpan={2}>
                                        <FormControl   
                                        defaultValue={val.name}
                                        onChange={(e)=>{setNewName(e.target.value);}}
                                        />
                                    </td>
                                    <td style={{paddingLeft:'10px'}}><Button onClick={()=>{EditName(props.id)}}><FaRegEdit/></Button></td>
                                </tr>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Email</FormLabel>
                                <tr>
                                    <td style={{paddingRight:'30px'}}>
                                        <FormControl 
                                        defaultValue={val.email}
                                        onChange={(e)=>{setNewEmail(e.target.value);}}    
                                        />
                                    </td>
                                    <td style={{paddingLeft:'10px'}}>
                                       <Button onClick={()=>{EditName(props.id)}}><FaRegEdit/></Button>
                                    </td>
                                </tr>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Organization</FormLabel>
                                <FormControl 
                                    placeholder={val.organization}
                                    onChange={(e)=>{setNewOrganization(e.target.value);}}
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Designation</FormLabel>
                                <FormControl 
                                    placeholder={val.designation}
                                    onChange={(e)=>{setNewDesignation(e.target.value);}}
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Role</FormLabel>
                                <FormControl 
                                    placeholder={val.role}
                                    onChange={(e)=>{setNewRole(e.target.value);}}
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Status</FormLabel>
                                <FormControl
                                    placeholder={val.status}
                                    onChange={(e)=>{setNewStatus(e.target.value);}}
                                />
                            </FormGroup>

                        </Form><br/>

                        <Button onClick={()=>{EditUser(props.id)}}>Update</Button>
                    </div>
                )
            })}
        </>
    )
}

export default EditAdmin;