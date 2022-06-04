import { useState,useEffect} from "react";
import axios from "axios";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { ContainerText } from "./Styles";


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
                                <FormLabel><ContainerText>Name</ContainerText></FormLabel>
                                <FormControl value={val.name}/>
                            </FormGroup><br/>

                            <FormGroup>
                                <FormLabel><ContainerText>Email</ContainerText></FormLabel>
                                <FormControl value={val.email}/>
                            </FormGroup><br/>

                            <FormGroup>
                                <FormLabel><ContainerText>Organization</ContainerText></FormLabel>
                                <FormControl value={val.organization}/>
                            </FormGroup><br/>

                            <FormGroup>
                                <FormLabel><ContainerText>Designation</ContainerText></FormLabel>
                                <FormControl value={val.designation}/>
                            </FormGroup><br/>

                            <FormGroup>
                                <FormLabel><ContainerText>Role</ContainerText></FormLabel>
                                <FormControl value={val.role}/>
                            </FormGroup><br/>
                        </Form>
                    </div>
                )
            })}
            
        </>
    )
}

export default ViewAdmin;