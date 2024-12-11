import React from 'react';

const table = () => {
  // Mock data for demonstration purposes
  const data = [
    {
      year: "2014",
      combinedRatio: "85%",
      lossRatio: "60%",
      claimsRatio: "50%",
      expenseRatio: "15%",
      salesGrowth: "10%",
      policySalesGrowth: "12%",
    },
    {
      year: "2015",
      combinedRatio: "87%",
      lossRatio: "62%",
      claimsRatio: "52%",
      expenseRatio: "14%",
      salesGrowth: "12%",
      policySalesGrowth: "15%",
    },
    // Add data for remaining years up to 2024
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <h1 className="text-2xl font-bold text-gray-800 mb-5">
        Company Growth Analysis (Past 10 Years)
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Year</th>
              <th className="py-3 px-4 text-left">Combined Ratio</th>
              <th className="py-3 px-4 text-left">Loss Ratio</th>
              <th className="py-3 px-4 text-left">Claims Ratio</th>
              <th className="py-3 px-4 text-left">Expense Ratio</th>
              <th className="py-3 px-4 text-left">Sales Growth</th>
              <th className="py-3 px-4 text-left">Policy Sales Growth</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-blue-100`}
              >
                <td className="py-3 px-4">{item.year}</td>
                <td className="py-3 px-4">{item.combinedRatio}</td>
                <td className="py-3 px-4">{item.lossRatio}</td>
                <td className="py-3 px-4">{item.claimsRatio}</td>
                <td className="py-3 px-4">{item.expenseRatio}</td>
                <td className="py-3 px-4">{item.salesGrowth}</td>
                <td className="py-3 px-4">{item.policySalesGrowth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default table;
