import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Title with underline (consistent style) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <span className="block w-20 h-0.5 bg-black mx-auto mb-8"></span>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl mb-2">Email Me</h3>
              <p className="text-muted-foreground mb-4">
                Drop me a line for project inquiries or just to say hello.
              </p>
              <Button asChild variant="outline">
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
          
          <Card>
            <CardContent className="p-8 text-center">
              <Github className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl mb-2">Collaboration</h3>
              <p className="text-muted-foreground mb-4">
                Check out my code and let's build something amazing together.
              </p>
              <Button asChild variant="outline">
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
        
        <div className="text-center">
          <h3 className="text-xl mb-6">Follow Me</h3>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
