import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const FullLayout=()=>{
    return(
        <>
           <main>
           <Header/>
            <div className="pageWrapper d-lg-flex">
                <aside className="sidebarArea shadow" id="sidebarArea">
                    <Sidebar/>
                </aside>
                <div className="contentArea">
                    <Container className="p-4" fluid>
                        <Outlet/>
                    </Container>
                </div>
            </div>
            <Footer/>
           </main>
        </>
    )
}

export default FullLayout;