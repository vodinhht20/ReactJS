
import Axios from 'axios';

const UploadImage = (upLoad) => {
    const data = new FormData();
    data.append("file", upLoad);
    data.append("upload_preset", "uploadImageReactjs");
    const uploadFile = async () => {
      const responseData = await Axios.post("https://api.cloudinary.com/v1_1/vodinh/image/upload", data);
      const urlImage = responseData.data;
      return urlImage;
    };
    return uploadFile();
};
export default UploadImage;
