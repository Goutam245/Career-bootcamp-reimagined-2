import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Quote, Briefcase, TrendingUp, Award } from "lucide-react";
import successImage from "@/assets/success-story.jpg";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Thomas Müller",
      role: "Senior Software Engineer",
      company: "Tech Firm, Zurich",
      program: "Career Accelerator",
      result: "Landed role at Google Zurich with 35% salary increase",
      quote: "After 6 months of unsuccessful job hunting, Career Bootcamp helped me completely restructure my approach. Within 4 weeks of starting the program, I had three interviews lined up, and within 8 weeks, I accepted an offer from Google Zurich with a 35% salary increase. The Swiss market expertise and interview coaching were game-changers.",
      timeframe: "8 weeks",
      improvement: "+35% salary",
    },
    {
      name: "Maria Rodriguez",
      role: "Marketing Director",
      company: "Pharmaceutical Company, Basel",
      program: "Executive Coaching",
      result: "Promoted to VP Marketing within 6 months",
      quote: "I was stuck at the Director level for years and couldn't figure out how to break through to the VP level. The executive coaching program helped me completely reposition my personal brand, navigate internal politics, and develop the strategic positioning needed for C-level roles. Six months later, I was promoted to VP Marketing.",
      timeframe: "12 weeks",
      improvement: "VP Promotion",
    },
    {
      name: "James Chen",
      role: "Financial Analyst",
      company: "Investment Bank, Geneva",
      program: "Job Search Mastery",
      result: "Secured role at UBS after 200+ failed applications",
      quote: "I had sent out over 200 applications with zero responses. Career Bootcamp helped me understand why—my CV wasn't 'Swissified' and I was targeting the wrong opportunities. After completely revamping my approach with their guidance, I got my first interview within a week and landed a role at UBS within 6 weeks.",
      timeframe: "6 weeks",
      improvement: "200+ to 1 interview ratio improved",
    },
    {
      name: "Sophie Laurent",
      role: "HR Manager",
      company: "Luxury Brand, Geneva",
      program: "Career Pivot Strategy",
      result: "Successfully transitioned from tech to luxury sector",
      quote: "I wanted to transition from tech HR to luxury brand management but didn't know where to start. The Career Pivot program helped me identify transferable skills, reposition my brand, and navigate the luxury sector. I'm now an HR Manager at a prestigious luxury brand, doing work I'm truly passionate about.",
      timeframe: "10 weeks",
      improvement: "Industry switch successful",
    },
    {
      name: "Andreas Weber",
      role: "Chief Financial Officer",
      company: "Manufacturing Company, Zug",
      program: "Executive Coaching",
      result: "Negotiated CHF 50K higher base + equity package",
      quote: "The executive coaching wasn't just about finding a role—it was about positioning myself correctly and negotiating the right package. My coach helped me navigate executive search firms, prepare for board-level conversations, and ultimately negotiate a package that was CHF 50K higher than the initial offer, plus equity.",
      timeframe: "16 weeks",
      improvement: "CHF 50K+ package improvement",
    },
    {
      name: "Emma Johnson",
      role: "Product Manager",
      company: "Startup, Zurich",
      program: "LinkedIn Mastery",
      result: "10x LinkedIn engagement, recruited by 3 companies",
      quote: "My LinkedIn profile was basically a copy-paste of my CV. After the LinkedIn Mastery program, I saw a 10x increase in profile views and engagement. Within two months, I was approached by three different companies, and I ended up accepting a Product Manager role at an exciting startup with amazing growth potential.",
      timeframe: "4 weeks",
      improvement: "10x profile engagement",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "78%", label: "Interview Success Rate" },
    { icon: Award, value: "4.95/5", label: "Average Client Rating" },
    { icon: Briefcase, value: "250+", label: "Successful Career Transformations" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <Badge className="bg-accent-light text-accent-foreground border-accent">Success Stories</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Real Results from <span className="text-primary">Real Professionals</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Join 250+ professionals who've transformed their careers with our proven Career Bootcamp Method. 
                Here are their stories.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-8 text-center shadow-soft">
                  <div className="flex justify-center mb-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-navy mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Success Story */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Badge className="mb-8">Featured Success Story</Badge>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={successImage}
                  alt="Success story"
                  className="rounded-2xl shadow-large w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <Quote className="h-12 w-12 text-primary" />
                <p className="text-xl text-muted-foreground italic">
                  "{testimonials[0].quote}"
                </p>
                <div>
                  <div className="font-bold text-lg">{testimonials[0].name}</div>
                  <div className="text-muted-foreground">{testimonials[0].role}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[0].company}</div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge>{testimonials[0].program}</Badge>
                  <Badge variant="outline">{testimonials[0].timeframe}</Badge>
                  <Badge className="bg-accent text-accent-foreground">{testimonials[0].improvement}</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">More Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every success story is unique, but they all share one thing: our proven Career Bootcamp Method
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.slice(1).map((testimonial, index) => (
                <Card key={index} className="p-8 hover-lift shadow-medium">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="space-y-3">
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <div className="text-sm font-semibold text-primary mb-2">Result:</div>
                      <div className="text-sm text-muted-foreground">{testimonial.result}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{testimonial.program}</Badge>
                      <Badge variant="outline">{testimonial.timeframe}</Badge>
                    </div>
                  </div>
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
                Ready to Write Your Success Story?
              </h2>
              <p className="text-lg text-primary-foreground/90">
                Join the 250+ professionals who've transformed their careers with Career Bootcamp. 
                Book your free strategy call today.
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

export default SuccessStories;
