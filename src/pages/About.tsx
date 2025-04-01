
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Award, Sparkles, ArrowRight } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former fintech executive with 15 years of experience in financial inclusion initiatives.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Maya Patel",
      role: "CTO & Co-Founder",
      bio: "AI and blockchain specialist who previously led technology teams at major financial institutions.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Olivia Chen",
      role: "Chief Financial Officer",
      bio: "Expert in microfinance with experience developing financial products for underserved communities.",
      image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Jessica Williams",
      role: "Head of User Experience",
      bio: "Passionate about creating inclusive digital experiences that empower users of all backgrounds.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary text-sm font-medium mb-6">
                Our Story
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empowering <span className="text-gradient">Women</span> Through Financial Innovation
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Founded with a vision to bridge the gender gap in financial access, FemFin Connect is revolutionizing how women entrepreneurs interact with financial services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  FemFin Connect was founded in 2020 by a team of fintech and financial inclusion experts who recognized the unique challenges women entrepreneurs face when accessing financial services.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our mission is to democratize access to financial resources, education, and networks for women entrepreneurs globally through innovative technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button asChild className="rounded-full">
                    <Link to="/team">
                      Meet Our Full Team <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="glass-panel rounded-2xl p-8 bg-primary/5">
                <h3 className="text-xl font-semibold mb-6 text-center">Our Impact</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                    <p className="text-sm text-muted-foreground">Women Entrepreneurs Funded</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">$25M+</div>
                    <p className="text-sm text-muted-foreground">Loans Facilitated</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15</div>
                    <p className="text-sm text-muted-foreground">Countries Served</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <p className="text-sm text-muted-foreground">Repayment Rate</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-10 text-center">Our Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-panel rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Inclusion</h3>
                  <p className="text-muted-foreground">
                    We design our solutions to be accessible to women entrepreneurs of all backgrounds, regardless of location or technical expertise.
                  </p>
                </div>
                
                <div className="glass-panel rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We leverage cutting-edge technology like AI and blockchain to create financial solutions that truly address women's needs.
                  </p>
                </div>
                
                <div className="glass-panel rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Empowerment</h3>
                  <p className="text-muted-foreground">
                    We go beyond providing capital by offering education, mentorship, and community to help women entrepreneurs thrive.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-10 text-center">Leadership Team</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="glass-panel rounded-2xl p-6 text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/careers">
                    Join Our Team
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

export default About;
