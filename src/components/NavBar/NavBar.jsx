import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import { Link,withRouter} from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
   render() {
       const{ location} = this.props;
       console.log(location);

       const homeClass = location.pathname === '/' ? 'active-item' : '';
       const aboutClass = location.pathname === '/about' ? 'active-item' : '';
       const projectsClass = location.pathname === '/projects' ? 'active-item' : '';
       const skillsClass = location.pathname === '/skills' ? 'active-item' : '';
       const contactClass = location.pathname === '/contact' ? 'active-item' : '';
    return (
        <Menu>
            {/* WE NEVER WANT TO USE <a>(anchor tags) inside our react router application,since its results in refreshing of the current page */}
          {/*<a id="home" className="menu-item" href="/">Home</a>*/}
          <Link to='/' classname={`menu-item ${homeClass}`} activeStyle={{color: 'red'}} >        {/*The Link component allows us the possibility of client-side routing without refreshing the page. The Link component is not available by default so we should import from react-router-dom*/}
           Home
          </Link>
           <Link to='/about' classname={`menu-item ${aboutClass}`}>
           About
           </Link>
           <Link to='/projects' classname={`menu-item ${projectsClass}`}>
            Projects
            </Link>
            <Link to='/skills' classname={`menu-item ${skillsClass}`}>
            Skills
            </Link>
            <Link to='/contact' classname={`menu-item ${contactClass}`}>
            Contact
            </Link>
          
        </Menu>
    );


   }
}
export default withRouter(NavBar);