import React, { useState } from "react";

const AddNewsInfoPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    type: "",
    dateTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://your-api-url.com/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("News/Info added successfully!");
        setFormData({
          title: "",
          category: "",
          author: "",
          type: "",
          dateTime: "",
        });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting the news:", error);
      alert("Failed to submit news/info!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add News & Info</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Category */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter category"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Author */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Author (Admin/Moderator)</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter admin/moderator name"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            >
              <option value="">Select Type</option>
              <option value="Race">Race</option>
              <option value="Story">Story</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* Date & Time */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Date & Time</label>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewsInfoPage;