import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Bio from './components/Bio';
import ProjectRoute from './components/ProjectRoute';

function HomeShell() {
  return <Bio />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeShell />} />
          <Route
            path="social"
            element={
              <ProjectRoute
                title="social"
                content="A social platform for connecting creators through shared interests and experiences."
                images={["/social/tags2.mp4", "/social/pic.png", "/social/Twitter post - 1.png", "/social/Twitter post - 2.png", "/social/Twitter post - 3.png"]}
              />
            }
          />
          <Route
            path="strike"
            element={
              <ProjectRoute
                title="haul"
                content="A productivity app that helps you focus and get things done with smart task management."
                images={["/pic.png"]}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
