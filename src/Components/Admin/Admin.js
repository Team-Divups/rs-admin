import {Route,BrowserRouter as Router, Link, Routes} from 'react-router-dom';
import { Button, Card,CardBody,CardTitle } from 'reactstrap';
import AddAdmin from './AddAdmin';
import ViewAdminList from './ViewAdminList';
import InviteAdmin from './InviteAdmin';

const Admin = () =>{
    return(
        <>
            <Router>
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Admin Users</CardTitle>
                            <div>
                               <Button>
                                   <Link to='/createuser' style={{textDecoration:"none",color:"white"}}>Add a new user</Link>
                               </Button>

                               <Button>
                                   <Link to='/inviteuser' style={{textDecoration:"none",color:"white"}}>Invite a user</Link>
                               </Button>
                            </div>
                            <Routes>
                               <Route exact path='/' element={<ViewAdminList/>}>All Admin users</Route>
                               <Route path='/createuser' element={<AddAdmin/>}>Add a new user</Route>
                               <Route path='/inviteuser' element={<InviteAdmin/>}>Invite a user</Route>
                            </Routes>
                        </CardBody>
                    </Card>
                </div>
            </Router>
        </>
    )
}

export default Admin;