import {storage} from "../firebase/firebaseUpload.config";
import { useState } from "react";
import { uploadBytesResumable, getDownloadURL, ref } from "@firebase/storage";
import { useToastContainer } from "react-toastify";
export default function UploadFile(domFile) {
        const [urlImager, setUrlImage] = useState("");
        if (!domFile) return;
        const sotrageRef = ref(storage, `files/${domFile.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, domFile);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const prog = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
          },
          (error) => console.log(error),
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              // console.log("File available at", downloadURL);
              setUrlImage(downloadURL);
            });
          }
        );

        return urlImager;
}