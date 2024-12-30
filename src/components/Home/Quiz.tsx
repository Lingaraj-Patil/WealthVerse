import React, { useState } from 'react';

const questions = [
    {
      question: "What does a budget help you with?",
      options: ["Spending more money", "Tracking income and expenses", "Avoiding taxes", "Buying luxury items"],
      answer: 1,
    },
    {
      question: "What is an emergency fund?",
      options: ["Money for shopping", "Savings for unexpected expenses", "A loan from the bank", "A reward for good budgeting"],
      answer: 1,
    },
    {
      question: "What is compound interest?",
      options: [
        "Interest earned on the principal amount only",
        "Interest earned on the principal and previously earned interest",
        "A penalty for not saving",
        "A fee for opening a bank account",
      ],
      answer: 1,
    },
    {
      question: "What does 'credit score' measure?",
      options: [
        "Your yearly income",
        "Your creditworthiness",
        "Your spending habits",
        "Your savings amount",
      ],
      answer: 2,
    },
    {
      question: "Which of the following is a fixed expense?",
      options: ["Electricity bill", "Groceries", "Car loan payment", "Entertainment"],
      answer: 2,
    },
    {
      question: "What is a liability?",
      options: ["An asset that increases your wealth", "Money you owe", "Your savings", "A type of investment"],
      answer: 2,
    },
    {
      question: "What is the purpose of insurance?",
      options: [
        "To save money for emergencies",
        "To protect against financial loss",
        "To earn interest",
        "To invest in stocks",
      ],
      answer: 2,
    },
    {
      question: "What does 'net income' mean?",
      options: [
        "Income after taxes and deductions",
        "Your total income before expenses",
        "Total savings",
        "Gross income minus liabilities",
      ],
      answer: 1,
    },
    {
      question: "What is diversification in investing?",
      options: [
        "Focusing on one stock for high returns",
        "Investing in multiple assets to reduce risk",
        "Buying the same asset repeatedly",
        "Avoiding investments completely",
      ],
      answer: 2,
    },
    {
      question: "Which of the following is a liquid asset?",
      options: ["Real estate", "Stocks", "Savings account", "Artwork"],
      answer: 3,
    },
    {
      question: "What is the main advantage of a 401(k) retirement account?",
      options: [
        "Immediate access to funds",
        "Employer matching contributions",
        "High liquidity",
        "Guaranteed returns",
      ],
      answer: 2,
    },
    {
      question: "What does APR stand for?",
      options: [
        "Annual Payment Rate",
        "Average Percentage Rate",
        "Annual Percentage Rate",
        "Annual Principal Rate",
      ],
      answer: 3,
    },
    {
      question: "Which is considered a good financial habit?",
      options: [
        "Spending more than you earn",
        "Saving at least 20% of your income",
        "Ignoring credit card bills",
        "Investing without research",
      ],
      answer: 2,
    },
    {
      question: "What is the primary goal of a savings account?",
      options: [
        "To store money for daily expenses",
        "To save money for future use",
        "To earn high returns",
        "To take loans",
      ],
      answer: 2,
    },
    {
      question: "What is an example of passive income?",
      options: [
        "Salary from a job",
        "Rental income",
        "Interest earned from savings",
        "Selling handmade products",
      ],
      answer: 2,
    },
    {
      question: "What is the significance of a financial goal?",
      options: [
        "To spend money wisely",
        "To provide direction for saving and investing",
        "To increase liabilities",
        "To avoid taxes",
      ],
      answer: 2,
    },
    {
      question: "What is the benefit of creating an emergency fund?",
      options: [
        "Covering regular expenses",
        "Handling unexpected financial situations",
        "Avoiding budgeting",
        "Earning higher interest",
      ],
      answer: 2,
    },
    {
      question: "What is the meaning of 'pay yourself first'?",
      options: [
        "Spending on luxuries first",
        "Saving or investing a portion of income before spending",
        "Paying bills before saving",
        "Taking loans for expenses",
      ],
      answer: 2,
    },
    {
      question: "What is a credit card?",
      options: [
        "A card for earning discounts",
        "A card for accessing borrowed money",
        "A card linked to your savings account",
        "A card for tax deductions",
      ],
      answer: 2,
    },
    {
      question: "What is a diversified investment portfolio?",
      options: [
        "Investing in a single asset type",
        "Spreading investments across different assets",
        "Buying only government bonds",
        "Holding only cash",
      ],
      answer: 2,
    },
    {
      question: "What is the purpose of a financial plan?",
      options: [
        "To track only expenses",
        "To achieve long-term financial goals",
        "To avoid saving money",
        "To reduce your income",
      ],
      answer: 2,
    },
    {
      question: "What is inflation?",
      options: [
        "A decrease in the value of money over time",
        "An increase in the cost of goods and services over time",
        "An increase in savings rate",
        "A decrease in stock prices",
      ],
      answer: 2,
    },
    {
      question: "What is a stock market?",
      options: [
        "A place to buy and sell company shares",
        "A place to buy groceries",
        "A method of saving money",
        "A type of insurance",
      ],
      answer: 1,
    },
    {
      question: "What is a good way to manage debt?",
      options: [
        "Ignoring payments",
        "Paying the minimum amount only",
        "Consolidating loans for lower interest",
        "Taking more loans",
      ],
      answer: 3,
    },
    {
      question: "What does ROI stand for?",
      options: [
        "Rate of Inflation",
        "Return on Investment",
        "Revenue over Interest",
        "Rate of Income",
      ],
      answer: 2,
    },
    {
      question: "What is the purpose of a mutual fund?",
      options: [
        "To pool money from investors to buy diversified assets",
        "To store cash",
        "To earn interest on deposits",
        "To avoid taxes",
      ],
      answer: 1,
    },
    {
      question: "What is a good savings rate for long-term goals?",
      options: ["1-5%", "10-15%", "25-30%", "50% or more"],
      answer: 2,
    },
    {
      question: "What is a key benefit of online banking?",
      options: [
        "Increased ATM fees",
        "Convenient access to financial services",
        "Lower interest rates",
        "Fewer security features",
      ],
      answer: 2,
    },
  ];
  
  

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        {showResults ? (
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Quiz Results</h2>
            <p className="text-lg">You scored {score} out of {questions.length}!</p>
          </div>
        ) : (
          <div className="max-w-3xl p-6 mx-auto bg-white shadow-lg rounded-xl">
            <h3 className="mb-4 text-xl font-bold">
              Question {currentQuestion + 1} of {questions.length}
            </h3>
            <p className="mb-6 text-gray-700">{questions[currentQuestion].question}</p>
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
