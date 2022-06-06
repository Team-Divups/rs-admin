import {Form} from "react-bootstrap";
import {
  ContainerHeading,
  ContainerText,
  ContainerWrap,
  ContainerBox,
  InputBox,
  Button2,
  Button1
} from './Styles';
import React, { useState } from "react";
import axios from "axios";
import { AdminSchema } from "./AdminValidation";
import { useNavigate } from "react-router-dom";


const AddAdmin = () => {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[organization,setOrganization]=useState("");
  const[designation,setDesignation]=useState("");
  const[role,setRole]=useState("");
  const[comment,setComment]=useState("");
  
  const history = useNavigate();
  const AddUser = async (e) =>{

    const isValid= await AdminSchema.isValid(
      {
        name,
        email,
        password,
        organization,
        designation,
        role,
        comment
      });

      if(isValid){
        axios.post('http://localhost:3001/adminuser/create',{
        name:name,
        email:email,
        password:password,
        organization:organization,
        designation : designation,
        role:role,
        comments:comment,
        status:"joined"
        }).then(()=>{
          alert("New User is Added");
      })
    }else {
      alert("Validation errors");
    }  
  };

  return(
    <>
    <ContainerWrap>
      <ContainerHeading>Admin Management</ContainerHeading>
    </ContainerWrap>
     
    <ContainerBox>
       <ContainerHeading style={{fontSize:'15px'}}>Create New Admin User</ContainerHeading>

       <InputBox>
       <Form noValidate>
        <Form.Group controlId="form.Name">
            <Form.Label><ContainerText >First Name</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='text' 
            value={name}
            onChange={(event)=>{
              setName(event.target.value);
            }}
            />
            <Form.Control.Feedback type='invalid'>Name should be between 3 to 20 characters</Form.Control.Feedback>
        </Form.Group>
        <br/>

        <Form.Group controlId="form.Email">
            <Form.Label><ContainerText>Email</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='email'
            value={email}
            onChange={(event)=>{
              setEmail(event.target.value);
            }}/>
             <Form.Control.Feedback type='invalid'>Invalid email</Form.Control.Feedback>
        </Form.Group>
        <br/>

        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Password</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='password' 
            value={password}
            onChange={(event)=>{
              setPassword(event.target.value);
            }}
            />
            <Form.Control.Feedback type='invalid'>Name should be between 3 to 20 characters</Form.Control.Feedback>
        </Form.Group>
        <br/>

        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Organization</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='text' 
            value={organization}
            onChange={(event)=>{
              setOrganization(event.target.value);
            }}/>
        </Form.Group>
        <br/>

        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Designation</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='text' 
            value={designation}
            onChange={(event)=>{
              setDesignation(event.target.value);
            }}/>
        </Form.Group>
      
        <br/>

        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Role</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='text' 
            value={role}
            onChange={(event)=>{
              setRole(event.target.value);
            }}/>
        </Form.Group>
       
        <br/>

        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Special Comments</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={2} 
            type='text' 
            value={comment}
            onChange={(event)=>{
              setComment(event.target.value);
            }}/>
        </Form.Group>
    
      </Form>
       </InputBox>

      <br/>
    
      <Button1 onClick={AddUser}>Add</Button1>
      <Button2 size="sm" onClick={() => history('/')}>Discard</Button2>

    </ContainerBox>
    </>
  );
};

export default AddAdmin;