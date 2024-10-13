import React, {useEffect} from 'react'
import Layout from './Layout'
import FormEditUsers from '../Components/FormEditUser'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetMe } from "../features/Authslice";

function EditUser() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isError, user} = useSelector((state => state.auth))

  useEffect(() => {
    dispatch(GetMe())
  }, [dispatch])

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
        <FormEditUsers />
      </Layout>
    </div>
  )
}

export default EditUser
