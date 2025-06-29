import { useSpring, animated, to } from "@react-spring/web";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaMicrosoft, FaTwitter } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Register = () => {
  const { register, GoogleSignIn, user, TwitterSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
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
      .then((res) => {
        if (res.user) {
          // send user data to database
          axiosPublic.post("/users", formData).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${formData.firstName} Register Successfully`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
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
        navigate(location.state || "/");
      })
      // console.log("Form Data Submitted:", formData);
      .catch((err) => {
        alert(err.message);
      });
  };

  // Animation for a smooth, color-changing gradient background
  const animatedBackground = useSpring({
    loop: { reverse: true },
    from: { background: "linear-gradient(45deg, #03A6A1, #FFE3BB)" },
    to: { background: "linear-gradient(45deg, #4DA8DA, #80D8C3)" },
    config: { duration: 6000 },
  });

  const handlerGoogle = (e) => {
    e.preventDefault();
    GoogleSignIn()
      .then((res) => {
        if (res.user) {
          const name = res.user.displayName;
          const email = res.user.email;
          const userInfo = {
            firstName: name,
            email: email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: ` Register Successfully`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
          navigate(location.state || "/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };


  const handlerTwitter = (e) => {
    e.preventDefault();
    TwitterSignIn()
      .then((res) => {
        if (res.user) {
          const name = res.user.displayName;
          const email = res.user.email;
          const userInfo = {
            firstName: name,
            email: email,
          };
          axiosPublic.post('/users', userInfo)
            .then(res => {
              if (res.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: ` Register Successfully`,
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
          navigate(location.state || "/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

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
        <div className=" hover:cursor-pointer text-3xl lg:space-x-5 space-y-2  mx-auto">
          <button className="btn bg-[#2F2F2F] text-white border-black">
            <svg aria-label="Microsoft logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 96H247V247H96" fill="#f24f23"></path><path d="M265 96V247H416V96" fill="#7eba03"></path><path d="M96 265H247V416H96" fill="#3ca4ef"></path><path d="M265 265H416V416H265" fill="#f9ba00"></path></svg>
            Sign in with Microsoft
          </button>
          <button onClick={handlerGoogle} className="btn bg-white text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Sign in with Google
          </button>
          <button onClick={handlerTwitter} className="btn bg-black text-white border-black">
            <svg aria-label="X logo" width="16" height="12" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" /></svg>
            Sign in with Twitter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
