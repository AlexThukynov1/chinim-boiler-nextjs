import './index.css'
import SocialBarItem from './social-bar-item/SocialBarItem'

const SocialBar = (props) => {
    const {socialBarData} = props
    return (
        <div className='social-bar-wrapper'>
            <ul className="start-screen__social-bar">
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