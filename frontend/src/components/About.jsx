import React from "react";
const About = () => {
  const info = [
    
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "01" }
  ];

 
  const googleDriveLink = "https://www.canva.com/design/DAGpCNfijko/c9cLHfTRvocdWRthykxZEQ/edit?utm_content=DAGpCNfijko&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";


  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
             <p className="text-justify leading-7 w-11/12 mx-auto">
              I am a passionate developer specializing in full-stack web development, with practical experience working on various projects using React.js, Node.js, Express.js, and MongoDB. I have built dynamic and responsive user interfaces using React and Tailwind CSS, ensuring smooth user experience and modern design principles.  
               <br />
              I have also developed backend APIs for task management and e-commerce applications, implementing CRUD operations, authentication with JWT and OAuth, and role-based access control. My projects emphasize clean code, structured architecture, and efficient state management.
               <br />
              In addition to React and Node.js, I am comfortable with tools like GitHub for version control and Postman for API testing. I enjoy learning new technologies and improving my skills continuously to deliver scalable and maintainable solutions.
              <br />
               Currently, I am working on enhancing my expertise in React Vite, Tailwind CSS, and full-stack integration to build professional and user-friendly applications.
              </p>

              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
