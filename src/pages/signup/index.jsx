import sign from "../../assets/rafiki.png";
import { useState } from "react";
import axios from 'axios'
import { API_URL } from '../../services/api'
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const redirect = useNavigate()
    const [formData, setFormData] = useState({
        surname : "",
        othernames : "",
        email : "",
        phone : "",
        password : "",
        repeat_password: "",
        gender : "",
        dob : "" //m-d-y
    
    }) 

    const submit = async(e) => {
        e.preventDefault()
        console.log(formData)
       try{
        const response = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_HOST}${API_URL.SIGNUPURL}`,
            //url: `http://127.0.0.1:8901/api/v1/user/register`,
            data: formData
        })

    
        if(response.data.status === false) throw new Error(response.data.message)

        alert(response.data.message)
        localStorage.setItem('email', formData.email)
        redirect('/auth/verify-otp')

       }catch(error){
        console.log(error)
        alert(error.response.data.message || "Sorry something went wrong")
       }

    }
    return (
    
            <div className="flexflex-col w-full h-screen ">
            <div className="text-[4rem] font-extrabold text-purple-700 px-[2rem] ">
            Carbon
            </div>
    
            <div className="flex justify-between ">
            <img src={sign} alt="" />
            <div className=" flex flex-col w-[50%]">
                <div className="">
                <h1 className="">Sign Up for an Account</h1>
                <p className="">
                    Let’s get you all set up for the Carbon experience
                </p>
                </div>
    
                <form onSubmit={submit} >
                <div className="flex gap-x-[4rem] mt-[3rem] ">
                    <div className="">
                    <label className="text-[1.5rem] block" htmlFor="">
                        Surname
                    </label>
                    <input
                    name="surname"
                        type="text"
                        required
                        value={formData.surname}
                        onChange={(e) => setFormData({...formData, surname : e.target.value})}
                        placeholder="surname"
                        className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                    />
                    </div>
    
                    <div className="">
                    <label className="text-[1.5rem] block" htmlFor="">
                        Other Name
                    </label>
                    <input
                    required
                        name="othernames"
                        value={formData.othernames}
                        onChange={(e) => setFormData({...formData, othernames : e.target.value})}
                        type="text"
                        placeholder="other name"
                        className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                    />
                    </div>
                </div>
                <div className="flex gap-x-[4rem] mt-[3rem] ">
                    <div className="">
                    <label className="text-[1.5rem] block" htmlFor="">
                        Email Address
                    </label>
                    <input
                    required
                    name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email : e.target.value})}
                        placeholder="email address"
                        className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                    />
                    </div>
    
                    <div className="">
                    <label className="text-[1.5rem] block" htmlFor="">
                        Password
                    </label>
                    <input
                    required
                    name="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password : e.target.value})}
                        type="text"
                        placeholder="password"
                        className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                    />
                    </div>
    
                </div>
                <div className="flex gap-x-[4rem] mt-[3rem] ">
    
    
                    <div className="">
                    <label className="text-[1.5rem] block" htmlFor="">
                        Repeat Password
                    </label>
                    <input
                    required
                        name="repeat_password"
                        value={formData.repeat_password}
                        onChange={(e) => setFormData({...formData, repeat_password : e.target.value})}
                        type="text"
                        placeholder="repeat password"
                        className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                    />
                    </div>
                    <div className="">
                    <label className="text-[1.5rem] block" htmlFor="">
                        Phone
                    </label>
                    <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone : e.target.value})}
                        type="tel"
                        placeholder="number"
                        className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                    //   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    />
                    </div>
                </div>
                <div className="flex gap-x-[4rem] mt-[3rem] ">
                    <div className="">
                    <label className="text-[1.5rem] block" htmlFor="">
                        Date of Birth
                    </label>
                    <input
                    name="dob"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({...formData, dob : e.target.value})}
                        type="date"
                        className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                    />
                    </div>
    
                    <div className="">
                    <label className="text-[1.5rem] block" htmlFor="">
                        Gender
                    </label>
                    <input
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender : e.target.value})}
                        type="text"
                        className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                    />
    
        
                    </div>
                </div>
    
                {/* <Button
                
                submitted={submitted}
                disabled={!datas}
    
                
                /> */}
    
    <button type='submit' 
            className="mt-[4rem] px-[1rem] py-[0.8rem] bg-green-500 rounded-lg  text-[1.5rem] text-white"
            >
        Signup
        </button>
    
    
    
    
                </form>
            </div>
            </div>
            </div>
      
    )
}

export default Signup