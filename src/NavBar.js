import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to="/" className='nav-link active navbar-brand'>Blog It</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/about" className='nav-link active'>About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/articles" className='nav-link active'>Articles</Link>
                    </li>
                </ul>

                </div>
            </div>
            </nav>
    )
}

export default NavBar;