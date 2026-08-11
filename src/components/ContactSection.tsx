import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "./Reveal";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "cherylbiju26@gmail.com",
    href: "mailto:cherylbiju26@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/cheryl-biju",
    href: "https://www.linkedin.com/in/cheryl-biju/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/cbm2001",
    href: "https://github.com/cbm2001",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-background overflow-hidden">
      <div className="absolute -right-24 top-0 w-[26rem] h-[26rem] rounded-full blur-3xl bg-accent/10 animate-float pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Let's create</span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mt-5 leading-[1.05]">
              Something <span className="italic text-gradient">meaningful</span> together
            </h2>
            <p className="text-muted-foreground mt-5 font-light">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <Reveal className="space-y-8">
              <div>
                <h3 className="font-display text-3xl text-foreground mb-4">
                  Contact Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Feel free to reach out through any of these channels. I'm always 
                  open to discussing new projects, creative ideas, or opportunities 
                  to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-x-1 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                      <link.icon
                        size={22}
                        className="text-accent group-hover:text-accent-foreground transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium text-foreground">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal delay={120} className="p-8 md:p-10 rounded-[2.25rem] bg-card-gradient border border-border/70 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
