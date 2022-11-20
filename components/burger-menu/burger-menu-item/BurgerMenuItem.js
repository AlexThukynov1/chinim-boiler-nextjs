 const BurgerMenuItem = (props) => {
    const {link, text} = props;
    return (
        <li><a className="menu-item" href={link}>{text}</a></li>
    )
 }
 export default BurgerMenuItem