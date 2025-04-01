
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, ArrowRight } from "lucide-react";

const Learn = () => {
  const courses = [
    {
      id: "financial-fundamentals",
      title: "Financial Fundamentals",
      description: "Learn the basics of business finance, accounting, and financial statements.",
      level: "Beginner",
      duration: "4 weeks",
      modules: 6,
    },
    {
      id: "funding-strategies",
      title: "Funding Strategies",
      description: "Explore different funding options and how to choose the right one for your business.",
      level: "Intermediate",
      duration: "3 weeks",
      modules: 5,
    },
    {
      id: "financial-growth-scaling",
      title: "Financial Growth & Scaling",
      description: "Master strategies for managing finances during business growth and expansion.",
      level: "Advanced",
      duration: "5 weeks",
      modules: 8,
    },
    {
      id: "investment-management",
      title: "Investment Management",
      description: "Learn how to manage investments and make informed investment decisions.",
      level: "Intermediate",
      duration: "4 weeks",
      modules: 7,
    },
    {
      id: "tax-planning-entrepreneurs",
      title: "Tax Planning for Entrepreneurs",
      description: "Understand tax obligations and strategies to optimize your business tax position.",
      level: "Intermediate",
      duration: "3 weeks",
      modules: 6,
    },
    {
      id: "digital-finance-fintech",
      title: "Digital Finance & Fintech",
      description: "Explore digital financial tools and fintech solutions for business efficiency.",
      level: "Beginner",
      duration: "3 weeks",
      modules: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary text-sm font-medium mb-6">
                Financial Education
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empowering Through <span className="text-gradient">Knowledge</span>
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Access a comprehensive library of financial education resources designed specifically for women entrepreneurs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {courses.map((course, index) => (
                <div key={index} className="glass-panel rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      course.level === "Beginner" ? "bg-green-100 text-green-800" :
                      course.level === "Intermediate" ? "bg-blue-100 text-blue-800" :
                      "bg-purple-100 text-purple-800"
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                  
                  <div className="flex justify-between text-xs text-muted-foreground mb-4">
                    <span>{course.duration}</span>
                    <span>{course.modules} modules</span>
                  </div>
                  
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={`/learn/course/${course.id}`}>
                      View Course
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Our Learning Approach</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Self-Paced Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn at your own pace with flexible online courses.
                  </p>
                </div>
                
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Community Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with other entrepreneurs in our learning community.
                  </p>
                </div>
                
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                      <path d="M8 2h8"></path>
                      <path d="M9 2v6.4a3 3 0 0 1-.8 2.1l-5.7 6.8a.8.8 0 0 0 .5 1.3l5 .6c.8.1 1.5-.4 1.8-1.1L12 14"></path>
                      <path d="m21 2-1.9 5.8a3 3 0 0 1-2.6 2.2H12"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Practical Application</h3>
                  <p className="text-sm text-muted-foreground">
                    Apply what you learn with real-world exercises and case studies.
                  </p>
                </div>
              </div>
              
              <Button asChild size="lg" className="rounded-full">
                <Link to="/register">
                  Start Learning Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Learn;
