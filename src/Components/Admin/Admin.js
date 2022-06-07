import ViewAdminList from "./ViewAdminList";
import Sidebar from '../../Layouts/Sidebar';

const Admin = () =>{
    return(
        <>
            <div style={{display:"flex",width:'100%'}}>
              
               <div style={{flex:'6'}}>
                  <Sidebar/>
                  <ViewAdminList/>
               </div>
             
            </div>
        </>
    )
}

export default Admin;