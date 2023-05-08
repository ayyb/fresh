import hello from './data.js'

export default function Cart() {
    let cart = ['tomato', 'pasta']
    return (
        <div>
            <h4 className="title">Cart</h4>
            <div className="cart-item">
                <p>상품명  </p>
                <p>$40</p>
                <p>1개</p>
            </div>
            <CartItem item={cart[0]}/>
            <CartItem item={cart[1]}/>
            <Btn color='red'/>
            <Btn color='blue'/>
        </div>
    )
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

function Btn(props){
    return (
        <button style={{color: props.color}}>구매하기</button>
    )
}