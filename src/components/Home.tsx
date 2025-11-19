import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-content">
      <p>
        <Link to="/projects">see work</Link>
      </p>
      <p>spots available for december</p>
      <p>
        <a href="mailto:hazarnl.garden@gmail.com">contact</a>
      </p>
    </div>
  );
}

export default Home;

