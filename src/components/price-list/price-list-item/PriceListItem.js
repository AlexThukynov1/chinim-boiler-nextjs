import './index.css'

const PriceListItem = (props) => {
    const {priceName, price} = props
    return (
        <div className='price-list-item'>
            <div className='service'>
                <span>{priceName}</span>
            </div>
            <div className='price'>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default PriceListItem