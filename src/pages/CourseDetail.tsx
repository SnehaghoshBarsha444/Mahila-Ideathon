
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { 
  BookOpen, 
  Clock, 
  Award, 
  CheckCircle, 
  ArrowLeft,
  PlayCircle,
  FileText,
  MessageSquare
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Module {
  id: number;
  title: string;
  duration: string;
  lessons: Lesson[];
  completed?: boolean;
}

interface Lesson {
  id: number;
  title: string;
  type: "video" | "article" | "quiz";
  duration: string;
  completed?: boolean;
}

interface CourseData {
  [key: string]: {
    id: string;
    title: string;
    description: string;
    level: string;
    duration: string;
    instructor: string;
    rating: number;
    enrolledStudents: number;
    modules: Module[];
  }
}

// Sample course data
const courseData: CourseData = {
  "financial-fundamentals": {
    id: "financial-fundamentals",
    title: "Financial Fundamentals",
    description: "Learn the basics of business finance, accounting, and financial statements.",
    level: "Beginner",
    duration: "4 weeks",
    instructor: "Sarah Johnson",
    rating: 4.8,
    enrolledStudents: 2453,
    modules: [
      {
        id: 1,
        title: "Introduction to Business Finance",
        duration: "45 min",
        completed: true,
        lessons: [
          { id: 101, title: "What is Business Finance?", type: "video", duration: "15 min", completed: true },
          { id: 102, title: "Key Financial Concepts", type: "article", duration: "20 min", completed: true },
          { id: 103, title: "Financial Goals & Strategy", type: "video", duration: "10 min", completed: false }
        ]
      },
      {
        id: 2,
        title: "Understanding Financial Statements",
        duration: "60 min",
        completed: false,
        lessons: [
          { id: 201, title: "Balance Sheet Basics", type: "video", duration: "20 min", completed: false },
          { id: 202, title: "Income Statement Analysis", type: "video", duration: "15 min", completed: false },
          { id: 203, title: "Cash Flow Statement", type: "article", duration: "15 min", completed: false },
          { id: 204, title: "Module Assessment", type: "quiz", duration: "10 min", completed: false }
        ]
      },
      {
        id: 3,
        title: "Financial Ratios & Analysis",
        duration: "55 min",
        completed: false,
        lessons: [
          { id: 301, title: "Profitability Ratios", type: "video", duration: "15 min", completed: false },
          { id: 302, title: "Liquidity Ratios", type: "video", duration: "15 min", completed: false },
          { id: 303, title: "Leverage Ratios", type: "article", duration: "15 min", completed: false },
          { id: 304, title: "Module Assessment", type: "quiz", duration: "10 min", completed: false }
        ]
      }
    ]
  },
  "funding-strategies": {
    id: "funding-strategies",
    title: "Funding Strategies",
    description: "Explore different funding options and how to choose the right one for your business.",
    level: "Intermediate",
    duration: "3 weeks",
    instructor: "Michael Chen",
    rating: 4.6,
    enrolledStudents: 1892,
    modules: [
      {
        id: 1,
        title: "Understanding Funding Options",
        duration: "50 min",
        lessons: [
          { id: 101, title: "Types of Business Funding", type: "video", duration: "20 min" },
          { id: 102, title: "Equity vs Debt Financing", type: "article", duration: "15 min" },
          { id: 103, title: "Module Assessment", type: "quiz", duration: "15 min" }
        ]
      },
      {
        id: 2,
        title: "Venture Capital & Angel Investors",
        duration: "65 min",
        lessons: [
          { id: 201, title: "Working with VCs", type: "video", duration: "25 min" },
          { id: 202, title: "Pitching to Angel Investors", type: "video", duration: "20 min" },
          { id: 203, title: "Term Sheets Explained", type: "article", duration: "20 min" }
        ]
      }
    ]
  }
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const { toast } = useToast();
  const [currentLessonId, setCurrentLessonId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("content");
  
  // Find the course in our data
  const course = courseData[courseId as keyof typeof courseData];
  
  // If course not found
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <p className="mb-6">Sorry, the course you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/learn">Back to Courses</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Calculate progress
  const totalLessons = course.modules.reduce((total, module) => 
    total + module.lessons.length, 0);
  
  const completedLessons = course.modules.reduce((total, module) => 
    total + module.lessons.filter(lesson => lesson.completed).length, 0);
  
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  // Handle starting or continuing the course
  const handleStartCourse = () => {
    // Find the first incomplete lesson
    for (const module of course.modules) {
      for (const lesson of module.lessons) {
        if (!lesson.completed) {
          setCurrentLessonId(lesson.id);
          setActiveTab("content");
          toast({
            title: "Lesson loaded",
            description: `Now viewing: ${lesson.title}`,
          });
          return;
        }
      }
    }
    
    // If all lessons are completed
    setCurrentLessonId(course.modules[0].lessons[0].id);
    toast({
      title: "Course completed!",
      description: "You've already completed all lessons. Starting from the beginning.",
    });
  };

  // Find current lesson details
  const getCurrentLesson = () => {
    if (!currentLessonId) return null;
    
    for (const module of course.modules) {
      const lesson = module.lessons.find(l => l.id === currentLessonId);
      if (lesson) {
        return {
          lesson,
          moduleTitle: module.title
        };
      }
    }
    return null;
  };

  const currentLessonInfo = getCurrentLesson();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back navigation */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link to="/learn" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Link>
            </Button>
          </div>
          
          {/* Course header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium mb-4">
                {course.level}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{course.modules.length} Modules</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Certificate on completion</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button onClick={handleStartCourse} size="lg">
                  {completedLessons > 0 ? "Continue Course" : "Start Course"}
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Course Progress</CardTitle>
                  <CardDescription>Track your learning journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2 text-sm">
                        <span>{completedLessons} of {totalLessons} lessons completed</span>
                        <span>{progressPercentage}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary"
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Instructor:</span>
                        <span>{course.instructor}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Students:</span>
                        <span>{course.enrolledStudents.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Rating:</span>
                        <span>{course.rating}/5</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Course content tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full md:w-auto mb-8">
              <TabsTrigger value="content">Course Content</TabsTrigger>
              <TabsTrigger value="lesson">{currentLessonId ? "Current Lesson" : "Lesson"}</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="space-y-6">
              <div className="space-y-6">
                {course.modules.map((module, index) => (
                  <Card key={module.id} className={module.completed ? "border-primary/20" : ""}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <span className="mr-2">Module {index + 1}:</span> {module.title}
                          {module.completed && <CheckCircle className="h-4 w-4 ml-2 text-primary" />}
                        </CardTitle>
                        <span className="text-sm text-muted-foreground">{module.duration}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {module.lessons.map((lesson) => (
                          <li key={lesson.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                            <button 
                              onClick={() => {
                                setCurrentLessonId(lesson.id);
                                setActiveTab("lesson");
                              }}
                              className="flex items-center text-left hover:text-primary transition-colors duration-200"
                            >
                              {lesson.type === "video" && <PlayCircle className="h-4 w-4 mr-2 flex-shrink-0" />}
                              {lesson.type === "article" && <FileText className="h-4 w-4 mr-2 flex-shrink-0" />}
                              {lesson.type === "quiz" && <MessageSquare className="h-4 w-4 mr-2 flex-shrink-0" />}
                              <span>{lesson.title}</span>
                              {lesson.completed && <CheckCircle className="h-4 w-4 ml-2 text-primary" />}
                            </button>
                            <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="lesson">
              {currentLessonInfo ? (
                <div>
                  <div className="mb-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      {currentLessonInfo.moduleTitle}
                    </div>
                    <h2 className="text-2xl font-bold">{currentLessonInfo.lesson.title}</h2>
                  </div>
                  
                  <div className="mb-8">
                    {currentLessonInfo.lesson.type === "video" && (
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                        <div className="text-center p-8">
                          <PlayCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground/70" />
                          <p className="text-muted-foreground">This is a placeholder for the video content.</p>
                          <p className="text-sm text-muted-foreground/70 mt-2">In a real application, a video player would be displayed here.</p>
                        </div>
                      </div>
                    )}
                    
                    {currentLessonInfo.lesson.type === "article" && (
                      <div className="prose prose-lg max-w-none">
                        <p>This is placeholder content for the article. In a real application, this would contain the full article text with proper formatting, images, and interactive elements.</p>
                        <p>The article would typically include:</p>
                        <ul>
                          <li>Detailed explanations of financial concepts</li>
                          <li>Real-world examples and case studies</li>
                          <li>Charts, tables, and diagrams to illustrate key points</li>
                          <li>Key takeaways and summary sections</li>
                        </ul>
                        <p>Additional content would be provided to ensure the article offers comprehensive coverage of the topic.</p>
                      </div>
                    )}
                    
                    {currentLessonInfo.lesson.type === "quiz" && (
                      <div className="bg-muted/30 rounded-lg p-8 text-center">
                        <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground/70" />
                        <h3 className="text-xl font-medium mb-2">Module Assessment Quiz</h3>
                        <p className="text-muted-foreground mb-6">
                          Test your knowledge of the concepts covered in this module.
                        </p>
                        <Button>Start Quiz</Button>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="outline">Previous Lesson</Button>
                    <Button>Mark as Complete & Continue</Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-4">No lesson selected</h3>
                  <p className="text-muted-foreground mb-6">
                    Select a lesson from the Course Content tab to start learning.
                  </p>
                  <Button onClick={() => setActiveTab("content")}>
                    View Course Content
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="discussion">
              <Card>
                <CardHeader>
                  <CardTitle>Course Discussion</CardTitle>
                  <CardDescription>
                    Interact with fellow students and instructors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                    <h3 className="text-xl font-medium mb-2">Discussion Forum</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      This is a placeholder for the course discussion forum. 
                      In a real application, this would contain threaded discussions, 
                      Q&A with instructors, and student interactions.
                    </p>
                    <Button variant="outline">Sign in to Participate</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
