import { useSpring, animated, to } from "@react-spring/web";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  FaGoogle, FaMicrosoft, FaTwitter } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";

const Register = () => {
  const {register, GoogleSignIn, user} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  // console.log(name)

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    address: "",
    city: "",
    contactNumber: "",
    age: "",
    membershipType: "Regular",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    register(formData.email, formData.password)
    .then(res =>{
      if(res.user){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${formData.firstName} Register Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      setFormData({
        firstName: "",
        email: "",
        address: "",
        city: "",
        contactNumber: "",
        age: "",
        password: "",
        membershipType: "Regular",
      });
    })
    // console.log("Form Data Submitted:", formData);
    .catch((err)=>{
      alert(err.message)
    })
  
  };
  
 
  // Animation for a smooth, color-changing gradient background
  const animatedBackground = useSpring({
    loop: { reverse: true },
    from: { background: "linear-gradient(45deg, #4F46E5, #EC4899)" },
    to: { background: "linear-gradient(45deg, #FBBF24, #A78BFA)" },
    config: { duration: 6000 },
  });



    const handlerGoogle = (e)=>{
      e.preventDefault()
      GoogleSignIn()
      .then(res =>{
        if(res.user){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: ` Register Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location.pathname || '/')
        }
        
      })
      .catch(err =>{
        alert(err.message)
      })
    }

  return (
    <div className="relative flex justify-center rounded-2xl items-center min-h-screen overflow-hidden">
      {/* Animated background */}
      <animated.div
        style={{
          ...animatedBackground,
          backgroundSize: "cover",
        }}
        className="absolute inset-0"
      />

      {/* Form container */}
      <form
        onSubmit={handleSubmit}
        className="relative  shadow-lg rounded-2xl p-8  mb-4 max-w-2xl w-full z-10"
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          Rangpur Cyclist Registration
        </h2>

        <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="city"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contactNumber"
          >
            Contact Number
          </label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="age"
          >
            Age
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="age"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>


        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="membershipType"
          >
            Membership Type
          </label>
          <select
            name="membershipType"
            value={formData.membershipType}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          >
            <option value="Regular">Regular</option>
            <option value="Premium">Premium</option>
            <option value="VIP">VIP</option>
          </select>
        </div>

        </div>

        

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#FFB26F] hover:bg-[#FF9C73] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
        <p className="text-sm py-2 font-bold">
          Already registered? Go to{" "}
          <Link to={"/login"}>
            <span className="text-[#F7A582] underline">Log in</span>
          </Link>
        </p>
        <div className="divider">Or</div>
        <div className=" hover:cursor-pointer text-3xl  mx-auto">
          <button className="w-full p-2 rounded-2xl border-2 border-black flex justify-center m-2 hover:bg-base-200">
            <FaMicrosoft className="ml-5"></FaMicrosoft>
            <p className="text-lg ml-6">sign in with microsoft</p>
          </button>
          <button onClick={handlerGoogle} className="w-full p-2 rounded-2xl border-2 border-black flex justify-center m-2 hover:bg-base-200">
            <FaGoogle></FaGoogle>
            <p className="text-lg ml-6">sign in with google</p>
          </button>
          <button className="w-full p-2 rounded-2xl border-2 border-black flex justify-center m-2 hover:bg-base-200">
            <FaTwitter></FaTwitter>
            <p className="text-lg ml-6">sign in with github</p>

          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
