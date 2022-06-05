import React from "react";
import { Navigate } from "react-router-dom";

const FullLayout = React.lazy(()=>import("../Layouts/FullLayout"));

const Admin = React.lazy(()=>import("../Components/Admin/Admin"));


const AdminWebsiteRoutes = [
    {
        path : '/',
        element : <FullLayout/>,
        children : [
            {path: "/", element: <Navigate to="/user"/>},
            {path: "/user", exact: true, element: <Admin/> },
        ],
    },
];

export default AdminWebsiteRoutes;