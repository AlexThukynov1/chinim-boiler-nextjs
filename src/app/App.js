import { Component } from 'react';
import './App.css';
import StartScreen from '../layouts/start-screen/StartScreen'
import PriceScreen from '../layouts/price-screen/PriceScreen';
import AboutScreen from '../layouts/about-screen/AboutScreen';
import ContactScreen from '../layouts/contact-screen/ContactScreen';
import OrderForm from '../components/order-form/OrderForm';
import Forma from '../components/form/Form';
import Images from '../resources/image';
import Texts from '../resources/text';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idOrder: null,
      isFormVisible: false,
      isOrderForm: false,
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
  onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(values);
    values.id =  Date.now()
    console.log(values);
    alert(JSON.stringify(values, null, 2));
    this.setState({idOrder: values.id})
    this.setState({isOrderForm: true,})
    this.setState({isFormVisible: false,})
  }
  onCloseOrder = () => {
    this.setState({isFormVisible: false,isOrderForm: false,})
  }

  render() {
    const { isFormVisible,isOrderForm } = this.state;
    const viewForm = isFormVisible ? <Forma onSubmit={this.onSubmit} closeForm={this.closeForm} /> : null;
    const viewOrderForm = isOrderForm ? <OrderForm orderId={this.state.idOrder} onCloseOrder={this.onCloseOrder} /> : null;
    return (
      <div className="app">
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
