// hooks/useCloudinary.js
import { useState } from "react";
import axios from "axios";

export const useCloudinary = () => {
  const [isUploading, setIsUploading] = useState(false);

  const uploadImage = async (file) => {
    if (!file) return null;
    setIsUploading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "store_manager");
    data.append("cloud_name", "dpxbfhevq");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dpxbfhevq/image/upload",
        data,
      );
      return res.data.secure_url;
    } catch (err) {
      console.error("Upload error:", err);
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadImage, isUploading };
};
