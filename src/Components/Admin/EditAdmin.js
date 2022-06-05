import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Form, FormControl, FormLabel } from "react-bootstrap";
import { Button, FormGroup } from "reactstrap";


const EditAdmin = (props)=>{

    const[name,setNewName]=useState("");
    const[email,setNewEmail]=useState("");
    const[organization,setNewOrganization]=useState("");
    const[designation,setNewDesignation]=useState("");
    const[role,setNewRole]=useState("");
    
    const[AdminData,setAdminData]=useState([]);

    //To load data
    useEffect( () =>{
        axios.get(`http://localhost:3001/adminuser/${props.id}`).then(
            (response)=>{
                setAdminData(response.data);
            })
    },[props.id])


    //update data
    const EditUser = (id)=>{
        axios.put(`http://localhost:3001/adminuser/edit`,{
            name:name,
            email:email,
            organization:organization,
            designation:designation,
            role:role,
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
                                <FormControl   
                                   placeholder={val.name}
                                   onChange={(e)=>{setNewName(e.target.value);}}
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Email</FormLabel>
                                <FormControl 
                                   placeholder={val.email}
                                   onChange={(e)=>{setNewEmail(e.target.value);}}    
                                />
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
                        </Form>

                        <Button onClick={()=>{EditUser(props.id)}}>Update</Button>
                    </div>
                )
            })}
        </>
    )
}

export default EditAdmin;