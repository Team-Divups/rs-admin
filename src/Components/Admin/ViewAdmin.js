import { useState,useEffect} from "react";
import axios from "axios";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

const ViewAdmin = (props) =>{

    const [AdminData,setAdminData]=useState([]);
   
    useEffect( () =>{
        axios.get(`http://localhost:3001/adminuser/${props.id}`).then(
          (response)=>{
              setAdminData(response.data);
          })
      },[props.id])

      
    return(
        <>

            {AdminData.map((val,index)=>{
                return(
                    <div>
                        <Form>
                            <FormGroup>
                                <FormLabel>Name</FormLabel>
                                <FormControl 
                                readOnly="True"
                                value={val.name}/>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Email</FormLabel>
                                <FormControl 
                                readOnly="True"
                                value={val.email}/>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Organization</FormLabel>
                                <FormControl 
                                readOnly="True"
                                value={val.organization}/>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Designation</FormLabel>
                                <FormControl 
                                readOnly="True"
                                value={val.designation}/>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Role</FormLabel>
                                <FormControl 
                                readOnly="True"
                                value={val.role}/>
                            </FormGroup>
                        </Form>
                    </div>
                )
            })}
            
        </>
    )
}

export default ViewAdmin;