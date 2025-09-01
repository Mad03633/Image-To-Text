import { useState } from "react";

function Dropzone({ onFileUpload }) {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onFileUpload(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onFileUpload(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-2xl p-6 bg-white shadow-md"
    >
      <label className="cursor-pointer text-center">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="text-gray-600">
          <p className="mb-2 font-medium">Перетащи картинку сюда</p>
          <p className="text-sm text-gray-400">или кликни для выбора файла</p>
        </div>
      </label>

      {preview && (
        <div className="mt-4">
          <img
            src={preview}
            alt="preview"
            className="max-h-48 rounded-lg border shadow"
          />
        </div>
      )}
    </div>
  );
}

export default Dropzone;