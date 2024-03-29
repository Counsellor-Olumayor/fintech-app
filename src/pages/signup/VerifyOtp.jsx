
import ReactCodeInput from 'react-code-input'
import { useState } from 'react';
import axios from 'axios'
import { API_URL } from '../../services/api'
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
    const redirect = useNavigate()
    const [otp, setOtp] = useState('');

    const handleOtpChange = (_otp) => {
        setOtp(_otp);
      };

    const handleOtpSubmit = async() => {
        const getCustomerEmail = localStorage.getItem('email')
        try{
            const response = await axios({
                method: 'patch',
                url: `${process.env.REACT_APP_API_HOST}${API_URL.VERIFYOTP}/${otp}/${getCustomerEmail}`
            })
    
        
            if(response.data.status === false) throw new Error(response.data.message)
    
            alert(response.data.message)
            redirect('/auth/login')
    
           }catch(error){

            console.log(error)
            alert(error.response.data.message || "Sorry something went wrong")
           }
    }
    return (
        <div>
            <h1>Verify OTP</h1>
            <div className=' w-full h-screen flex flex-col justify-center items-center bg-polygon bg-no-repeat bg-left-bottom' >

                   <ReactCodeInput type='text' value={otp} onChange={handleOtpChange} fields={6} />
                
                    <button onClick={handleOtpSubmit} className=" mt-[3rem] text-[2rem] text-center text-white font-semibold w-[20rem] bg-blue-600 rounded-lg px-[1rem] py-[1rem] ">
                     Verify
                    </button>
                    

                    </div>
        </div>
    )
}

export default VerifyOtp