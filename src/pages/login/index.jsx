import pana  from '../../assets/pana.png'
import { useFormik } from 'formik';
import { loginValidate} from '../../validations/login'
import axios from 'axios';
import { API_URL } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    // const loginSubmit = () => {


    // }
    const redirect = useNavigate()
    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        loginValidate,
        onSubmit: async(values) => {
         // alert(JSON.stringify(values, null, 2));
        try{
            
            const response = await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_API_HOST}${API_URL.LOGIN_URL}`,
                data: values
            })
            console.log("response", response.data)
            // if(response.data.level === 2)  {
            //     redirect('/auth/verify-otp')
            //     return 
            // }
            if(response.data.status === false) throw new Error(response.data.message)
            
            localStorage.setItem('userToken', response.data.token)
            redirect('/dashboard')
           

        }catch(error){
            console.log("error", error.response.data.message, error.response.data.level )
            // alert(error.response.data.message || "Sorry something went wrong")

        }
    }
      });


    return (

        <div className="flexflex-col w-full h-screen ">
        <div className="text-[4rem] font-extrabold text-purple-700 px-[2rem] ">
          Carbon
        </div>
  
        <div className="flex flex-row-reverse justify-between px-[10rem] ">
          <img src={pana} alt="" className="w-[50rem] " />
          <div className=" flex flex-col w-[50%]">
            <div className="">
              <h1 className="">Sign Up for an Account</h1>
              <p className="">
                Let’s get you all set up for the Carbon experience
              </p>
            </div>
  
            <form onSubmit={formik.handleSubmit}>
                <div className="">
                <label className="text-[1.5rem] block" htmlFor="">
                Email Address
                </label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                />
                </div> 
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <label className="text-[1.5rem] block" htmlFor="">
                Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                        />
                  {formik.errors.password ? <div>{formik.errors.password}</div> : null}

                <button type="submit" className="mt-[3rem] text-[2rem] text-center text-white font-semibold w-[35rem] bg-blue-600 rounded-lg px-[1rem] py-[1rem] ">Submit</button>
            </form>
          </div>
        </div>
      </div>
       
      )
}

export default Login