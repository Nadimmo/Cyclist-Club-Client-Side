import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AddImage = () => {
  const [imageFile, setImageFile] = useState(null);
  const axiosPublic = useAxiosPublic();
  
  // Replace these with your Cloudinary details
  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dbjqzpbze/image/upload";
  const CLOUDINARY_UPLOAD_PRESET = "cyclist club";

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      Swal.fire("Error", "Please select an image first!", "error");
      return;
    }

    // Create FormData and append required Cloudinary fields
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("cyclist club", CLOUDINARY_UPLOAD_PRESET);

    try {
      // Upload image to Cloudinary
      const response = await axios.post(CLOUDINARY_URL, formData);
      const imageUrl = response.data.secure_url;

      if (imageUrl) {
        // Save the image URL to your database
        const saveResponse = await axiosPublic.post("/gallery", { url: imageUrl });

        if (saveResponse.data.insertedId) {
          // Show success alert
          Swal.fire("Success", "Image uploaded and saved successfully!", "success");
        } else {
          Swal.fire("Error", "Failed to save the image in the database.", "error");
        }
      } else {
        Swal.fire("Error", "Failed to upload the image to Cloudinary.", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "An unexpected error occurred.", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-sky-600 mb-6">
          Upload an Image
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-sky-600 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            Upload Image
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddImage;
