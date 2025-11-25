import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Users, TrendingUp, Award, Clock, Target, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const stats = [
    { icon: Users, value: "250+", label: "Professionals Coached" },
    { icon: TrendingUp, value: "78%", label: "Interview Success Rate" },
    { icon: Award, value: "4.95/5", label: "Client Satisfaction" },
    { icon: Clock, value: "6+", label: "Years of Excellence" },
  ];

  const challenges = [
    {
      title: "Job Seekers & Expats",
      icon: Target,
      items: [
        "Hundreds of applications with zero responses",
        "AI filters blocking your CV from recruiters",
        "Swiss 'hidden job market' feels impossible to crack",
        "Don't know how to 'Swissify' your applications",
        "Struggling with German/French language barriers",
      ],
    },
    {
      title: "Mid-Career Professionals",
      icon: Briefcase,
      items: [
        "Stuck in the wrong role with unclear next steps",
        "Personal brand doesn't reflect your true value",
        "Networking feels awkward and ineffective",
        "Need structured guidance, not generic advice",
        "Uncertain about career pivot opportunities",
      ],
    },
    {
      title: "Executives & Leaders",
      icon: GraduationCap,
      items: [
        "Ready for C-level but unclear how to position yourself",
        "Executive search process feels opaque and frustrating",
        "Compensation negotiation creates anxiety",
        "Need coaches who've actually held C-level roles",
        "Board positioning and personal branding challenges",
      ],
    },
  ];

  const programs = [
    {
      title: "Career Accelerator",
      description: "Fast-track your career with personalized coaching and proven strategies for job seekers and professionals.",
      duration: "8-12 weeks",
      level: "All Levels",
    },
    {
      title: "Executive Coaching",
      description: "C-level positioning, executive search navigation, and compensation negotiation for senior leaders.",
      duration: "12-16 weeks",
      level: "Executive",
    },
    {
      title: "Job Search Mastery",
      description: "Master the Swiss job market with application optimization, networking strategies, and interview preparation.",
      duration: "6-8 weeks",
      level: "Entry-Mid",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-up">
                <Badge className="bg-accent-light text-accent-foreground border-accent">
                  Switzerland's Premier Career Coaching Boutique Since 2019
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Secure Your Next Great Role in <span className="text-primary">Switzerland</span>-
                  Faster, Smarter
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Join 250+ professionals who've transformed their careers with our proven Career Bootcamp Method. 
                  From job seekers to C-level executives, we deliver results through hand-selected expert coaches.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="text-lg">
                    <NavLink to="/contact">Book Free Strategy Call</NavLink>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg">
                    <NavLink to="/programs">Explore Programs</NavLink>
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-up">
                <img
                  src={heroImage}
                  alt="Professional career coaching"
                  className="rounded-2xl shadow-large w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover-lift shadow-soft">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-navy mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                The Swiss Job Market in 2025: Tougher Than Ever-But Not Impossible
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Since 2019, we've helped 250+ professionals navigate these exact challenges
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-8 hover-lift shadow-medium">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <challenge.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{challenge.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {challenge.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Preview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Programs</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tailored coaching programs designed for every stage of your career journey
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="p-8 hover-lift shadow-medium">
                  <Badge className="mb-4">{program.level}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </span>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <NavLink to="/programs">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </NavLink>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                Ready to Transform Your Career?
              </h2>
              <p className="text-lg text-primary-foreground/90">
                Book a free strategy call and discover how our proven Career Bootcamp Method can help you 
                secure your next great role in Switzerland.
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

export default Home;
