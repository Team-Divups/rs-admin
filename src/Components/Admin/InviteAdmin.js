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


//insert data in a new database
const InviteAdmin = () => {
  return(
    <>
    <ContainerWrap>
      <ContainerHeading>Admin Management</ContainerHeading>
    </ContainerWrap>
     
    <ContainerBox>
       <ContainerHeading style={{fontSize:'15px'}}>Invite Admin User</ContainerHeading>

       <InputBox>
       <Form>
        <Form.Group controlId="form.Name">
            <Form.Label><ContainerText >First Name</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1}/>
        </Form.Group><br/>
        <Form.Group controlId="form.Email">
            <Form.Label><ContainerText>Email</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} />
        </Form.Group><br/>
        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Password</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} />
        </Form.Group><br/>
        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Designation</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} />
        </Form.Group><br/>
        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Special Comments</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
       </InputBox>

      <br/>
    
      <Button1 size="sm">Invite</Button1>
      <Button2 size="sm">Back</Button2>

    </ContainerBox>
    </>
  );
};

export default InviteAdmin;