import "./index.css"
// import BurgerMenuItem from "./burger-menu-item/BurgerMenuItem"

const BurgerMenu = (props) => {
    return (
        <div className="burger-menu">
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-btn" for="menu-toggle">
          <span></span>
        </label>
     
        <ul className="menubox">
                <li><a className="menu-item" href="#start">Головна</a></li>
                <li><a className="menu-item" href="#price">Прайс</a></li>
                <li><a className="menu-item" href="#contacts">Контакти</a></li>
        </ul>
      </div>
    )
}

export default BurgerMenu