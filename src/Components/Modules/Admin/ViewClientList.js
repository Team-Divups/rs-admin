import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAddressBook, FaCheck, FaEdit } from 'react-icons/fa';
import{
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    Table,   
} from "reactstrap";
import user1 from '../../../Assets/user1.jpg';
import user2 from '../../../Assets/user2.jpg';
import user3 from '../../../Assets/user3.jpg';
import user4 from '../../../Assets/user4.jpg';
import user5 from '../../../Assets/user5.jpg';

const tableData = [
    {
      avatar: user1,
      name: "Hanna Gover",
      role: "Admin",
      email: "hgover@gmail.com",
    },
    {
      avatar: user2,
      name: "Hanna Gover",
      role: "Marketing Team",
      email: "hgover@gmail.com",
    },
    {
      avatar: user3,
      name: "Hanna Gover",
      role: "User",
      email: "hgover@gmail.com",
    },
    {
      avatar: user4,
      name: "Hanna Gover",
      role: "Main Admin",
      email: "hgover@gmail.com",
    },
    {
      avatar: user5,
      name: "Hanna Gover",
      role: "Sales Team",
      email: "hgover@gmail.com",
    },
  ];

const ViewClientList= ()=> {
    return(
        <>
        <Card>
            <CardBody>
                <CardTitle tag="h5">All Admin Users</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">Overview of Users</CardSubtitle>

                <Table className="no-wrap mt-3 align-middle" responsive >
                   <thead>
                       <tr>
                           <th>User Details</th>
                           <th>User Name</th>
                           <th>User Role</th>
                           <th>Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                     { tableData.map((tdata,index)=>(
                         <tr key={index} className="border-top">
                           <td>
                               <div className="d-flex align-items-center p-2">
                                   <img
                                    src={tdata.avatar}
                                    className="rounded-circle"
                                    alt="avatar"
                                    width="45"
                                    height="45"
                                   />
                                   <div className="ms-2">
                                     <span className="text-muted">{tdata.email}</span>
                                   </div>
                               </div> 
                           </td>
                           <td>{tdata.name}</td>
                           <td>{tdata.role}</td>
                           <td>
                              <FaEdit paddingRight="10px"/>
                              <FaAddressBook paddingLeft="20px"/>
                              <FaCheck paddingLeft="20px"/>
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

export default ViewClientList;