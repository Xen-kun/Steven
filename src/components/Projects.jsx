import TitleComponent from "./TitleComponent"

export default function Project() {
    return(
        <section id="projects" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                <TitleComponent> Featured Projects </TitleComponent>

                <div>
                    <p className="text-center max-w-2xl mx-auto text-gray-700">
                        Here are some of my recent projects that 
                        showcase my skills and passion for development.
                    </p>
                </div>
            </div>

        </section>
    )
}