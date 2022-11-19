import './index.css'

const SocialBarItem = (props) => {
    const {link,src,alt} = props;
    return (
        <li>
            <a className="social-bar-item" target="_blank" href={link}>
                <img src={src} alt={alt} />
            </a>
        </li>
    )
}

export default SocialBarItem