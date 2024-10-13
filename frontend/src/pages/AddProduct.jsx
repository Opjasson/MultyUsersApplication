import React, {useEffect} from "react";
import Layout from "./Layout";
import FormAddProduct from "../Components/FormAddProduct";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetMe } from "../features/Authslice";

function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(GetMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/");
        }
    }, [isError, navigate]);
    return (
        <div>
            <Layout>
                <FormAddProduct />
            </Layout>
        </div>
    );
}

export default AddProduct;
