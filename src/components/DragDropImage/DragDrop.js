import  React,{ useCallback, useState } from "react";
import cuid from "cuid";
import Dropzone from "./Dropzone";
import ImageGrid from "./ImageGride";

export default function DragDrop() {

  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);


  return (
    <div>
      <main className="">
      <h1 className="text-center">اختر صورة او اسحب الى هنا</h1>
      <Dropzone onDrop={onDrop} accept={"image/*"} />
      <ImageGrid images={images} />
    </main>
    </div>
  )
}
