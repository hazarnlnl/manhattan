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
                date="12 june 2025"
                extraContent={[
                  "This social platform reimagines how creators discover and collaborate with one another by moving beyond superficial metrics like follower counts. Instead, it focuses on the substance that truly matters—shared passions, complementary skills, and aligned creative visions.",
                  "Whether you're a photographer seeking a storyteller, a musician looking for a visual artist, or a writer hoping to connect with illustrators, the platform uses intelligent matching based on interests, project goals, and creative philosophies. Members can showcase their work through rich portfolios, participate in interest-based groups, and engage in collaborative challenges that spark organic connections. The emphasis is on fostering genuine relationships that lead to meaningful projects rather than transactional interactions."
                ]}
                images={["/social/icon2.png", "/social/tags2.mp4", "/social/pic.png", "/social/Twitter post - 1.png", "/social/Twitter post - 2.png", "/social/Twitter post - 3.png"]}
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
        <Route
          path="stride"
          element={
            <ProjectRoute
              title="stride"
              content="Stride is a simple run app that keeps you moving. It trims the noise, tracks only what matters, and helps you build momentum toward your next goal."
              date="23 july 2024"
              extraContent={[
                "Goal-oriented by design—it focuses on progress over perfection, making each run feel clear and intentional."
              ]}
              images={["/stride/project1_img1.png", "/stride/case_image.png", "/stride/project1_img2.png", "/stride/project1_img3.png", "/stride/project1_img4.png", "/stride/project1_img5.png"]}
            />
          }
        />
        <Route
          path="mode"
          element={
            <ProjectRoute
              title="mode"
              content=""
              date="23 december 2024"
              images={["/mode/1.png", "/mode/2.png", "/mode/3.png"]}
            />
          }
        />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
