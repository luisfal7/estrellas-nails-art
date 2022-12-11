import axios from "axios";

const uploadImageDB = async (file) => {

  if( !file ) return

  try {

    const formData = new FormData()
    formData.append("upload_preset", "estrellas-nails-art")
    formData.append("file", file)
    
    const url = "https://api.cloudinary.com/v1_1/do7cayuwj/image/upload"

    const { data } = await axios.post(url, formData)
    
    return data.url;

  } catch (error) {

    console.log("Error al cargar la imagen, revisar logs");
    console.log(error);
    return null;

  }
};

export default uploadImageDB;
