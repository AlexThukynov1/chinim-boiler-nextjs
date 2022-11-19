import './index.css'
import StartScreenHeader from '../../components/start-screen-header/StartScreen'
import Banner from '../../components/banner/Banner'

const StartScreen = (props) => {
    const {formVisible,socialBarData} = props;
    return (
        <div id="start" className='start-screen-wrapper'>
            <StartScreenHeader className='general-layout'/>
            <Banner
            textListData={props.textListData}
            formVisible={formVisible}
            socialBarData={socialBarData}
            />
        </div>
    )
}

export default StartScreen