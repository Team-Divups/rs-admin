import { Form} from "react-bootstrap";
import {
  ContainerHeading,
  ContainerText,
  ContainerWrap,
  ContainerBox,
  InputBox,
  Button1,
  Button2
} from './Styles';
import React, { useState } from "react";
import axios from "axios";



const AddAdmin = () => {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[organization,setOrganization]=useState("");
  const[designation,setDesignation]=useState("");
  const[role,setRole]=useState("");
  const[comment,setComment]=useState("");

  const AddUser = (e) =>{
    e.preventDefault();
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
  };

  return(
    <>
    <ContainerWrap>
      <ContainerHeading>Admin Management</ContainerHeading>
    </ContainerWrap>
     
    <ContainerBox>
       <ContainerHeading style={{fontSize:'15px'}}>Create New Admin User</ContainerHeading>

       <InputBox>
       <Form>
        <Form.Group controlId="form.Name">
            <Form.Label><ContainerText >First Name</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='text' 
            value={name}
            onChange={(event)=>{
              setName(event.target.value);
            }}/>
        </Form.Group><br/>

        <Form.Group controlId="form.Email">
            <Form.Label><ContainerText>Email</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='email' 
            value={email}
            onChange={(event)=>{
              setEmail(event.target.value);
            }}/>
        </Form.Group><br/>

        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Password</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='password' 
            value={password}
            onChange={(event)=>{
              setPassword(event.target.value);
            }}/>
        </Form.Group><br/>

        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Organization</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='text' 
            value={organization}
            onChange={(event)=>{
              setOrganization(event.target.value);
            }}/>
        </Form.Group><br/>

        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Designation</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='text' 
            value={designation}
            onChange={(event)=>{
              setDesignation(event.target.value);
            }}/>
        </Form.Group><br/>

        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Role</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='text' 
            value={role}
            onChange={(event)=>{
              setRole(event.target.value);
            }}/>
        </Form.Group>

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
    
      <Button1 size="sm" onClick={AddUser}>Add</Button1>
      <Button2 size="sm">Discard</Button2>

    </ContainerBox>
    </>
  );
};

export default AddAdmin;