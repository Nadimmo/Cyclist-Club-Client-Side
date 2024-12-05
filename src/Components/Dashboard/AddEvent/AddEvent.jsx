import React, { useState } from "react";

const AddEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    time: "",
    date: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    // const eventFormData = new FormData();
    // for (const key in formData) {
    //   eventFormData.append(key, formData[key]);
    // }

    // try {
    //   const response = await fetch("https://your-api-url.com/events", {
    //     method: "POST",
    //     body: eventFormData,
    //   });
    //   const result = await response.json();
    //   if (response.ok) {
    //     alert("Event added successfully!");
    //     setFormData({
    //       title: "",
    //       description: "",
    //       location: "",
    //       time: "",
    //       date: "",
    //       image: null,
    //     });
    //   } else {
    //     alert(`Error: ${result.message}`);
    //   }
    // } catch (error) {
    //   console.error("Error submitting the event:", error);
    //   alert("Failed to submit event!");
    // }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add New Event</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Event Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter event title"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter event description"
              className="w-full border border-gray-300 rounded-lg p-2 h-28"
              required
            ></textarea>
          </div>
          {/* Location */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter event location"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Time */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Date */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Image */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-red-500 text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
