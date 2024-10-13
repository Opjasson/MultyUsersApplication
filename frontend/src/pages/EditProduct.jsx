import React, {useEffect} from 'react'
import Layout from './Layout'
import FormEditProduct from '../Components/FormEditProduct'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetMe } from "../features/Authslice";

function EditProduct() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isError} = useSelector((state => state.auth))

  useEffect(() => {
    dispatch(GetMe())
  }, [dispatch])

  useEffect(() => {
    if(isError){
      navigate("/")
    }
  }, [isError, navigate])
  return (
    <div>
      <Layout>
        <FormEditProduct />
      </Layout>
    </div>
  )
}

export default EditProduct
