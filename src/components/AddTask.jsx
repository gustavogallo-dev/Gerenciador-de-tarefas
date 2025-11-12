import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-md shadow-2xl flex flex-col w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border-slate-300 placeholder-white font-sans text-base sm:text-lg md:text-xl hover:bg-white/20 transition duration-300 outline-slate-400 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-md w-full"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border-slate-300 placeholder-white font-sans text-base sm:text-lg md:text-xl hover:bg-white/20 transition duration-300 outline-slate-400 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-md w-full"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa!");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="text-base sm:text-lg md:text-xl font-sans bg-white/10 backdrop-blur-md hover:bg-white/20 transition duration-300 text-white px-4 py-2 rounded-md font-medium w-full"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
