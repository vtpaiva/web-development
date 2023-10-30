import './Offer.css'

function Offer(props) {
    return (
        <div className='offerPanel'>
            <img src= {props.image} alt="City" />
            <div className='offerBottom'>
                <span>R$ {props.price}</span>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default Offer