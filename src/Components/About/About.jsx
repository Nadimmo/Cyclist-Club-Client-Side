// src/AboutPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header with Slogan */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-teal-800">
          Rangpur Cyclist Group
        </h1>
        <p className="text-xl font-semibold text-orange-600 mt-2">
          জাগো বাহে কোনঠে সবাই
        </p>
        <p className="mt-2 text-gray-600">Pedaling Together Since 2016</p>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">About Us</h2>
        <p className="text-gray-700">
          The Rangpur Cyclist Group was established in 2016 with a mission to
          promote cycling as a healthy and eco-friendly lifestyle. We are a
          close-knit community of cycling enthusiasts who regularly explore new
          routes, celebrate the joy of riding, and support each other along the
          way.
        </p>
      </section>

      {/* Admins Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">
          Our Admins
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Admin 1 */}
          <div className="text-center">
            <div className="mb-2">
              <img
                src="https://via.placeholder.com/150"
                alt="Md Rakibul Islam"
                className="w-24 h-24 rounded-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-medium text-teal-800">
              Md Rakibul Islam
            </h3>
            <p className="text-gray-600">Group Admin</p>
          </div>

          {/* Admin 2 */}
          <div className="text-center">
            <div className="mb-2">
              <img
                src="https://via.placeholder.com/150"
                alt="Sajid Islam"
                className="w-24 h-24 rounded-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-medium text-teal-800">Sajid Islam</h3>
            <p className="text-gray-600">Admin</p>
          </div>

          {/* Admin 3 */}
          <div className="text-center">
            <div className="mb-2">
              <img
                src="https://via.placeholder.com/150"
                alt="Obayed Islam"
                className="w-24 h-24 rounded-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-medium text-teal-800">Obayed Islam</h3>
            <p className="text-gray-600">Admin</p>
          </div>
        </div>
      </section>

      {/* Ride Preparation Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">
          Ride Preparation
        </h2>
        <p className="text-gray-700 mb-4">
          Preparing well for a ride ensures both safety and enjoyment. Here’s a
          checklist of essential items to bring along on every ride.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span className="text-teal-600 font-medium">Ride Time:</span> Know
            the schedule and expected duration of the ride.
          </li>
          <li>
            <span className="text-teal-600 font-medium">Money:</span> Carry a
            small amount of cash and a card in case of emergencies.
          </li>
          <li>
            <span className="text-teal-600 font-medium">Helmet:</span> Always
            wear a helmet to protect yourself on the road.
          </li>
          <li>
            <span className="text-teal-600 font-medium">Repair Tools:</span>{" "}
            Basic tools, including a pump, tire patch kit, and multitool, to
            address minor mechanical issues.
          </li>
          <li>
            <span className="text-teal-600 font-medium">Hand Gloves:</span>{" "}
            Protects your hands and offers better grip during long rides.
          </li>
          <li>
            <span className="text-teal-600 font-medium">Cycling Shoes:</span>{" "}
            Wear comfortable, appropriate shoes for better pedal control.
          </li>
          <li>
            <span className="text-teal-600 font-medium">Bike:</span> Ensure your
            bike is in good condition before starting the ride.
          </li>
          <li>
            <span className="text-teal-600 font-medium">Water:</span> Keep
            yourself hydrated by carrying enough water or a hydration pack.
          </li>
        </ul>
      </section>

      {/* Activities Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">
          Our Activities
        </h2>
        <p className="text-gray-700 mb-4">
          Every Friday, our group organizes a city-to-city ride, exploring new
          routes and creating memorable experiences together. Open to all
          cyclists, our rides bring people together for health, friendship, and
          adventure.
        </p>
        <p className="text-gray-700 mb-4">
          Each year on our establishment day, we hold a meetup to celebrate our
          community’s journey. This event is a time for reflection, recognition,
          and reconnecting with friends, marking another successful year of
          cycling together.
        </p>
      </section>

      {/* Join Our Community Section */}
      <section className="max-w-4xl mx-auto bg-teal-100 shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">
          Join Our Community
        </h2>
        <p className="text-gray-700 mb-4">
          Be a part of an amazing cycling family. Membership benefits include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Exclusive access to cycling events and workshops.</li>
          <li>Group rides to explore new trails and routes.</li>
          <li>Networking opportunities with fellow cyclists.</li>
          <li>Discounts on gear, accessories, and club merchandise.</li>
        </ul>
        <Link to={'/contact'} className="mt-4 btn px-6 py-2 bg-teal-600 text-white font-semibold rounded hover:bg-teal-700">
          Become a Member
        </Link>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">
          What Our Members Say
        </h2>
        <div className="space-y-6">
          <blockquote className="border-l-4 border-teal-600 pl-4">
            <p className="text-gray-700">
              "Joining the Rangpur Cyclist Group was the best decision I made.
              The rides are thrilling, and the camaraderie is unmatched."
            </p>
            <cite className="text-gray-600">- Fahim Ahmed</cite>
          </blockquote>
          <blockquote className="border-l-4 border-teal-600 pl-4">
            <p className="text-gray-700">
              "The group has helped me improve my fitness while exploring the
              beauty of Rangpur. Highly recommend to all cycling enthusiasts!"
            </p>
            <cite className="text-gray-600">- Shima Akter</cite>
          </blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto bg-teal-100 shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 mb-4">
          Got questions or want to collaborate? Reach out to us!
        </p>
        <ul className="text-gray-700 space-y-2">
          <li>
            <strong>Email:</strong> rangpurcyclists@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> +880-123-456-7890
          </li>
          <li>
            <strong>Facebook:</strong>{" "}
            <a href="#" className="text-teal-600 underline">
              fb.com/rangpurcyclists
            </a>
          </li>
        </ul>
      </section>

      {/* Events & Festivals Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">
          Events and Festivals
        </h2>
        <p className="text-gray-700 mb-4">
          The Rangpur Cyclist Group also hosts various events and festivals
          throughout the year, including fun rides, competitive races, and
          family-friendly gatherings. Our events are designed to bring joy to
          all cyclists, whether you’re riding for fun or pushing your limits.
        </p>
        <p className="text-gray-700">
          Join us during these special occasions to experience the thrill of
          community events, where riders of all ages come together to celebrate
          our shared passion for cycling.
        </p>
      </section>

      {/* Safety Tips Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">
          Ride Safety Tips
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Always wear a helmet and other protective gear for your safety.
          </li>
          <li>
            Check your bike thoroughly before each ride to ensure it is in good
            condition.
          </li>
          <li>
            Follow all traffic rules, including signals, lanes, and speed
            limits, especially in urban areas.
          </li>
          <li>
            Stay visible by wearing bright clothing or reflective accessories,
            especially during evening rides.
          </li>
          <li>
            Keep a safe distance from other riders and vehicles, and communicate
            any turns or stops.
          </li>
          <li>
            Carry a first-aid kit and emergency contact information in case of
            an accident.
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          Following these safety tips helps ensure a smooth, enjoyable ride for
          everyone involved. Let’s keep safety our top priority as we explore
          new routes and destinations!
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
