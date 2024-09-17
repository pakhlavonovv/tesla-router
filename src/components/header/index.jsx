import './sass/style.scss'
import LogoImage from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Index = () => {
    const activeLink = "text-red"
    return (
        <>
            <div className="container">
                <header className='header'>
                    <div className="header_wrapper d-flex align-items-center justify-content-between">
                        <div className="header_logo"><img src={LogoImage} alt="" /></div>
                        <div className="header_links">
                            <NavLink
                                to="/main-page"
                                className={({ isActive }) => (isActive ? 'activeLink' : '')}
                            >
                                Model S
                            </NavLink>
                            <NavLink
                                to="/model-3"
                                className={({ isActive }) => (isActive ? 'activeLink' : '')}
                            >
                                Model 3
                            </NavLink>
                            <NavLink
                                to="/model-x"
                                className={({ isActive }) => (isActive ? 'activeLink' : '')}
                            >
                                Model X
                            </NavLink>
                            <NavLink
                                to="/solar-roof"
                                className={({ isActive }) => (isActive ? 'activeLink' : '')}
                            >
                                Solar Roof
                            </NavLink>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'activeLink' : '')}
                            >
                               Solar Panels
                            </NavLink>
                        </div>
                        <div className="res-actions d-flex align-items-center gap-3">
                        <div className="res-input">
                        <i class="fa-solid fa-magnifying-glass" style={{ color: "white" }}></i>
                        <input type="text" placeholder='Search' style={{ backgroundColor: "transparent", border: "none", outline: "none", color: "white" }} />
                        </div>
                            <i class="fa-solid fa-bars fa-lg"></i>
                            <i class="fa-regular fa-user fa-lg" style={{ color: "#ffffff;" }}></i>
                        </div>
                    </div>
                    <div id='header_actions_input'>
                        <i class="fa-solid fa-magnifying-glass" style={{ color: "white" }}></i>
                        <input type="text" placeholder='Search' style={{ backgroundColor: "transparent", border: "none", outline: "none", color: "white" }} />
                    </div>
                </header>
            </div>
        </>
    )
}

export default Index