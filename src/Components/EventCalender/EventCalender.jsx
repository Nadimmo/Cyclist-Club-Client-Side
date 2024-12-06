import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaMapMarkerAlt, FaClock, FaMountain } from "react-icons/fa";
import EventPage from "../Dashboard/EventPage/EventPage";
import { Link } from "react-router-dom";

const EventCalender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const events = [
    {
      date: "2024-12-07",
      title: "Morning Group Ride",
      location: "Central Park",
      difficulty: "Moderate",
      time: "7:00 AM - 9:00 AM",
    },
    {
      date: "2024-12-10",
      title: "Cycling Basics Workshop",
      location: "Community Center",
      difficulty: "Beginner",
      time: "10:00 AM - 12:00 PM",
    },
    {
      date: "2024-12-15",
      title: "Mountain Trail Challenge",
      location: "Blue Ridge Mountain",
      difficulty: "Hard",
      time: "6:00 AM - 12:00 PM",
    },
  ];

  // Filter events for the selected date
  const filteredEvents = events.filter(
    (event) => event.date === selectedDate.toISOString().split("T")[0]
  );

  // Find upcoming events
  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= new Date()
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-white mb-6">
        Events and Group Rides Calendar
      </h1>

      <div className="flex flex-col lg:flex-row lg:gap-10 w-full max-w-5xl">
        {/* Calendar */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={({ date, view }) =>
              events.some(
                (event) => event.date === date.toISOString().split("T")[0]
              )
                ? "highlight"
                : ""
            }
            className="rounded-lg"
          />
          <div className="mt-4 text-sm">
            <h3 className="font-semibold">Legend:</h3>
            <p className="flex items-center gap-2">
              <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>{" "}
              Scheduled Events
            </p>
          </div>
        </div>

        {/* Events List */}
        <div className="bg-white rounded-lg shadow-md p-6 flex-1">
          <h2 className="text-2xl font-semibold mb-4">
            Events on {selectedDate.toDateString()}
          </h2>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div
                key={index}
                className="border-b pb-4 mb-4 last:border-none last:pb-0"
              >
                <h3 className="text-lg font-bold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-500" />
                  {event.location}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaClock className="text-green-500" />
                  {event.time}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaMountain className="text-purple-500" />
                  Difficulty: {event.difficulty}
                </p>
                <Link to={'/login'} className="mt-2 btn px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Register Now
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No events scheduled for this date.</p>
          )} 
        </div>
      </div>
      {/* Ride Preparation Section */}
      <section className="max-w-4xl mt-10 mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Ride Preparation</h2>
        <p className="text-gray-700 mb-4">
          Preparing well for a ride ensures both safety and enjoyment. Here’s a checklist of essential items to bring along on every ride.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><span className="text-teal-600 font-medium">Ride Time:</span> Know the schedule and expected duration of the ride.</li>
          <li><span className="text-teal-600 font-medium">Money:</span> Carry a small amount of cash and a card in case of emergencies.</li>
          <li><span className="text-teal-600 font-medium">Helmet:</span> Always wear a helmet to protect yourself on the road.</li>
          <li><span className="text-teal-600 font-medium">Repair Tools:</span> Basic tools, including a pump, tire patch kit, and multitool, to address minor mechanical issues.</li>
          <li><span className="text-teal-600 font-medium">Hand Gloves:</span> Protects your hands and offers better grip during long rides.</li>
          <li><span className="text-teal-600 font-medium">Cycling Shoes:</span> Wear comfortable, appropriate shoes for better pedal control.</li>
          <li><span className="text-teal-600 font-medium">Bike:</span> Ensure your bike is in good condition before starting the ride.</li>
          <li><span className="text-teal-600 font-medium">Water:</span> Keep yourself hydrated by carrying enough water or a hydration pack.</li>
        </ul>
      </section>
    </div>
  );
};

export default EventCalender;
