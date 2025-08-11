import React, { use } from "react";
import{ Link,useNavigate } from "react-router-dom";
import{login as authLogin } from "../api/auth";
import{Button , Input, Logo} from "./index";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit}= useForm();
const {error,setError} = useState("");

    return(
        <div>Login</div>
    )
}
export default Login;