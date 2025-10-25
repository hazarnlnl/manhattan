import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProjectPage from './components/ProjectPage';

function HomePage() {
  return (
    <div className="container">
      <div className="left-column">
        <h1>hazar nl</h1>
        <p>hey, i'm a product designer, i care about how software behaves and how it fits into human behavior and emerging tech.</p>
        <p>i previously worked at and helped early-stage startups build their mvps from scratch.</p>
        <p>i also build independent products as experiments in interaction design. <a href="https://trycargo.netlify.app" target="_blank" rel="noopener noreferrer">cargo</a><span className="punctuation">,</span> <a href="https://trycargo.netlify.app" target="_blank" rel="noopener noreferrer">memoria</a><span className="punctuation">.</span></p>
        <p>currently open to new projects and opportunities.</p>
      </div>
      
      <div className="right-column">
          <div className="projects-section">
            <h2>projects</h2>
            <p><Link to="/social">social</Link> <img src="/icon_link.svg" alt="link" className="link-icon" /></p>
            <p><Link to="/strike">strike</Link> <img src="/icon_link.svg" alt="link" className="link-icon" /></p>
            <p><a href="https://trycargo.netlify.app" target="_blank" rel="noopener noreferrer">cargo</a> <img src="/icon_link.svg" alt="link" className="link-icon" /></p>
            <p><a href="https://trycargo.netlify.app" target="_blank" rel="noopener noreferrer">memoria</a> <img src="/icon_link.svg" alt="link" className="link-icon" /></p>
            <p>mode (soon)</p>
            <p>derine (soon)</p>
            <p>interactions (soon)</p>
          </div>
        
        <div className="contact-section">
          <p>feel free to say hi!</p>
          <p><a href="mailto:hazarnl.garden@gmail.com">mail</a></p>
          <p><a href="https://twitter.com/hazarnlnl" target="_blank" rel="noopener noreferrer">twitter</a></p>
          <p><a href="https://hazarnlnl.substack.com/" target="_blank" rel="noopener noreferrer">journal</a></p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/social" element={<ProjectPage title="social" content="A social platform for connecting creators through shared interests and experiences." images={["/social/tags2.mp4", "/social/pic.png", "/social/Twitter post - 1.png", "/social/Twitter post - 2.png", "/social/Twitter post - 3.png"]} />} />
        <Route path="/strike" element={<ProjectPage title="strike" content="A productivity app that helps you focus and get things done with smart task management." images={["/pic.png"]} />} />
      </Routes>
    </Router>
  );
}

export default App;
