import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {
    const frontedSkills =[
        "Html",
        "CSS",
        "Javascript",
        "TailwindCSS",
        "React",
    ];

    const backendskills = [
        "Nodejs",
        "Expressjs",
        "Mongodb",
        "Moongoose",
    ];

return (
    <section
    id="About"
    className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
     </h2>
     <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
        <p
          className="text-gray-300 mb-6">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
               <h3 
               className="text-xl font-bold mb-4">Fronted</h3>
               <div className="flex flex-wrap gap-2">
                {frontedSkills.map((tech, key) => (
                    <span
                    key={key} 
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                         hover:shadow-[0_2px_8px_rgba(59, 130,246,0.2)] transition
                    ">
                        {tech}
                    </span>
                ))}
               </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
               <h3 
               className="text-xl font-bold mb-4">Backend</h3>
               <div 
               className="flex flex-wrap gap-2">
                {backendskills.map((tech, key) => (
                    <span
                    key={key} 
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                         hover:shadow-[0_2px_8px_rgba(59, 130,2246,0.2)] transition
                    ">
                        {tech}
                    </span>
                ))}
               </div>
            </div>
        </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div
         className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
            <h3
             className="text-xl font-bold mb-4">education</h3>
            <ul className="list-disc  list-inside text-gray-300 space-y-2">
                <li> 
                    <strong>B.sc in Computer Science and Mathematics </strong>- Digvijay Nath P.G. College, Gorakhpur
                </li>
                <li>
                    Relevant Coursework: DCA, Full Stack,Web Development, Data Structures ...
                </li>
            </ul>
        </div>
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
            <h3
             className="text-xl font-bold mb-4"> Work Experience</h3>
            <div 
            className="space-y-4 text-gray-300">
                <div>
                    <h4 className="font-semibold">
                        {" "}
                         Full Stack Developer{" "}
                         </h4>
                    <p>
                        Designed and created a knowledge management platform using technologies like Nodejs and React.
                    </p>
                    <p>
                        Developed full stack applications across various platforms using latest industry-adopted technologies and frameworks.
                    </p>
                    <p>1 year Experience. </p>
                </div>
            </div>
        </div>

     </div>
</div>
</RevealOnScroll>
    </section>
)
}