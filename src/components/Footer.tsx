import { Mail, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">
                Tanushree Joshi<span className="text-primary">.</span>
              </h3>
              <p className="text-background/60 text-sm">
                Digital Marketing Professional
              </p>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-background/60 mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Indore, Madhya Pradesh</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:tanushree@example.com"
                className="hover:text-background transition-colors"
              >
                tanushree@example.com
              </a>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8">
            <p className="text-center text-sm text-background/40">
              © {new Date().getFullYear()} Tanushree Joshi. All rights reserved.
              <br />
              <span className="text-background/30">
                Helping businesses achieve online success through strategic
                digital marketing
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
