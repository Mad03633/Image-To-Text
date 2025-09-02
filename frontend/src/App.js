import { useState } from "react";
import Dropzone from "./components/Dropzone";
import ResultBox from "./components/ResultBox";

export default function App() {
  const [result, setResult] = useState({ text: "", language: "" });

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:8000/extract-text/", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Image to Text</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        <Dropzone onFileUpload={handleFileUpload} />
        <ResultBox result={result} />
      </div>
    </div>
  );
}
