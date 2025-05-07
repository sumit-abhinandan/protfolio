import { RevealOnScroll } from "../RevealOnScroll"


export const Project = () => {

    return <section
     id="Project" 
    className="min-h-screen flex items-center  justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
     </h2>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59, 130,246,0.1)] transition-all">
        <h3 className="text-xl font-bold mb-2"> E Commerce Platform</h3>
        <p className="text-gray-400 mb-4">
             E Commerce Platform is a software solution that allows bussiness to create and
              manage  online stores.
        </p>
        <div  className="Flex flex-wrap gap-2 mb-4">
            {["CMS", "React", "Nodejs","MongoDB"].map((tech,key) =>(
                 <span
                 key={key} 
                 className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59, 130,246,0.2)] transition
                 "
                 >
                     {tech}
                 </span>
            ))}
        </div>

        <div className="flex justify-between items-center">
            <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
            >
             {" "}
             View Project -{" "}
            </a>
        </div>
       </div>

       <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59, 130,246,0.1)] transition-all">
        <h3 className="text-xl font-bold mb-2"> E-learning Platform</h3>
        <p className="text-gray-400 mb-4">
             E-learning platform is a digital space where individuals can
              acces educational content,engage in learning activities,
               and track their progress online. 
        </p>
        <div  className="Flex flex-wrap gap-2 mb-4">
            {["LMS", "React", "Nodejs","MongoDB"].map((tech,key) =>(
                 <span
                 key={key} 
                 className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59, 130,246,0.2)] transition
                 "
                 >
                     {tech}
                 </span>
            ))}
        </div>

        <div className="flex justify-between items-center">
            <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
            >
             {" "}
             View Project -{" "}
            </a>
        </div>
       </div>
     </div>
        </div>
        </RevealOnScroll>
    </section>
}