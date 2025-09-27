import TitleComponent from "./TitleComponent"

export default function Project() {
    return(
        <section id="projects" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6 md:px-10 text-center">
                <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                <span className="block w-20 h-0.5 bg-black mx-auto mb-8"></span>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                Here are some of my recent projects that showcase my skills and passion for development.
                </p>

                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1*/}
                    <div className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2 overflow-hidden group flex flex-col">
                        <div className="relative overflow-hidden">
                            <img 
                                src="../public/images/Budgetplanner.png" 
                                alt="Budget Planner" 
                                className="rounded-t-lg w-full h-auto transition-transform duration-400 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                            />
                        </div>

                        <div className="p-6 text-left flex flex-col flex-1 justify-between">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Budget Planner</h3>
                                <p className="text-gray-600 mb-4">
                                    A budget management tool that helps users track expenses, set savings goals, and analyze spending habits.
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-gray-100 text-sm rounded">React</span>
                                    <span className="px-3 py-1 bg-gray-100 text-sm rounded">Node.js</span>
                                    <span className="px-3 py-1 bg-gray-100 text-sm rounded">MySQL</span>
                                </div>
                                <a href="#" className="inline-block px-5 py-2 bg-black text-white rounded hover:-translate-y-1 hover:shadow-md transition">
                                    🚀 View Live Demo
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Card 2*/}
                    <div className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2 overflow-hidden group flex flex-col">
                        <div className="relative overflow-hidden">
                            <img 
                                src="../public/images/DeNovoAssembly.png" 
                                alt="Budget Planner" 
                                className="rounded-t-lg w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                            />
                        </div>

                        <div className="p-6 text-left flex flex-col flex-1 justify-between">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Resource-Aware De Novo Genome Assembly Algorithm 
                                    for Short Read Sequences on Lower-end Machine
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    A budget management tool that helps users track expenses, set savings goals, and analyze spending habits.
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-gray-100 text-sm rounded">React</span>
                                    <span className="px-3 py-1 bg-gray-100 text-sm rounded">Node.js</span>
                                    <span className="px-3 py-1 bg-gray-100 text-sm rounded">MySQL</span>
                                </div>
                                <a href="#" className="inline-block px-5 py-2 bg-black text-white rounded hover:-translate-y-1 hover:shadow-md transition">
                                    🚀 View Live Demo
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Card 3*/}
                    <div className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2 overflow-hidden group flex flex-col">
                        <div className="relative overflow-hidden">
                            <img 
                                src="../public/images/WeatherAnalytics.png" 
                                alt="Budget Planner" 
                                className="rounded-t-lg w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                            />
                        </div>

                        <div className="p-6 text-left flex flex-col flex-1 justify-between">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Budget Planner</h3>
                                <p className="text-gray-600 mb-4">
                                    A budget management tool that helps users track expenses, set savings goals, and analyze spending habits.
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-gray-100 text-sm rounded">React</span>
                                    <span className="px-3 py-1 bg-gray-100 text-sm rounded">Node.js</span>
                                    <span className="px-3 py-1 bg-gray-100 text-sm rounded">MySQL</span>
                                </div>
                                <a href="#" className="inline-block px-5 py-2 bg-black text-white rounded hover:-translate-y-1 hover:shadow-md transition">
                                    🚀 View Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}