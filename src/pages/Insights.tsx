
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, PieChart, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const Insights = () => {
  const data = [
    { name: 'Jan', value: 40 },
    { name: 'Feb', value: 30 },
    { name: 'Mar', value: 45 },
    { name: 'Apr', value: 50 },
    { name: 'May', value: 65 },
    { name: 'Jun', value: 60 },
  ];
  
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe', '#00C49F'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary text-sm font-medium mb-6">
                Financial Insights
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Data-Driven <span className="text-gradient">Financial</span> Decisions
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Gain valuable insights into your financial health and growth opportunities through our advanced analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-6">Understand Your Business Performance</h2>
                <p className="text-muted-foreground mb-6">
                  Our analytics platform helps you visualize your financial data, track performance metrics, and identify growth opportunities through easy-to-understand dashboards.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="glass-panel rounded-2xl p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Cash Flow Analytics</h3>
                    <p className="text-sm text-muted-foreground">
                      Track your cash flow patterns and predict future financial needs.
                    </p>
                  </div>
                  
                  <div className="glass-panel rounded-2xl p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <PieChart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Expense Breakdown</h3>
                    <p className="text-sm text-muted-foreground">
                      Visualize where your money goes and identify cost-saving opportunities.
                    </p>
                  </div>
                </div>
                
                <Button asChild className="rounded-full">
                  <Link to="/register">
                    Access Full Analytics <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="glass-panel rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Revenue Growth Trend</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                          border: 'none', 
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }} 
                        labelStyle={{ fontWeight: 'bold' }}
                      />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Key Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="glass-panel rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Business Health Score</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get a comprehensive assessment of your business's financial health with actionable insights.
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Score</span>
                    <span className="font-medium">85/100</span>
                  </div>
                </div>
                
                <div className="glass-panel rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Growth Projections</h3>
                  <p className="text-muted-foreground text-sm">
                    AI-powered forecasting to help you understand your business's growth trajectory and potential.
                  </p>
                </div>
                
                <div className="glass-panel rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Industry Benchmarking</h3>
                  <p className="text-muted-foreground text-sm">
                    Compare your performance against industry standards and peers to identify strengths and opportunities.
                  </p>
                </div>
              </div>
              
              <div className="glass-panel rounded-2xl p-8 bg-primary/5 text-center">
                <h3 className="text-xl font-bold mb-4">Make Data-Driven Financial Decisions</h3>
                <p className="text-muted-foreground mb-6">
                  Join our platform to access powerful analytics tools that help you understand and improve your business finances.
                </p>
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/register">
                    Start Your Free Analysis <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Insights;
