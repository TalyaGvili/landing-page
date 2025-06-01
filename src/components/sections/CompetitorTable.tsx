
export const CompetitorTable = () => {
  return (
    <section className="bg-body text-heading-1 py-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Direct and Indirect Competitors</h2>
      </div>

      <div className="max-w-4xl mx-auto bg-white dark:bg-[#0A0F1E] shadow-2xl rounded-3xl overflow-hidden border border-box-border">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-sm text-white">
              <th className="bg-gradient-to-r from-indigo-600 to-violet-600 p-4">Features</th>
              <th className="bg-[#192033] p-4">LINKEDIN<br />(INDIRECT)</th>
              <th className="bg-[#223A5E] p-4">BREEZY HR<br />(DIRECT)</th>
              <th className="bg-[#2979FF] p-4">MANATAL<br />(DIRECT)</th>
              <th className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4">JOBA</th>
            </tr>
          </thead>
          <tbody className="text-sm text-heading-1 dark:text-white">
            <tr className="border-b border-box-border">
              <td className="p-4 font-medium">Smart matching for both sides</td>
              <td className="p-4 text-center text-red-500">✖</td>
              <td className="p-4 text-center text-green-500">✔</td>
              <td className="p-4 text-center text-green-500">✔</td>
              <td className="p-4 text-center text-green-500">✔</td>
            </tr>
            <tr className="border-b border-box-border">
              <td className="p-4 font-medium">Candidates see only the most relevant job openings</td>
              <td className="p-4 text-center text-red-500">✖</td>
              <td className="p-4 text-center text-red-500">✖</td>
              <td className="p-4 text-center text-red-500">✖</td>
              <td className="p-4 text-center text-green-500">✔</td>
            </tr>
            <tr className="border-b border-box-border">
              <td className="p-4 font-medium">Recruiters limit the number of candidates</td>
              <td className="p-4 text-center text-red-500">✖</td>
              <td className="p-4 text-center text-red-500">✖</td>
              <td className="p-4 text-center text-red-500">✖</td>
              <td className="p-4 text-center text-green-500">✔</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Dual-sided personalized questionnaire</td>
              <td className="p-4 text-center text-red-500">✖</td>
              <td className="p-4 text-center text-red-500">✖</td>
              <td className="p-4 text-center text-red-500">✖</td>
              <td className="p-4 text-center text-green-500">✔</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
