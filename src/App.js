import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AddAdmin from "./Components/Admin/AddAdmin";
import EditAdmin from "./Components/Admin/EditAdmin";
import InviteAdmin from "./Components/Admin/InviteAdmin";
import ViewAdminList from "./Components/Admin/ViewAdminList";

const App = () => {
  return(
    <>
      <Router>
        <Routes>
          <Route path='/'>

            <Route path='adminusers'>
              <Route index element={<ViewAdminList/>}/>
              <Route path='new' element={<AddAdmin/>}/>
              <Route path='invite' element={<InviteAdmin/>}/>
              <Route path=':id' element={<EditAdmin/>}/>
            </Route>

          </Route>
        </Routes>
      </Router>
    </>
  )
}
export default App;
