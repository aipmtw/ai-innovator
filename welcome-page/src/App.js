import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col">
      <nav className="max-w-6xl mx-auto px-6 py-6 w-full">
        <a href="https://aipm.com.tw/" className="text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 rounded-lg transition inline-block">← aipm.com.tw</a>
      </nav>
      <main className="flex-1 flex items-center justify-center px-6 pb-12">
        <img
          src="https://github.com/user-attachments/assets/7b38690a-1233-4d6c-b4fe-c6e3eef97c85"
          alt="AI Innovator"
          className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
        />
      </main>
    </div>
  );
}

export default App;
