import React from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "./../../Hooks/useAxiosPublic";

const AddEvent = () => {
  const axiosPublic = useAxiosPublic();
  const hosting_image_key = "1b65a8a855445b1b3daf858e85fd4479";
  const hosting_image_api = `https://api.imgbb.com/1/upload?key=${hosting_image_key}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const location = form.location.value;
    const author = form.author.value;
    const time = form.time.value;
    const date = form.date.value;
    const imageFile = form.image.files[0];

    // Validate form data
    if (
      !title ||
      !description ||
      !location ||
      !author ||
      !time ||
      !date ||
      !imageFile
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
      return;
    }

    // Upload image to ImgBB
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const imageResponse = await axiosPublic.post(
        hosting_image_api,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      // console.log(imageResponse.data.data.url)
      // console.log(imageResponse.data.data)

      if (imageResponse.data.success) {
        const imageURL = imageResponse.data.data.url;

        // Prepare event data
        const eventData = {
          title,
          description,
          location,
          author,
          time,
          date,
          image: imageURL,
        };
        const jsonString = JSON.stringify(eventData);
        // Send event data to database
        const response = await axiosPublic.post("/events", jsonString, {
          headers: { "Content-Type": "application/json" },
        });

        if (response.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Event has been added successfully.",
          });
          form.reset(); // Reset the form after submission
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed!",
            text: "Could not add the event. Please try again later.",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Image Upload Failed",
          text: "Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Something went wrong. Please try again later.",
      });
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen max-w-full bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add New Event
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Event Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter event title"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter event description"
              className="w-full border border-gray-300 rounded-lg p-2 h-28"
              required
            ></textarea>
          </div>
          {/* Location */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter event location"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Author */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Author (Admin/Moderator)
            </label>
            <input
              type="text"
              name="author"
              placeholder="Enter admin/moderator name"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Time */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Time
            </label>
            <input
              type="time"
              name="time"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Date */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Image */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Image
            </label>
            <input
              type="file"
              name="image"
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
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
