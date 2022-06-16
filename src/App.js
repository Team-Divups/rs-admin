import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
//import Header from './Components/Header/Header';
//import Footer from './Components/Footer/Footer';
import ViewRoles from './Pages/Roles/ViewRoles';
import AddRole from './Pages/Roles/AddRole';
import EditRole from './Pages/Roles/EditRole';
import ViewRoleUsers from './Pages/Roles/ViewRoleUsers';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/roles" element={<ViewRoles />} />
          <Route path="/roles/add" element={<AddRole />} />
          <Route path="/roles/update/:id" element={<EditRole />} />
          <Route path="/roles/view/:id" element={<ViewRoleUsers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
