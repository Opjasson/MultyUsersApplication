import React, {useEffect} from "react";
import Layout from "./Layout";
import FormAddUsers from "../Components/FormAddUsers";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetMe } from "../features/Authslice";

function AddUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(GetMe());
    }, [dispatch]);

    useEffect(() => {
      if(isError){
        navigate("/")
      }
      if(user && user.role !== "admin"){
        navigate("/dashboard")
      }
    }, [isError, user, navigate])
    return (
        <div>
            <Layout>
                <FormAddUsers />
            </Layout>
        </div>
    );
}

export default AddUser;
