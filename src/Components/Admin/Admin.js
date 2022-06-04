import {Route,BrowserRouter as Router, Link, Routes} from 'react-router-dom';
import { Button, Card,CardBody,CardTitle } from 'reactstrap';
import AddAdmin from './AddAdmin';
import ViewAdminList from './ViewAdminList';

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
                            </div>
                            <Routes>
                               <Route exact path='/user' element={<ViewAdminList/>}>All Admin users</Route>
                               <Route path='/createuser' element={<AddAdmin/>}>Add a new user</Route>
                            </Routes>
                        </CardBody>
                    </Card>
                </div>
            </Router>
        </>
    )
}

export default Admin;