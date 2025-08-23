import { useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router'

function CustomerRegistrationForm() {
  const [customerName, setCustomerName] = useState("");
  const [gmail, setGmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("")

  const navigate = useNavigate()

  function handleInsert (e) {
    e.preventDefault()
    axios.post("http://localhost:5000/insert/customer",{
        customerName:customerName,
        gmail:gmail,
        phone:phone,
        address:address
        
    }).then(() =>{
        navigate("/")
        toast.success("registered successfully")
    })
  }
  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">
        Customer Registration
      </h2>

      <div>
        <label className="block mb-1 font-medium">Customer Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          name="customerName"
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Gmail</label>
        <input
          type="email"
          name="gmail"
          className="w-full border border-gray-300 rounded p-2"
          required
           value={gmail}
          onChange={(e) => setGmail(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          className="w-full border border-gray-300 rounded p-2"
          required
           value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Address</label>
        <textarea
          name="address"
          rows={3}
          className="w-full border border-gray-300 rounded p-2"
          required
           value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
      onClick={(e) => handleInsert(e)}
      >
        Register Customer
      </button>
    </form>
  );
}

export default CustomerRegistrationForm;
