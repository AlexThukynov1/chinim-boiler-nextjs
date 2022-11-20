import { Component } from 'react';

import axios from 'axios';

import Forma from '../form/Form';
import OrderForm from '../order-form/OrderForm';
import Images from '../../resources/image';
import Texts from '../../resources/text';
import Confidence from '../form/Confidence/Confidence';
import AboutScreen from '../../layouts/about-screen/AboutScreen';
import ContactScreen from '../../layouts/contact-screen/ContactScreen';
import PriceScreen from '../../layouts/price-screen/PriceScreen';
import StartScreen from '../../layouts/start-screen/StartScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idOrder: null,
      isFormVisible: false,
      isOrderForm: false,
      isConfidenceVisible:false,
      socialBarData: [
        {
          src: Images.viberImg.src,
          link: 'viber://chat?number=%2B380953674703',
          alt: Images.viberImg.alt
        },
        {
          src: Images.watsupImg.src,
          link: 'https://wa.me/380953674703',
          alt: Images.watsupImg.alt
        },
        {
          src: Images.telegramImg.src,
          link: 'https://t.me/ChinimBoiler',
          alt: Images.telegramImg.alt
        }
      ],
      textListData: [
        {
          id: 0,
          src: Images.checkImg.src,
          text: Texts.ua.msTextListItem1
        },
        {
          id: 1,
          src: Images.checkImg.src,
          text: Texts.ua.msTextListItem2
        },
        {
          id: 2,
          src: Images.checkImg.src,
          text: Texts.ua.msTextListItem3
        },
        {
          id: 3,
          src: Images.checkImg.src,
          text: Texts.ua.msTextListItem4
        },
        {
          id: 4,
          src: Images.checkImg.src,
          text: Texts.ua.msTextListItem5
        },
        {
          id: 5,
          src: Images.checkImg.src,
          text: Texts.ua.msTextListItem6
        }
      ],
      aboutListData: [
        {
          id: 0,
          text: Texts.ua.causeText,
          icon: Images.dotImg.src,
          alt: Images.dotImg.alt
        },
        {
          id: 1,
          text: Texts.ua.causeText1,
          icon: Images.dotImg.src,
          alt: Images.dotImg.alt
        },
        {
          id: 0,
          text: Texts.ua.causeText2,
          icon: Images.dotImg.src,
          alt: Images.dotImg.alt
        },
        {
          id: 2,
          text: Texts.ua.causeText3,
          icon: Images.dotImg.src,
          alt: Images.dotImg.alt
        },
        {
          id: 3,
          text: Texts.ua.causeText4,
          icon: Images.dotImg.src,
          alt: Images.dotImg.alt
        },
        {
          id: 4,
          text: Texts.ua.causeText5,
          icon: Images.dotImg.src,
          alt: Images.dotImg.alt
        },
        {
          id: 5,
          text: Texts.ua.causeText6,
          icon: Images.dotImg.src,
          alt: Images.dotImg.alt
        },
      ],
    }
  }
  onFormTogle = () => {
    this.setState({ isFormVisible: true })
  }
  closeForm = () => {
    this.setState({ isFormVisible: false })
  }
  onVisibleConfidence = () => {
    this.setState({ isConfidenceVisible: true })
  }
  closeConfidence = () => {
    this.setState({ isConfidenceVisible: false })
  }
  onSubmit = async (values) => {
    values.id =  Date.now();
    this.setState({idOrder: values.id})
    // console.log(values);
    let {userName, id, phone, description} = values;
    try {
      await axios.post('http://localhost:3000/api/send-request', {userName, id, phone, description});
      this.setState({isOrderForm: true,});
      this.setState({isFormVisible: false,});
    } 
    catch (error) {
      console.log(error)
    }
    // await new Promise((resolve) => setTimeout(resolve, 500));
    // console.log(values);
    // values.id =  Date.now()
    // console.log(values);
    // alert(JSON.stringify(values, null, 2));
    // this.setState({idOrder: values.id})
    // this.setState({isOrderForm: true,})
    // this.setState({isFormVisible: false,})
  }
  onCloseOrder = () => {
    this.setState({isFormVisible: false,isOrderForm: false,})
  }

  render() {
    const { isFormVisible,isOrderForm, isConfidenceVisible } = this.state;
    const viewForm = isFormVisible ? <Forma onSubmit={this.onSubmit} onVisibleConfidence={this.onVisibleConfidence} closeForm={this.closeForm} /> : null;
    const confidenceView = isConfidenceVisible ? <Confidence  closeConfidence={this.closeConfidence} /> : null;
    const viewOrderForm = isOrderForm ? <OrderForm orderId={this.state.idOrder} onCloseOrder={this.onCloseOrder} /> : null;
    return (
      <div className="app">
        {confidenceView}
        {viewForm}
        {viewOrderForm}
        <div className='content'>
          <StartScreen
            textListData={this.state.textListData}
            formVisible={this.onFormTogle}
            socialBarData={this.state.socialBarData}
          />
          <PriceScreen
            priceListData={Texts.ua.priceList}
            formVisible={this.onFormTogle}
          />
          <AboutScreen
            aboutListData={this.state.aboutListData}
            formVisible={this.onFormTogle}
          />
          <ContactScreen />
        </div>
      </div>
    );
  }
}

export default App;
