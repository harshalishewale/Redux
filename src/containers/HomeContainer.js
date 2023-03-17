import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart,removefromCart } from "../Services/Actions/action";

const mapStateToProps = state => ({
    cardData: state.carditems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removefromCartHandler: data => dispatch(removefromCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home; 