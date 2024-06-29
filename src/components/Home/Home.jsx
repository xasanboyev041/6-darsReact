import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="wrapper">
        <a href="http://localhost:5173/">Home</a>
        <a href="http://localhost:5173/blog">Blog</a>
        <a href="http://localhost:5173/contact">Contact</a>
        <a href="http://localhost:5173/portifolio">Portifolio</a>
        <a href="http://localhost:5173/projects">Project</a>
        <a href="http://localhost:5173/about">About</a>
      </div>
      <header className="home-header">
        <h1>Assalomu alaykum, Men Nurmuhammad</h1>
        <p>Men veb dasturchiman.</p>
        <a href="/portfolio" className="cta-button">
          Mening Ishlarimni Ko'ring
        </a>
      </header>
      <section className="home-intro">
        <h2>Men Haqimda</h2>
        <p>
          Men zamonaviy veb-texnologiyalar yordamida innovatsion va interaktiv
          veb-saytlarni yaratishga ixtisoslashganman. Mening asosiy maqsadim -
          foydalanuvchilarga qulay va chiroyli interfeyslar yaratishdir.
        </p>
      </section>
      <section className="home-projects">
        <h2>Oxirgi Loyiha</h2>
        <div className="projects-grid">
          {/* Loyihalar kartalarini qo'shing */}
          <div className="project-card">
            <img src="https://via.placeholder.com/300" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Bu loyiha haqida qisqacha ma'lumot.</p>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300" alt="Project 2" />
            <h3>Project 2</h3>
            <p>Bu loyiha haqida qisqacha ma'lumot.</p>
          </div>
        </div>
      </section>
      <section className="home-contact">
        <h2>Kontakt</h2>
        <p>Agar sizga yordam kerak bo'lsa, albatta bog'laning!</p>
        <a href="/contact" className="cta-button">
          Mening Bilan Bog'laning
        </a>
      </section>
    </div>
  );
}

export default Home;
