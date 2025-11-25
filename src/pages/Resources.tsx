import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Video, Download, BookOpen, Search, Calendar } from "lucide-react";

const Resources = () => {
  const guides = [
    {
      title: "The Complete Guide to Swiss CV Formatting",
      category: "Application Materials",
      type: "PDF Guide",
      duration: "15 min read",
      description: "Learn exactly how to format your CV for the Swiss market, including cultural nuances and must-have sections.",
      icon: FileText,
    },
    {
      title: "Mastering LinkedIn for Swiss Job Search",
      category: "Personal Branding",
      type: "Video Course",
      duration: "45 min",
      description: "Transform your LinkedIn profile into a powerful job search tool optimized for Swiss recruiters and hiring managers.",
      icon: Video,
    },
    {
      title: "50+ Swiss Interview Questions & Answers",
      category: "Interview Prep",
      type: "PDF Guide",
      duration: "20 min read",
      description: "The most common interview questions in Swiss companies with proven answer frameworks and examples.",
      icon: FileText,
    },
    {
      title: "Salary Negotiation in Switzerland",
      category: "Compensation",
      type: "Video Workshop",
      duration: "35 min",
      description: "Learn how to research, discuss, and negotiate compensation packages in the Swiss market confidently.",
      icon: Video,
    },
    {
      title: "The Hidden Swiss Job Market Guide",
      category: "Job Search Strategy",
      type: "eBook",
      duration: "30 min read",
      description: "Discover how to access the 70% of Swiss jobs that are never publicly advertised and build relationships with key decision-makers.",
      icon: BookOpen,
    },
    {
      title: "ATS-Optimized CV Template Pack",
      category: "Templates",
      type: "Download",
      duration: "Instant",
      description: "5 professionally designed CV templates optimized for Applicant Tracking Systems and Swiss employers.",
      icon: Download,
    },
  ];

  const webinars = [
    {
      title: "Breaking Into the Swiss Job Market as an Expat",
      date: "March 15, 2025",
      time: "18:00 CET",
      spots: "25 spots remaining",
    },
    {
      title: "C-Level Career Positioning Masterclass",
      date: "March 22, 2025",
      time: "19:00 CET",
      spots: "15 spots remaining",
    },
    {
      title: "LinkedIn Profile Optimization Workshop",
      date: "March 29, 2025",
      time: "18:30 CET",
      spots: "30 spots remaining",
    },
  ];

  const blogs = [
    {
      title: "5 Mistakes That Are Killing Your Swiss Job Search",
      category: "Job Search",
      date: "Feb 28, 2025",
      readTime: "8 min read",
    },
    {
      title: "How to Network Effectively in Switzerland's Corporate Culture",
      category: "Networking",
      date: "Feb 25, 2025",
      readTime: "12 min read",
    },
    {
      title: "The Truth About Executive Search Firms in Switzerland",
      category: "Executive Career",
      date: "Feb 22, 2025",
      readTime: "10 min read",
    },
    {
      title: "Career Pivots: When and How to Change Industries in Switzerland",
      category: "Career Strategy",
      date: "Feb 18, 2025",
      readTime: "15 min read",
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
              <Badge className="bg-accent-light text-accent-foreground border-accent">Resources</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Free <span className="text-primary">Career Resources</span> for Swiss Market Success
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Access expert guides, templates, webinars, and insights to accelerate your career growth in Switzerland.
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search resources..."
                      className="pl-10"
                    />
                  </div>
                  <Button>Search</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Guides Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Free Guides & Resources</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Download our expert guides and tools to enhance your Swiss job search
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <Card key={index} className="p-8 hover-lift shadow-medium">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <guide.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline">{guide.type}</Badge>
                  </div>
                  <Badge className="mb-3">{guide.category}</Badge>
                  <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                  <div className="text-sm text-muted-foreground mb-6">{guide.duration}</div>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Free
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Upcoming Webinars</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join our live workshops and learn from expert career coaches
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {webinars.map((webinar, index) => (
                <Card key={index} className="p-8 hover-lift shadow-medium">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{webinar.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <div>📅 {webinar.date}</div>
                    <div>🕐 {webinar.time}</div>
                    <div className="text-primary font-medium">{webinar.spots}</div>
                  </div>
                  <Button className="w-full">Register Free</Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Latest Career Insights</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Expert advice, strategies, and insights for navigating the Swiss job market
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {blogs.map((blog, index) => (
                <Card key={index} className="p-8 hover-lift shadow-medium">
                  <Badge className="mb-4">{blog.category}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <Button variant="outline">Read More</Button>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">View All Articles</Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-12 max-w-3xl mx-auto text-center shadow-large">
              <h2 className="text-3xl font-bold mb-4">Get Weekly Career Tips</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter and receive actionable career advice, Swiss job market insights, 
                and exclusive resources delivered to your inbox every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Join 1,000+ professionals already receiving our insights
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
