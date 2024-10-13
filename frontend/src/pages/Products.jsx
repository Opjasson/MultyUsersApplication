import React, {useEffect} from 'react'
import Layout from './Layout'
import Productlist from '../Components/Productlist'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetMe } from "../features/Authslice";

function Products() {
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
    <Layout>
        <Productlist />
    </Layout>
  )
}

export default Products
