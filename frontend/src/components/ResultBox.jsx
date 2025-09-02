export default function ResultBox({ result }) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md flex flex-col">
      <h2 className="text-lg font-semibold mb-3">Recognized text</h2>

      {result.language && (
        <p className="text-sm text-gray-500 mb-2">
          Language detected: <span className="font-medium">{result.language}</span>
        </p>
      )}

      <div className="flex-1 bg-gray-50 border rounded-lg p-3 text-gray-700 overflow-auto">
        {result.text ? result.text : "The text will appear here after the image is uploaded"}
      </div>
    </div>
  );
}
