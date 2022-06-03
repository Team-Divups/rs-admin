import { Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ContainerHeading,
  ContainerText,
  ContainerWrap,
  ContainerBox,
  InputBox,
  Button1,
  Button2
} from './Styles';
import { useEffect, useState } from "react";


const ViewClient = () => {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[designation,setDesignation]=useState("");
  const[role,setRole]=useState("");

  //populate with existing data
  useEffect( () =>{
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
    setDesignation(localStorage.getItem('designation'));
    setRole(localStorage.getItem('role'));
  }, []);

  return(
    <>
    <ContainerWrap>
      <ContainerHeading>Admin Management</ContainerHeading>
    </ContainerWrap>
  
    <ContainerBox>
       <ContainerHeading style={{fontSize:'15px'}}>Admin User</ContainerHeading>
       
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
            <Form.Label><ContainerText>Designation</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='text' 
            value={designation}
            onChange={(event)=>{
              setDesignation(event.target.value);
            }}/>
        </Form.Group><br/>

        <Form.Group controlId="form.Email">
            <Form.Label><ContainerText>role</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1}  
            type='text' 
            value={role}
            onChange={(event)=>{
              setRole(event.target.value);
            }}/>
        </Form.Group>

      </Form>
       </InputBox>

      <br/>
    
      <Button1 size="sm">Edit</Button1>
      <Button2 size="sm">Delete</Button2>

    </ContainerBox>
    
    </>
  );
};

export default ViewClient;