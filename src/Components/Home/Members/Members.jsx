import React from "react";
import MemberCard from "./MemberCard";

const Members = () => {
  const memberData = [
    { image: "https://i.ibb.co.com/jkPQShw/Ellipse-2.png", name: "Rakibul Islam", role: "Founder Rangpur Cyclist" },
    { image: "https://i.ibb.co.com/jkPQShw/Ellipse-2.png", name: "Obayed Ali Sarkar", role: "Admin Rangpur Cyclist" },
    { image: "https://i.ibb.co.com/jkPQShw/Ellipse-2.png", name:"Sajid Hossain", role: "Admin Rangpur Cyclist" },
  ];

  return (
    <div className="m-5 mt-20">
      <div className="text-center my-2">
        <h1 className="text-4xl font-bold text-gray-800">Our Proud Member & Founder</h1>
        <p className="text-lg my-2 text-gray-600">
          Racing is still encouraged and remains an important part of the Team. 
          Members are welcome to race if they choose to do so in our club.
        </p>
      </div>
      <div className="lg:grid grid-cols-3 gap-4 mt-10 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 p-6 rounded-xl shadow-lg">
        {memberData.map((member, index) => (
          <MemberCard key={index} image={member.image} name={member.name} role={member.role} />
        ))}
      </div>
    </div>
  );
};

export default Members;
