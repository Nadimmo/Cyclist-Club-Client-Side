import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AddImage = () => {
  const [imageFile, setImageFile] = useState(null);
  const axiosPublic = useAxiosPublic()
  const hosting_image_key = "1b65a8a855445b1b3daf858e85fd4479";
  const hosting_image_api = `https://api.imgbb.com/1/upload?key=${hosting_image_key}`;

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      Swal.fire("Error", "Please select an image first!", "error");
      return;
    }

    // Upload to ImageBB
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await axiosPublic.post(hosting_image_api, formData);

      if (response.data.success) {
        const imageUrl = response.data.data.url;

        // Save the image URL to the database (dummy endpoint used here)
        await axiosPublic.post("/gallery", { url: imageUrl }).then((res) => {
          if (res.data.insertedId) {
            // Show success alert
            Swal.fire(
              "Success",
              "Image uploaded and saved successfully!",
              "success"
            );
          }
        });
      } else {
        Swal.fire("Error", "Failed to upload image to ImageBB", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "An unexpected error occurred", "error");
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
