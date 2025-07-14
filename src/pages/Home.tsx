import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import GitHubShowcase from '../components/GitHubShowcase';
import Certifications from '../components/Certifications';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Home;
