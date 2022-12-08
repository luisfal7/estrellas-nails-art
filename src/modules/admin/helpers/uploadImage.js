import axios from "axios";

const uploadImage = async (file) => {
  try {

    const url = "https://api.cloudinary.com/v1_1/do7cayuwj/image/upload";
    const formData = new FormData();
    formData.append("upload_preset", "estrellas-nails-art");
    formData.append("file", file);

    const { data } = axios.post(url, formData);
    
    console.log(data)

    return data.secure_url;

  } catch (error) {

    console.log("Error al cargar la imagen, revisar logs");
    console.log(error);
    return null;

  }
};

export default uploadImage;
