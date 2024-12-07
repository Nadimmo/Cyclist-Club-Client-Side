import React from "react";
import useContact from "../../Hooks/useContact";
import useAxiosPublic from './../../Hooks/useAxiosPublic';
import Swal from "sweetalert2";

const Request = () => {
  const { contact, refetch } = useContact();
  const axiosPublic = useAxiosPublic()
//   console.log(contact);


const handlerDelete = (id) => {
    axiosPublic
      .delete(`/contact/${id}`)
      .then((res) => {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Removed Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

 

  return  <div className="p-6 bg-gray-100 min-h-screen">
  <h1 className="text-2xl font-bold text-gray-800 mb-6">
    All Request: {contact.length}
  </h1>
  <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300 bg-white">
    <table className="table-auto w-full">
      {/* Table Header */}
      <thead className="bg-teal-500 text-white">
        <tr>
          <th className="px-4 py-3 text-left">#</th>
          <th className="px-4 py-3 text-left">Email</th>
          <th className="px-4 py-3 text-center">Name</th>
          <th className="px-4 py-3 text-center">Action</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className="divide-y divide-gray-200">
        { contact.length > 0 ? contact.map((user, index) => (
          <tr key={user._id} className="hover:bg-gray-50">
            <td className="px-4 py-3 text-gray-700">{index + 1}</td>
            <td className="px-4 py-3 text-gray-700">{user.email}</td>
            <td className="px-4 py-3 text-gray-700">{user.name}</td>
            
            
            <td className="px-4 py-3 text-center">
              <button
                onClick={() => handlerDelete(user._id)}
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded transition"
              >
                Remove
              </button>
            </td>
          </tr>
        )):<p className="text-gray-500 text-center">No data in now please wait... </p>}
      </tbody>
    </table>
  </div>
</div>
};

export default Request;
