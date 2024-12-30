import React from 'react';
import { 
  BookOpen, 
  BarChart3, 
  Target, 
  TrendingUp, 
  Users, 
  Award
} from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Interactive Courses",
    description: "Learn through engaging multimedia content and practical exercises"
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Financial Dashboard",
    description: "Track your progress and financial health in real-time"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Goal Tracking",
    description: "Set and monitor your financial goals with visual feedback"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Investment Simulator",
    description: "Practice investing strategies without real money risk"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Support",
    description: "Connect with peers and learn from their experiences"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Achievements",
    description: "Earn badges and certificates as you progress"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Master Finance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform provides all the tools and resources you need to build 
            strong financial literacy skills and achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-emerald-600">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}