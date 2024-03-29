import React, { useEffect } from "react";
import Main from "../../components/main";
import Container from "../../components/sharedComponent/container";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { API_URL } from '../../services/api'
import { useState } from "react";

const Dashboard = () => {
  const [wallet, setWallet] = useState(0)
  const redirect = useNavigate()
  useEffect(() => {
    const userToken = localStorage.getItem('userToken')
    if(!userToken){
  
      redirect('/auth/login')
    }
    //
    try{
      axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_HOST}${API_URL.USERWALLET}`,
          headers: {
            'Authorization': `Bearer ${userToken}`
          } 
      })
      .then(result => {
        console.log("data", result.data.balance)
        if(result.data.status === false) throw new Error(result.data.message)
        setWallet(result.data.balance)

      })
      .then(err => {
        console.log(err)
      })

   
      

    }catch(e){
      alert(e.response.data.message || "Sorry something went wrong")
    }

  }, []);
  return (
    <Container>
      {wallet}
        <Main walletBalance={wallet}/>
    </Container>
   
  );
};

export default Dashboard;
