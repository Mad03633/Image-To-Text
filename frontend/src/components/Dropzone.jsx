import { useState } from "react";

export default function Dropzone({ onFileUpload }) {
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    onFileUpload(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    onFileUpload(selectedFile);
  };

  return (
    <div
      className="flex flex-col items-center justify-center border-4 border-dashed border-gray-400 rounded-2xl bg-white p-10 shadow-xl hover:border-blue-500 transition cursor-pointer"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p className="text-lg font-semibold text-gray-700">
        Drag & Drop your image here
      </p>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mt-4"
      />
      {file && (
        <p className="mt-2 text-sm text-gray-500">{file.name}</p>
      )}
    </div>
  );
}