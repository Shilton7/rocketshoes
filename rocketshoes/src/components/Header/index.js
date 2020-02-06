import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

function Header({ cart_data, cart_Size }) {
  console.log(cart_data);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span> {cart_Size} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
export default connect(state => ({
  cart_data: state.cart, //(nome do reducer utilizado)
  cart_Size: state.cart.length,
}))(Header);
