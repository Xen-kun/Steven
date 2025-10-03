import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Title with underline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <span className="block w-20 h-0.5 bg-black mx-auto mb-8"></span>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
        </div>
        
        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="transition-transform duration-200 hover:scale-105 hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary transition-transform duration-200 group-hover:scale-110" />
              <h3 className="text-xl mb-2">Email Me</h3>
              <p className="text-muted-foreground mb-4">
                Drop me a line for project inquiries or just to say hello.
              </p>
              <Button asChild variant="outline" className="transition-transform duration-200 hover:scale-105">
                <a 
                  href="mailto:stevedaleja2001@gmail.com"
                  rel="noopener noreferrer"
                  className="hover:bg-black hover:text-white  
                          transform hover:-translate-y-1 hover:shadow-lg 
                          transition duration-200 ease-in-out"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  stevedaleja2001@gmail.com
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="transition-transform duration-200 hover:scale-105 hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <Github className="w-12 h-12 mx-auto mb-4 text-primary transition-transform duration-200 group-hover:scale-110" />
              <h3 className="text-xl mb-2">Collaboration</h3>
              <p className="text-muted-foreground mb-4">
                Check out my code and let's build something amazing together.
              </p>
              <Button asChild variant="outline" className="transition-transform duration-200 hover:scale-105">
                <a 
                  href="https://github.com/Xen-kun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:bg-black hover:text-white  
                          transform hover:-translate-y-1 hover:shadow-lg 
                          transition duration-200 ease-in-out"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4">
          {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
            <div
              key={i}
              className="p-3 border rounded-lg transition-transform duration-200 hover:scale-110 hover:bg-black hover:text-white"
            >
              <Icon className="w-5 h-5" />
            </div>
          ))}
        </div>

        {/* Availability card - dark gray version */}
<div className="mt-12 max-w-[600px] mx-auto bg-gray-800 rounded-xl p-6 text-center shadow-md">
  <p className="text-gray-100 mb-4">
    Currently open to new opportunities and exciting projects. <br />
    Let&apos;s create something amazing together!
  </p>
  <div className="flex justify-center gap-4">
    <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-300">
      Available for hire
    </span>
    <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300">
      Remote friendly
    </span>
  </div>
</div>


      </div>
    </section>
  );
}
