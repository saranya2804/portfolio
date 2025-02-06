import {useState} from "react";
import "./Mainpage.css";

const projects = [
    {
      title: "Online Hospital Management System",
      description: "A web-based system to manage hospital operations, appointments, and patient records.",
      images: [
        "https://portfolio-saranya.s3.ap-south-1.amazonaws.com/hms.png",
        "https://portfolio-saranya.s3.ap-south-1.amazonaws.com/hm2.png",
        "https://portfolio-saranya.s3.ap-south-1.amazonaws.com/hms3.png",
        "https://portfolio-saranya.s3.ap-south-1.amazonaws.com/hms4.png",
        "https://portfolio-saranya.s3.ap-south-1.amazonaws.com/hms5.png",
      ],
    },
    {
      title: "E-Commerce Microservices",
      description: "An online shopping platform built using microservices architecture and Spring Boot.",
      images: [
        "https://portfolio-saranya.s3.ap-south-1.amazonaws.com/bill3.jpg",
        "https://portfolio-saranya.s3.ap-south-1.amazonaws.com/bill2.jpg",
        "https://portfolio-saranya.s3.ap-south-1.amazonaws.com/bill1.jpg",
        "https://portfolio-saranya.s3.ap-south-1.amazonaws.com/bill4.jpg",
        "https://portfolio-saranya.s3.ap-south-1.amazonaws.com/bill5.jpg",
      ],
    },
    {
      title: "Travel Booking System",
      description: "A web-based trip planning tool that allows travelers to organize their trips, manage itineraries, and book accommodations with real-time updates.",
      images: [
        "https://portfolio-saranya.s3.ap-south-1.amazonaws.com/t1.jpg",
        "https://portfolio-saranya.s3.ap-south-1.amazonaws.com/t2.jpg",
        "https://portfolio-saranya.s3.ap-south-1.amazonaws.com/t3.jpg",
        "https://portfolio-saranya.s3.ap-south-1.amazonaws.com/t4.jpg",
      ],
    },
    
  ];

