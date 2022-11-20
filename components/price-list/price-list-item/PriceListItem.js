import styled from './PriceListItem.module.css'

const PriceListItem = (props) => {
    const {priceName, price} = props
    return (
        <div className={styled.priceListItem}>
            <div className={styled.service}>
                <span>{priceName}</span>
            </div>
            <div className={styled.price}>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default PriceListItem