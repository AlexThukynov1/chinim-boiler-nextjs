import styled from './SocialBarItem.module.css'
import Image from 'next/image';

const SocialBarItem = (props) => {
    const {link,src,alt} = props;
    return (
        <li>
            <a className={styled.socialBarItem} target="_blank" href={link}>
                <Image src={src} alt={alt} />
            </a>
        </li>
    )
}

export default SocialBarItem