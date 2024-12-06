import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useEvents from "../Hooks/useEvents";
import { Link } from "react-router-dom";

const EventCalender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { events } = useEvents();

    // Format selected date to YYYY-MM-DD
  const formattedSelectedDate = selectedDate.toISOString().split("T")[0];

  // Filter events for the selected date
  const filteredEvents = events.filter((event) => event.date === formattedSelectedDate);

  return (
    <div className="min-h-screen mx-auto bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-white mb-8">
        Events & Group Rides Calendar
      </h1>

      <div className="flex flex-col my-auto lg:flex-row gap-10 w-full max-w-6xl">
        {/* Calendar Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Select a Date
          </h2>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={({ date }) =>
              events.some(
                (event) => event.date === date.toISOString().split("T")[0]
              )
                ? "highlight"
                : ""
            }
            className="rounded-lg"
          />
          <p className="mt-4 text-sm text-gray-600">
            Dates highlighted in yellow have events.
          </p>
        </div>

        {/* Events List Section */}
        <div className="bg-white rounded-lg  shadow-lg p-6 flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Events on {formattedSelectedDate}
          </h2>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div
                key={index}
                className="border-b  border-gray-300 pb-4 mb-4 last:border-none last:pb-0"
              >
                <h3 className="text-lg font-bold text-purple-700 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600">
                  📍 <span className="font-medium">{event.location}</span>
                </p>
                <p className="text-gray-600">
                  ⏰ <span className="font-medium">{event.time}</span>
                </p>
                <p className="text-gray-600">
                  🚴 Difficulty: <span className="font-medium">{event.author}</span>
                </p>
                <Link to={'/register'} className="mt-3 btn px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition">
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
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
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

    </div>
  );
};

export default EventCalender;
