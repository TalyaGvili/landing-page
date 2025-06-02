import { useThemeStore } from "../../store/ThemeStore";
import { Title } from "../shared/Title";

export const CompetitorTable = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <section className="mt-10 px-4 md:px-8 lg:px-20">
      {/* Added mb-10 here to increase space below the title */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
        <Title>Direct and Indirect Competitors</Title>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table
          className={`min-w-full text-sm md:text-base transition-colors duration-300 border-collapse ${
            theme === "dark"
              ? "bg-transparent text-white"
              : "bg-white text-gray-900"
          }`}
        >
          <thead>
            <tr
              className={`transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-zinc-900 text-white border-b border-zinc-700"
                  : "bg-zinc-100 text-black border-b border-zinc-300"
              }`}
            >
              <th className="p-4 text-left">Features</th>
              <th className="p-4 text-left">LinkedIn</th>
              <th className="p-4 text-left">Breezy HR</th>
              <th className="p-4 text-left">Manatal</th>
              <th className="p-4 text-left">JOBA</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className={`transition-colors duration-300 ${
                theme === "dark"
                  ? "hover:bg-zinc-800 border-b border-zinc-700"
                  : "hover:bg-zinc-100 border-b border-zinc-200"
              }`}
            >
              <td className="p-4">Smart Matching for both sides</td>
              <td className="p-4">❌</td>
              <td className="p-4">✅</td>
              <td className="p-4">✅</td>
              <td className="p-4">✅</td>
            </tr>
            <tr
              className={`transition-colors duration-300 ${
                theme === "dark"
                  ? "hover:bg-zinc-800 border-b border-zinc-700"
                  : "hover:bg-zinc-100 border-b border-zinc-200"
              }`}
            >
              <td className="p-4">Candidates see only the most relevant job</td>
              <td className="p-4">❌</td>
              <td className="p-4">❌</td>
              <td className="p-4">❌</td>
              <td className="p-4">✅</td>
            </tr>
            <tr
              className={`transition-colors duration-300 ${
                theme === "dark"
                  ? "hover:bg-zinc-800 border-b border-zinc-700"
                  : "hover:bg-zinc-100 border-b border-zinc-200"
              }`}
            >
              <td className="p-4">Recruiters limit the number of candidates</td>
              <td className="p-4">❌</td>
              <td className="p-4">❌</td>
              <td className="p-4">❌</td>
              <td className="p-4">✅</td>
            </tr>
            <tr
              className={`transition-colors duration-300 ${
                theme === "dark"
                  ? "hover:bg-zinc-800 border-b border-zinc-700"
                  : "hover:bg-zinc-100 border-b border-zinc-200"
              }`}
            >
              <td className="p-4">Dual-sided personalized questionnaire</td>
              <td className="p-4">❌</td>
              <td className="p-4">❌</td>
              <td className="p-4">❌</td>
              <td className="p-4">✅</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
