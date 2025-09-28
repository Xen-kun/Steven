import TitleComponent from "./TitleUnderline"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">

        <TitleComponent> About Me </TitleComponent>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div>
            <h3 className="text-xl font-semibold mb-4">Passionate Developer</h3>
            <p className="text-gray-600 mb-5">
              With over <span className="font-semibold">2 over years of experience</span> in web development during my college years, 
              I specialize in creating modern, responsive applications using the latest technologies. 
              I believe in writing clean, maintainable code and following best practices.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me exploring new frameworks and trends, contributing to open source projects, 
             collaborating or sharing knowledge with the developer community.
            </p>
          </div>


          <div className="space-y-4 md:px-12">
            <div>
              <h2 className="text-xl font-semibold mb-4">What I can do</h2>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700">Frontend Development</h4>
            </div>

            <div>
              <h4 className="font-medium text-gray-700">Backend Development</h4>
            </div>

            <div>
              <h4 className="font-medium text-gray-700">UI/UX Design</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
