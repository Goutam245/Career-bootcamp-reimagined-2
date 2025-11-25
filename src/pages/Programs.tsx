import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Check, Clock, Users, Target, Briefcase, GraduationCap, Rocket, Star } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Career Accelerator",
      icon: Rocket,
      level: "All Levels",
      duration: "8-12 weeks",
      price: "CHF 2,500",
      description: "Fast-track your career with personalized coaching and proven strategies for job seekers and professionals.",
      features: [
        "Personalized career assessment and strategy",
        "CV and LinkedIn profile optimization",
        "Swiss job market navigation guidance",
        "Application materials review and refinement",
        "Interview preparation and mock interviews",
        "Networking strategy development",
        "Weekly 1-on-1 coaching sessions",
        "Email support between sessions",
      ],
      ideal: ["Job seekers entering Swiss market", "Professionals seeking advancement", "Career changers and pivoters"],
    },
    {
      title: "Executive Coaching",
      icon: GraduationCap,
      level: "Executive",
      duration: "12-16 weeks",
      price: "CHF 5,000",
      description: "C-level positioning, executive search navigation, and compensation negotiation for senior leaders.",
      features: [
        "Executive brand positioning strategy",
        "C-suite application and approach development",
        "Executive search firm engagement guidance",
        "Board positioning and networking",
        "Compensation and package negotiation",
        "Leadership assessment and development",
        "Bi-weekly intensive coaching sessions",
        "Unlimited email and phone support",
      ],
      ideal: ["Senior managers ready for C-level", "Current executives seeking transitions", "Board position candidates"],
      popular: true,
    },
    {
      title: "Job Search Mastery",
      icon: Target,
      level: "Entry-Mid Level",
      duration: "6-8 weeks",
      price: "CHF 1,800",
      description: "Master the Swiss job market with application optimization, networking strategies, and interview preparation.",
      features: [
        "Swiss job market overview and insights",
        "Application materials 'Swissification'",
        "ATS-optimized CV development",
        "LinkedIn profile enhancement",
        "Interview technique training",
        "Salary negotiation preparation",
        "Bi-weekly coaching sessions",
        "Resource library access",
      ],
      ideal: ["Recent graduates", "Expats entering Swiss market", "Early career professionals"],
    },
    {
      title: "LinkedIn Mastery",
      icon: Users,
      level: "All Levels",
      duration: "4 weeks",
      price: "CHF 900",
      description: "Transform your LinkedIn presence into a powerful career advancement tool.",
      features: [
        "Profile audit and optimization",
        "Personal branding strategy",
        "Content creation guidance",
        "Networking outreach templates",
        "Engagement strategy development",
        "Recruiter visibility tactics",
        "4 weekly coaching sessions",
        "Profile review and updates",
      ],
      ideal: ["Professionals building personal brand", "Job seekers increasing visibility", "Networkers expanding connections"],
    },
    {
      title: "Interview Excellence",
      icon: Star,
      level: "All Levels",
      duration: "3 weeks",
      price: "CHF 750",
      description: "Master interview techniques and confidently navigate Swiss corporate interview processes.",
      features: [
        "Interview strategy development",
        "Swiss cultural communication guidance",
        "Behavioral interview preparation",
        "Case study and technical prep",
        "Mock interviews with feedback",
        "Salary negotiation tactics",
        "3 intensive coaching sessions",
        "Video recording analysis",
      ],
      ideal: ["Candidates with upcoming interviews", "Professionals wanting interview confidence", "Anyone struggling with interview anxiety"],
    },
    {
      title: "Career Pivot Strategy",
      icon: Briefcase,
      level: "Mid-Senior Level",
      duration: "10 weeks",
      price: "CHF 3,200",
      description: "Navigate career transitions and industry changes with strategic planning and positioning.",
      features: [
        "Career transition assessment",
        "Industry and role mapping",
        "Transferable skills identification",
        "Personal brand repositioning",
        "Targeted job search strategy",
        "Network leverage planning",
        "Weekly strategic coaching",
        "Industry insider connections",
      ],
      ideal: ["Mid-career professionals changing industries", "Managers exploring new sectors", "Professionals seeking meaningful transitions"],
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Free Strategy Call",
      description: "We discuss your goals, challenges, and determine the best program fit for your needs.",
    },
    {
      step: "2",
      title: "Program Enrollment",
      description: "Complete enrollment and receive your personalized coaching plan and materials.",
    },
    {
      step: "3",
      title: "Coaching Journey",
      description: "Work closely with your expert coach through structured sessions and ongoing support.",
    },
    {
      step: "4",
      title: "Results & Success",
      description: "Achieve your career goals with our proven methodology and continued guidance.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <Badge className="bg-accent-light text-accent-foreground border-accent">Our Programs</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Tailored <span className="text-primary">Career Coaching</span> Programs
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                From job seekers to C-level executives, we offer specialized programs designed to deliver 
                real results in Switzerland's unique job market.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card 
                  key={index} 
                  className={`p-8 hover-lift shadow-medium relative ${
                    program.popular ? 'border-2 border-primary' : ''
                  }`}
                >
                  {program.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline">{program.level}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">{program.price}</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-sm">What's Included:</h4>
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-2">Ideal For:</h4>
                    <ul className="space-y-1">
                      {program.ideal.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full" asChild>
                    <NavLink to="/contact">Get Started</NavLink>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our proven process to transform your career journey
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <Card key={index} className="p-6 shadow-soft relative">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-border"></div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Not Sure Which Program Is Right for You?
              </h2>
              <p className="text-lg text-primary-foreground/90">
                Book a free strategy call and we'll help you choose the perfect program to achieve your career goals.
              </p>
              <Button size="lg" variant="secondary" asChild className="text-lg">
                <NavLink to="/contact">Book Free Strategy Call</NavLink>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