const MainPage = () => {
  function whatsapp() {
    window.location.href = "https://wa.me/7993171601?text=Hello%20there";
  }

  function mail(){
    window.location="mailto:saranyachittiprolu2804@gmail.com";
}

  function resume(){
    window.location.href="https://drive.google.com/file/d/12QwwPtl7I-EIXFxwcWwF2dsYkbPQ4YE9/view?usp=sharing";
  }
  function linkedin(){
    window.location.href="https://www.linkedin.com/in/saranya-chittiprolu-906454215/";
  }
  function github(){
    window.location.href="https://github.com/saranya2804";
  }
  const [currentIndices, setCurrentIndices] = useState(Array(projects.length).fill(0));

  const nextSlide = (index) => {
    setCurrentIndices((prev) => {
      const updated = [...prev];
      updated[index] = (updated[index] + 1) % projects[index].images.length;
      return updated;
    });
  };

  const prevSlide = (index) => {
    setCurrentIndices((prev) => {
      const updated = [...prev];
      updated[index] = updated[index] === 0 ? projects[index].images.length - 1 : updated[index] - 1;
      return updated;
    });
  };
  function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }
  function scrollToHome(){
  document.getElementById("root").scrollIntoView({behavior:"smooth"});
  }
  function scrollToAbout(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
  }
  return (
    <>
      <div className="nav-main" id="home">
        <p className="name">
          Saranya Chittiprolu<span className="dot">.</span>
        </p>
        <nav className="nav">
            <li className="items">
              <button className="btn" onClick={scrollToHome}>Home</button>
            </li>
            <li className="items">
              <button className="btn" onClick={scrollToAbout}>About</button>
            </li>
            <li className="items">
              <button className="btn" onClick={scrollToProjects}>Projects</button>
            </li>
            
        </nav>
        <div className="icons">
          <i className="fa fa-whatsapp" style={{ fontSize: "36px" }} onClick={whatsapp}></i>
          <i className="fa fa-envelope" style={{ fontSize: "36px" }} onClick={mail}></i>
          <i className="fa fa-file-text" style={{ fontSize: "30px" }}onClick={resume}></i>
        </div>
      </div>

      <div className="profile">
        <div className="about">
          <p style={{ fontSize: "24px" }}>Hey, I'm Saranya</p>
          <h1 className="fullstack">FullStack</h1>
          <h1 className="Developer">Developer</h1>
          <p>Building seamless web experiences from frontend to backend.</p>
          <br />
          <div className="buttons">
            <button className="bt1" onClick={whatsapp}>Get In Touch</button>
            <button className="bt2" onClick={scrollToProjects}>Browse Projects</button>
          </div>
        </div>
        <img src="https://portfolio-saranya.s3.ap-south-1.amazonaws.com/pic1.jpg" className="ill" alt="Profile" />
      </div>
      <div className="heading" id="projects">
      <p style={{ fontSize: "50px",fontWeight:"bold"}}>
          Projects<span className="dot">.</span>
        </p>
      </div>
      <div className="projects-container">
  {projects.map((project, index) => (
    <div key={index}>
      
      <div className="project-box">
        <div className="slider">
          <button className="prev-btn" onClick={() => prevSlide(index)}>&#10094;</button>
          <img src={project.images[currentIndices[index]]} className="project-image" />
          <button className="next-btn" onClick={() => nextSlide(index)}>&#10095;</button>
        </div>
      </div>
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
    </div>
  ))}
</div>
<div className="headings">
      
      
</div>
      
<div className="skills-achievements-container">
  <div className="skills">
  <div className="heading">
      <p style={{ fontSize: "50px" ,fontWeight:"bold"}}>
        Skills<span className="dot">.</span>
      </p>
      </div>
    <div className="skills-grid">
      <div className="skill-item">
        <img src="https://portfolio-saranya.s3.ap-south-1.amazonaws.com/react.png" className="image" alt="React" />
        <h3>ReactJs</h3>
      </div>
      <div className="skill-item">
        <img src="https://portfolio-saranya.s3.ap-south-1.amazonaws.com/html.png" className="image" alt="HTML" />
        <h3>HTML</h3>
      </div>
      <div className="skill-item">
        <img src="https://portfolio-saranya.s3.ap-south-1.amazonaws.com/css.png" className="image" alt="CSS" />
        <h3>CSS</h3>
      </div>
      <div className="skill-item">
        <img src="https://portfolio-saranya.s3.ap-south-1.amazonaws.com/java.png" className="image" alt="Java" />
        <h3>Java</h3>
      </div>
      <div className="skill-item">
        <img src="https://portfolio-saranya.s3.ap-south-1.amazonaws.com/python.png" className="image" alt="Python" />
        <h3>Python</h3>
      </div>
      <div className="skill-item">
        <img src="https://portfolio-saranya.s3.ap-south-1.amazonaws.com/spring.png" className="image" alt="Spring Boot" />
        <h3>SpringBoot</h3>
      </div>
      <div className="skill-item">
        <img src="https://portfolio-saranya.s3.ap-south-1.amazonaws.com/aws.png" className="image" alt="AWS" />
        <h3>AWS</h3>
      </div>
      <div className="skill-item">
        <img src="https://portfolio-saranya.s3.ap-south-1.amazonaws.com/mysql.png" className="image" alt="MySQL" />
        <h3>SQL</h3>
      </div>
      <div className="skill-item">
        <img src="https://portfolio-saranya.s3.ap-south-1.amazonaws.com/github.png" className="image" alt="GitHub" />
        <h3>GitHub</h3>
      </div>
    </div>
  </div>

  
  <div className="achievements">
  <div className="heading">
      <p style={{ fontSize: "50px" ,fontWeight:"bold"}}>
        Achievements<span className="dot">.</span>
      </p>
  </div>
    <div className="achievements-list">
      <div className="achievement-item">
        <p>Recognized by Google Cloud Digital Leader Certification, Google Cloud</p>
      </div>
      <div className="achievement-item">
        <p>Completed AWS Academy Cloud Foundations Certification, AWS</p>
      </div>
      <div className="achievement-item">
        <p>Attained Java Developer Certification, ExcelR Edutech Solutions</p>
      </div>
      <div className="achievement-item">
        <p>Published a journal on Certification Verification and Validation using Blockchain Technology, JETNR</p>
      </div>
    </div>
  </div>
</div>
<div className="heading">
      <p style={{ fontSize: "50px" ,fontWeight:"bold"}}>
        About me<span className="dot">.</span>
      </p>
  </div>
<div className="About" id="about">
    <p className="me">
    Hello! I’m Saranya Chittiprolu, a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. With expertise in Java, React.js, Spring Boot, and SQL, I specialize in building scalable and efficient web applications.<br></br><br></br>
I hold a Bachelor's degree in Information Technology, and my technical skills span various domains, including microservices architecture, cloud technologies (AWS), and object-oriented programming (OOP) principles. Throughout my career, I’ve successfully worked on diverse projects, including an Online Hospital Management System and E-commerce platforms using Java Spring Boot and React.
<br></br><br></br>
Driven by a passion for problem-solving, I focus on creating seamless, user-friendly experiences and optimized backend systems. I’m always excited about learning new technologies and exploring innovative solutions to real-world challenges. My goal is to leverage my skills in software development and cloud technologies to contribute to impactful and meaningful projects.
    </p>
</div>
      <div className="footer1">
      <nav className="nav gap-3">
            <li className="items">
              <button className="btn" onClick={scrollToHome}>Home</button>
            </li>
            <li className="items">
              <button className="btn" onClick={scrollToAbout}>About</button>
            </li>
            <li className="items">
              <button className="btn" onClick={scrollToProjects}>Projects</button>
            </li>
        </nav>
        <div className="icons">
        <i className="fa fa-linkedin" onClick={linkedin} style={{fontSize:"28px"}}></i>
        <i className="fa fa-github" onClick={github} style={{fontSize:"28px"}}></i>
        <i className="fa fa-whatsapp" onClick={whatsapp} style={{fontSize:"28px"}}></i>
        </div>
        </div>
        <div className="footer2">
  <div className="footer-left">
    <p className="heading" style={{ fontSize: "28px", color: "GrayText" }}>
      Interested in working together<span className="dot" style={{ fontSize: "28px" }}>?</span>
    </p>
    <div className="buttons">
      <button className="bt1" onClick={whatsapp}>Get In Touch</button>
      <button className="bt2" onClick={scrollToProjects}>Browse Projects</button>
    </div>
  </div>
  <div className="footer-right">
    <p>©2025 All Rights Reserved.</p>
    <p>Made with 💜 by Saranya</p>
  </div>
</div>

    </>
  );
};

export default MainPage;
