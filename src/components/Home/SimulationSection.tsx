import React from 'react';
import { DollarSign, PieChart, ArrowRight } from 'lucide-react';

export default function SimulationSection() {
  const [income, setIncome] = React.useState(5000);
  const [expenses, setExpenses] = React.useState(3000);

  const savings = income - expenses;
  const savingsPercentage = Math.round((savings / income) * 100);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Try Our Budget Simulator
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Income
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="pl-10 w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Expenses
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    value={expenses}
                    onChange={(e) => setExpenses(Number(e.target.value))}
                    className="pl-10 w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Monthly Savings</h3>
                <span className="text-2xl font-bold text-emerald-600">
                  ${savings.toLocaleString()}
                </span>
              </div>

              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200">
                      Savings Rate
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-emerald-600">
                      {savingsPercentage}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-emerald-200">
                  <div
                    style={{ width: `${savingsPercentage}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500 transition-all duration-500"
                  ></div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700">
                Try More Financial Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}