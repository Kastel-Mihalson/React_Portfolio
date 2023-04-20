import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
    return (
       <nav className='navbar'>
            <div className='container'>
                <Link to="#" className='navbar-brand'>port : FOLIO</Link>

                <div className='navbar-wrap'>
                    <ul className='navbar-menu'>
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">Contacts</Link></li>
                    </ul>

                    <Link to="#" className='logout'>Logout</Link>
                </div>
            </div>
       </nav>
    )
}

export default Header