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
                extraContent={[
                  "This social platform reimagines how creators discover and collaborate with one another by moving beyond superficial metrics like follower counts. Instead, it focuses on the substance that truly matters—shared passions, complementary skills, and aligned creative visions.",
                  "Whether you're a photographer seeking a storyteller, a musician looking for a visual artist, or a writer hoping to connect with illustrators, the platform uses intelligent matching based on interests, project goals, and creative philosophies. Members can showcase their work through rich portfolios, participate in interest-based groups, and engage in collaborative challenges that spark organic connections. The emphasis is on fostering genuine relationships that lead to meaningful projects rather than transactional interactions."
                ]}
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
