import './index.css'
import PriceListItem from './price-list-item/PriceListItem'

const PriceList = (props) => {
    const {priceListData} = props
    return (
        <div className='price-list'>
            {
                priceListData.map((item,index) => {
                    return (
                        <PriceListItem
                        key= {index}
                        priceName= {item.priceName}
                        price= {item.price}
                    />
                    )
                })
            }
        </div>
    )
}

export default PriceList