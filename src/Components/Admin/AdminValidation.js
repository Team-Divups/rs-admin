import * as yup from "yup";

export const AdminSchema = yup.object().shape({
    name: yup.string().required("UserName is required").min(3).max(20),
    email: yup.string().email().required(),
    password:yup.string().min(3).max(15).required(),
    organization: yup.string().required(),
    designation: yup.string().required(),
    role: yup.string().required(),
    comments : yup.string(),
    status: yup.string(),
});