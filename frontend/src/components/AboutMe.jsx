import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 rounded-xl md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          <span className="text-primary mr-3">01.</span>
          About me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image */}
          <div
            className="md:w-1/3 animate-slide-in-left"
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src="/rayane.png"
              alt="Rayane Sefiani"
              className="rounded-full shadow-2xl mx-auto border-4 border-brand-accent w-64 h-64 md:w-80 md:h-80 object-cover"
            />
          </div>

          {/* Text */}
          <div
            className="md:w-2/3 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-lg mb-6 leading-relaxed">
              A results-driven Full-Stack Developer based in Morocco,
              specializing in building modern, responsive, and interactive web
              applications.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              <span className="inline-block">
                <span className="text-black dark:text-white font-bold">
                  Front-End:
                </span>{" "}
                Solid foundation in HTML, CSS, JavaScript, TypeScript, and
                React.js, with an expanding skill set in Tailwind CSS.
              </span>
              <span className="inline-block">
                <span className="text-black dark:text-white font-bold">
                  Back-End:
                </span>{" "}
                Strong proficiency in Node.js, Express, PostgreSQL, and MongoDB
                for developing robust backend servers and building CRUD APIs.
              </span>
            </p>

            <p className="text-lg leading-relaxed">
              Driven by a passion for technology and creative expression through
              code, my web development journey began at age 16. I am adept at
              translating concepts into functional, highly-polished web
              solutions. I have successfully completed diverse projects, from
              simple applications to complex interactive games, consistently
              honing the ability to deliver high-quality code that supports
              seamless frontend-backend integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
