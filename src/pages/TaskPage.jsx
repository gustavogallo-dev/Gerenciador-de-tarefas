import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[url('/images/bg_photo.png')] bg-cover bg-center flex justify-center items-start py-10 px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md space-y-6 p-6 rounded-xl shadow-2xl">
        <div className="flex justify-center relative mb-4">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl sm:text-4xl text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-md">
          <p className="text-white text-base sm:text-lg md:text-xl font-sans break-words">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
