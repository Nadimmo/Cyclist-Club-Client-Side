
// src/OurTeamPage.jsx
import React from 'react';

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-teal-800">Meet Our Team</h1>
        <p className="mt-4 text-gray-600">
          The dedicated individuals who make up the Rangpur Cyclist Group. Together, we share a passion for cycling and community.
        </p>
      </header>

      {/* Founder Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-teal-700 mb-6">Founder</h2>
        <div className="text-center">
          <div className="mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Rakibul Islam"
              className="w-24 h-24 rounded-full mx-auto"
            />
          </div>
          <h3 className="text-xl font-medium text-teal-800">Md Rahibul Hasan Rakib</h3>
          <p className="text-gray-600">Founder</p>
        </div>
      </section>

      {/* Admins Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-teal-700 mb-6">Admins</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Sajid Hossain', title: 'Admin' },
            { name: 'Obayed Ali Sarkar', title: 'Admin' },
            { name: 'Sezan Mahmud Asif', title: 'Admin' },
          ].map((admin, index) => (
            <div className="text-center" key={index}>
              <div className="mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt={admin.name}
                  className="w-24 h-24 rounded-full mx-auto"
                />
              </div>
              <h3 className="text-xl font-medium text-teal-800">{admin.name}</h3>
              <p className="text-gray-600">{admin.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Moderators Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-teal-700 mb-6">Moderators</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Nahid Islam"
                className="w-24 h-24 rounded-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-medium text-teal-800">Nahid Islam</h3>
            <p className="text-gray-600">Moderator</p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Nahid Islam"
                className="w-24 h-24 rounded-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-medium text-teal-800">Ashikur Islam</h3>
            <p className="text-gray-600">Moderator</p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Nahid Islam"
                className="w-24 h-24 rounded-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-medium text-teal-800">Mahamudul Islam</h3>
            <p className="text-gray-600">Moderator</p>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-teal-700 mb-6">Our Proud Members</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            'Member 1',
            'Member 2',
            'Member 3',
            'Member 4',
            'Member 5',
            'Member 6',
          ].map((member, index) => (
            <div className="text-center" key={index}>
              <div className="mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt={member}
                  className="w-24 h-24 rounded-full mx-auto"
                />
              </div>
              <h3 className="text-xl font-medium text-teal-800">{member}</h3>
              <p className="text-gray-600">Member</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
