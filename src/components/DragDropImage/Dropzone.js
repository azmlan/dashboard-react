//*Dropzone.js*//
import React from "react";
import { useDropzone } from "react-dropzone";
function Dropzone({ onDrop, accept, open }) {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept,
      onDrop,
    });
    
    const files = acceptedFiles.map((file) => (
      <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  
  

  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          {isDragActive ? (
            <p className="dropzone-content">
              انزل الصورة هنا 
            </p>
          ) : (
            <p className="dropzone-content">
              اضغط هنا لاختيار صورة او اسحب الصورة الى هنا 
            </p>
          )}
          <button type="button" onClick={open} className="btn">
            اختر صورة
          </button>
        </div>
      </div>
      <br/>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

export default Dropzone;