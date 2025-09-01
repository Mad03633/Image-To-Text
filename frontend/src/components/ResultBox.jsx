function ResultBox({ text, loading }) {
  return (
    <div className="p-6 bg-white border rounded-2xl shadow-md flex flex-col">
      <h2 className="text-lg font-semibold mb-3 text-gray-700">
        Извлечённый текст
      </h2>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <p className="text-gray-400">Обработка изображения...</p>
        ) : text ? (
          <p className="whitespace-pre-wrap text-gray-800">{text}</p>
        ) : (
          <p className="text-gray-400">Тут появится результат</p>
        )}
      </div>
    </div>
  );
}

export default ResultBox;