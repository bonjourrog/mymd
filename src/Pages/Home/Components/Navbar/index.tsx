import './Navbar.css';
import { NavbarProps } from './Navbar.props';

const Navbar:React.FC<NavbarProps> = ({mousePosition})=>{
    return (
        <nav className={`nav ${mousePosition.X<=0?'left-0':''}`}></nav>
    );
}

export default Navbar;