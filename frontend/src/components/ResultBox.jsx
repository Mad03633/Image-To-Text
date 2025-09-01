export default function ResultBox({ text, loading }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Extracted Text
      </h2>
      <div className="h-80 overflow-y-auto border rounded-xl p-4 text-gray-700 bg-gray-50">
        {loading ? (
          <p className="text-gray-400">Extracting text...</p>
        ) : (
          <pre className="whitespace-pre-wrap">{text || "No text yet."}</pre>
        )}
      </div>
    </div>
  );
}
