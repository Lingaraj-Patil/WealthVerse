import React from 'react';
import { ArrowRight, PieChart, Target, TrendingUp, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Master Your Finances with
              <span className="text-emerald-600"> Interactive Learning</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Join our community and learn financial literacy through engaging games, 
              simulations, and interactive tools. Start your journey to financial freedom today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                Start Learning
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors">
                View Courses
              </button>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <FeatureCard 
              icon={<PieChart className="h-8 w-8 text-emerald-600" />}
              title="Budget Builder"
              description="Create and manage your budget with our interactive tools"
            />
            <FeatureCard 
              icon={<Target className="h-8 w-8 text-emerald-600" />}
              title="Goal Setting"
              description="Set and track your financial goals with visual progress"
            />
            <FeatureCard 
              icon={<TrendingUp className="h-8 w-8 text-emerald-600" />}
              title="Investment Simulator"
              description="Practice investing with virtual money in real-time"
            />
            <FeatureCard 
              icon={<Trophy className="h-8 w-8 text-emerald-600" />}
              title="Learn & Earn"
              description="Earn points and badges as you master new concepts"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}