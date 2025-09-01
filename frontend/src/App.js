import { useState } from "react";
import Dropzone from "./components/Dropzone";
import ResultBox from "./components/ResultBox";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (file) => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/extract-text/", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setText(data.text || "Ошибка при извлечении текста");
    } catch (err) {
      setText("Ошибка соединения с сервером");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        <Dropzone onFileUpload={handleFileUpload} />
        <ResultBox text={text} loading={loading} />
      </div>
    </div>
  );
}

export default App;