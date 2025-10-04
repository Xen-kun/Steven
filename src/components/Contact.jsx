import TitleComponent from "./TitleUnderline";
import { Mail, MessageSquare, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-10">
      <div className="container mx-auto px-6 md:px-10 text-center">

        <TitleComponent> Let's Connect </TitleComponent>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          I'm always interested in new opportunities and collaborations.  
          Feel free to reach out if you'd like to work together!
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Email Card */}
          <div className="group p-6 text-center border border-gray-200 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="transition-transform duration-300 group-hover:scale-110">
              <Mail className="w-10 h-10 mx-auto mb-3 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Me</h3>
            <p className="text-gray-600 text-sm mb-4">
              Drop me a line for project inquiries or just to say hello.
            </p>
            <a
              href="mailto:stevedaleja2001@gmail.com"
              className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium hover:bg-black hover:text-white transition-all duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              stevedaleja2001@gmail.com
            </a>
          </div>

          {/* Let's Chat Card */}
          <div className="group p-6 text-center border border-gray-200 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="transition-transform duration-300 group-hover:scale-110">
              <MessageSquare className="w-10 h-10 mx-auto mb-3 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Let's Chat</h3>
            <p className="text-gray-600 text-sm mb-4">
              Schedule a call to discuss your project or potential collaboration.
            </p>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium hover:bg-black hover:text-white transition-all duration-200"
            >
              Schedule Call
            </a>
          </div>

          {/* Collaboration Card */}
          <div className="group p-6 text-center border border-gray-200 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="transition-transform duration-300 group-hover:scale-110">
              <Github className="w-10 h-10 mx-auto mb-3 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600 text-sm mb-4">
              Check out my code and let's build something amazing together.
            </p>
            <a
              href="https://github.com/Xen-kun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium hover:bg-black hover:text-white transition-all duration-200"
            >
              <Github className="w-4 h-4 mr-2" />
              View GitHub
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-8">
          {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
            <div
              key={i}
              className="p-3 border border-gray-200 rounded-lg transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:bg-black hover:text-white cursor-pointer"
            >
              <Icon className="w-5 h-5" />
            </div>
          ))}
        </div>

        {/* Availability card */}
        <div className="flex justify-center">
          <div className="border border-gray-200 rounded-xl p-5 shadow-md max-w-[480px] text-center">
            <p className="text-gray-700 text-sm mb-4">
              Currently open to new opportunities and exciting projects.  
              Let&apos;s create something amazing together!
            </p>
            <div className="flex justify-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                Available for hire
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                Remote friendly
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
