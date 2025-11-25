import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Calendar } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@careerbootcamp.ch",
      link: "mailto:info@careerbootcamp.ch",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+41 12 345 67 89",
      link: "tel:+41123456789",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Zurich, Switzerland",
      link: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 9:00-18:00 CET",
      link: null,
    },
  ];

  const faqs = [
    {
      question: "How quickly can I expect results?",
      answer: "Most clients see tangible results within 6-8 weeks, with many securing interviews within the first month of coaching. Timeline varies based on your goals and market conditions.",
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans for all our programs. We can discuss options during your free strategy call.",
    },
    {
      question: "What makes Career Bootcamp different?",
      answer: "Our coaches have actually held senior positions in Swiss companies. We combine insider knowledge with proven methodologies, not generic career advice.",
    },
    {
      question: "Can you help with work permits?",
      answer: "While we don't handle visa/permit applications, we can guide you on positioning yourself for roles that sponsor permits and navigating those conversations.",
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
              <Badge className="bg-accent-light text-accent-foreground border-accent">Contact Us</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Let's Start Your <span className="text-primary">Career Transformation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Book your free 30-minute strategy call or send us a message. We're here to help you 
                achieve your career goals in Switzerland.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 shadow-large">
                <h2 className="text-3xl font-bold mb-6">Book Your Free Strategy Call</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours to schedule your complimentary 
                  30-minute strategy session.
                </p>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+41 12 345 67 89" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="careerLevel">Current Career Level *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level / Graduate</SelectItem>
                        <SelectItem value="mid">Mid-Level Professional</SelectItem>
                        <SelectItem value="senior">Senior Professional</SelectItem>
                        <SelectItem value="manager">Manager / Director</SelectItem>
                        <SelectItem value="executive">Executive / C-Level</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interest">Program Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Which program interests you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="accelerator">Career Accelerator</SelectItem>
                        <SelectItem value="executive">Executive Coaching</SelectItem>
                        <SelectItem value="jobsearch">Job Search Mastery</SelectItem>
                        <SelectItem value="linkedin">LinkedIn Mastery</SelectItem>
                        <SelectItem value="interview">Interview Excellence</SelectItem>
                        <SelectItem value="pivot">Career Pivot Strategy</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your goals *</Label>
                    <Textarea
                      id="message"
                      placeholder="What are your main career challenges and goals right now?"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Strategy Call
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our Privacy Policy. We'll never share your information.
                  </p>
                </form>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Prefer to reach out directly? Here's how you can contact us.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6 hover-lift shadow-soft">
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">{info.title}</div>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-smooth"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-muted-foreground">{info.value}</div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-8 bg-accent-light border-accent shadow-soft">
                  <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>30-minute complimentary strategy session</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Discussion of your career goals and challenges</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Personalized program recommendations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>No obligation, no sales pressure</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Actionable insights you can use immediately</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Quick answers to common questions about our coaching programs
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-8 shadow-soft">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
