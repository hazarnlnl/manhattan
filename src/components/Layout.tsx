import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="container">
      <div className="left-column">
        <div className="brand">
          <Link to="/" className="brand-button">hazar nl</Link>
        </div>
        <div className="projects-section">
          <h2>projects:</h2>
          <p><a href="https://trycargo.netlify.app" target="_blank" rel="noopener noreferrer">cargo</a> <img src="/icon_link.svg" alt="link" className="link-icon" /></p>
          <p><a href="https://trycargo.netlify.app" target="_blank" rel="noopener noreferrer">memoria</a> <img src="/icon_link.svg" alt="link" className="link-icon" /></p>
          <p><Link to="/social">social</Link> <img src="/icon_link2.svg" alt="link" className="link-icon" /></p>
          <p><Link to="/strike">haul</Link> <img src="/icon_link2.svg" alt="link" className="link-icon" /></p>
          <p>mode (soon)</p>
          <p>derine (soon)</p>
          <p>interactions (soon)</p>
        </div>

        <div className="contact-section">
          <p>feel free to say hi!</p>
          <p><a href="mailto:hazarnl.garden@gmail.com">mail</a></p>
          <p><a href="https://www.are.na/hazar-nl/channels" target="_blank" rel="noopener noreferrer">are.na</a></p>
          <p><a href="https://twitter.com/hazarnlnl" target="_blank" rel="noopener noreferrer">twitter</a></p>
          <p><a href="https://hazarnlnl.substack.com/" target="_blank" rel="noopener noreferrer">substack</a></p>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;


