import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Award, TrendingUp, Heart, Globe } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure our success by your success. Every strategy is designed to deliver tangible career outcomes.",
    },
    {
      icon: Users,
      title: "Expert Coaches",
      description: "Hand-selected professionals who've held senior roles in Swiss companies and understand the market intimately.",
    },
    {
      icon: Heart,
      title: "Personalized Approach",
      description: "No cookie-cutter solutions. Every coaching journey is tailored to your unique goals and challenges.",
    },
    {
      icon: Globe,
      title: "Swiss Market Expertise",
      description: "Deep understanding of Switzerland's unique job market, cultural nuances, and hidden opportunities.",
    },
    {
      icon: Award,
      title: "Proven Method",
      description: "Our Career Bootcamp Method has helped 250+ professionals achieve their career goals since 2019.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We stay ahead of market trends, ensuring our clients benefit from the latest strategies and insights.",
    },
  ];

  const team = [
    {
      name: "Dr. Alexandra Weber",
      role: "Founder & Lead Coach",
      expertise: "Executive Coaching",
      description: "Former C-level executive with 15+ years experience in Swiss corporations.",
    },
    {
      name: "Michael Schmidt",
      role: "Senior Career Coach",
      expertise: "Career Transitions",
      description: "Specialized in helping professionals navigate mid-career pivots and advancement.",
    },
    {
      name: "Sarah Chen",
      role: "Job Search Specialist",
      expertise: "Market Entry",
      description: "Expert in helping expats and job seekers crack the Swiss job market.",
    },
  ];

  const milestones = [
    { year: "2019", event: "Career Bootcamp founded in Zurich" },
    { year: "2020", event: "Reached 50 successful client transformations" },
    { year: "2021", event: "Expanded to serve C-level executives" },
    { year: "2022", event: "Achieved 78% interview success rate" },
    { year: "2023", event: "Celebrated 200+ professionals coached" },
    { year: "2024", event: "Launched specialized executive programs" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <Badge className="bg-accent-light text-accent-foreground border-accent">About Us</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Transforming Careers in <span className="text-primary">Switzerland</span> Since 2019
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                We're not just career coaches—we're your strategic partners in navigating Switzerland's 
                unique professional landscape and securing roles that align with your ambitions.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
                <p className="text-muted-foreground">
                  Career Bootcamp was born from a simple observation: Switzerland's job market is exceptional, 
                  but navigating it successfully requires insider knowledge, strategic positioning, and 
                  expert guidance that generic career advice simply can't provide.
                </p>
                <p className="text-muted-foreground">
                  Founded in 2019 by Dr. Alexandra Weber, a former C-level executive who experienced firsthand 
                  the challenges of career transitions in Switzerland, we've built a boutique coaching practice 
                  that combines Swiss market expertise with proven career advancement strategies.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to have helped 250+ professionals—from job seekers entering the Swiss 
                  market to executives reaching for C-suite positions—transform their careers and secure 
                  roles that truly align with their goals and values.
                </p>
              </div>
              <div>
                <img
                  src={aboutTeam}
                  alt="Career Bootcamp team"
                  className="rounded-2xl shadow-large w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-8 hover-lift shadow-medium">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Meet Our Expert Coaches</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Hand-selected professionals with proven track records in Swiss corporations
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="p-8 text-center hover-lift shadow-medium">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <Badge className="mb-3">{member.expertise}</Badge>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Key milestones in building Switzerland's premier career coaching boutique
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-24">
                      <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                    </div>
                    <Card className="flex-1 p-6 shadow-soft">
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </Card>
                  </div>
                ))}
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
