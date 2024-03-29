import { useState } from "react";
import topup from "../../assets/topup.png";
import { API_URL } from "../../services/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Topup = () => {
  const redirect = useNavigate();
  const [formData, setFormData] = useState({
    amount: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.amount || !formData.phone)
      return alert("Amount and phone number is required");
    if (formData.amount > 50000) return alert("you cannot transfer above 50k");
    try {
      const authorization = localStorage.getItem("userToken");
      console.log(authorization);
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_HOST}${API_URL.TOPUP}`,
        headers: { authorization: `BEARER ${authorization}` },
        data: formData,
      });

      if (response.data.status === false)
        throw new Error(response.data.message);
      console.log(response);
      alert(response.data.message);

      redirect("/dashboard");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message || "Sorry something went wrong");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mt-[20rem]">
      <div>
        <img src={topup} alt="" />
      </div>
      <label className="text-[1.5rem] block" htmlFor="">
        Amount
      </label>
      <input
        required
        name="amount"
        type="text"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        placeholder="email address"
        className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
      />
      <label className="text-[1.5rem] block" htmlFor="">
        Phone
      </label>
      <input
        required
        name="phone"
        type="text"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="0838389440401"
        className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
      />
      <div className="space-x-10 mt-10">
        <button className="bg-purple-900 p-5 rounded-lg" onClick={handleSubmit}>
          Proceed
        </button>
        <button
          className="bg-purple-900 p-5 rounded-lg"
          onClick={(e) => redirect("/dashboard")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Topup;
