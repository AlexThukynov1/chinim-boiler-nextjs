import styled from './SocialBar.module.css'
import SocialBarItem from './social-bar-item/SocialBarItem'

const SocialBar = (props) => {
    const {socialBarData} = props
    return (
        <div className={styled.socialBarWrapper}>
            <ul className={styled.startScreenSocialBar}>
                {
                    socialBarData.map((item,index) => {
                        return(
                            <SocialBarItem
                            src={item.src}
                            link={item.link}
                            alt={item.alt}
                            key={index}
                        />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SocialBar