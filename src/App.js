import { ReactComponent as Logo } from './assets/logo/logo.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



import Skills from './skills';
import Projects from './projects';
import Home from './home';
import Nav from './components/nav';
import Footer from './components/footer';
import Toggle from './components/toggle';
import Experience from './experience';
import Contact from './contact';

function App() {
  return (
    <div>
      <div class="header">
        <Nav />
      <div class="logo">
        <Logo />
          <div class="logo-text"><p>Welcome</p></div>
          
        </div>
        <Toggle/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
    </Routes>
<Footer/>
    </div>
  );
}
export default App;