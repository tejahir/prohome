export default function ProfilePortfolio() {
  return (
    <div className=" bg-[#0b1225] border-r border-white/10 rounded-2xl h-screen flex flex-col">
      
      <header className="bg-gradient-to-br
      from-[#0a4bff] to-[#7a3cff] text-white shrink-0">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-4xl">
            <span>Tejas Ladumor</span>
          </div>

          <nav className="flex gap-6 text-lg font-medium">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pb-6">
        
        <section className="max-w-4xl mx-auto mt-10 bg-white rounded-xl shadow p-8 text-center">
          <img
            src="public/img/TEJAS.jpeg"
            alt="profile"
            className="w-40 h-40 rounded-full mx-auto"
          />
          <h1 className="text-2xl font-semibold text-blue-600 mt-4">
            Hello, I'm a Web Developer
          </h1>
          <p className="text-gray-700 mt-2 text-lg">
            I love creating beautiful and functional websites.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </section>

        <section
          id="about"
          className="max-w-4xl mx-auto mt-10 bg-white rounded-xl shadow p-6"
        >
          <h2 className="text-lg font-semibold text-blue-600 mb-3">
            About Me
          </h2>
          <div className="w-8 h-1 bg-blue-500 mb-4"></div>
          <p className="text-gray-700 text-lg">
            I am passionate about front-end and back-end development.
            I enjoy learning new technologies and building creative projects.
          </p>
        </section>

        <section
          id="skills"
          className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow p-6"
        >
          <h2 className="text-lg font-semibold text-blue-600 mb-3">
            Skills
          </h2>
          <div className="w-8 h-1 bg-blue-500 mb-4"></div>

          <div className="flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "React", "Node.js"].map((skill) => (
              <span
                key={skill}
                className="bg-blue-500 text-white text-lg px-4 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow p-6"
        >
          <h2 className="text-lg font-semibold text-blue-600 mb-3">
            Contact Me
          </h2>
          <div className="w-8 h-1 bg-blue-500 mb-4"></div>

          <ul className="text-lg text-gray-700 space-y-2">
            <li>📧 Email: tejasladumor682@gmail.com</li>
            <li>📞 Phone: +91 99244 81320</li>
            <li>
              📍 Address: 134, Mahadev Residency, Sedhav Gam,
              Niyol Road, Surat, Gujarat - 394325
            </li>
          </ul>
        </section>

        <footer className="text-center text-sm text-white mt-10">
          <div className="w-30 h-1 bg-blue-500 mx-auto mt-4"></div>
          <br/>
          © 2025 Tejas Ladumor. All rights reserved.
        </footer>

      </main>
    </div>
  );
}
