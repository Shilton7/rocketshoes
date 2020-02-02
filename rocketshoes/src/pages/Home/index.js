import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-everlast-station-masculino/26/AXB-1666-226/AXB-1666-226_detalhe2.jpg?ims=326x"
          alt="imgProduto"
        />
        <strong>Tênis Top</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-everlast-station-masculino/26/AXB-1666-226/AXB-1666-226_detalhe2.jpg?ims=326x"
          alt="imgProduto"
        />
        <strong>Tênis Top</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-everlast-station-masculino/26/AXB-1666-226/AXB-1666-226_detalhe2.jpg?ims=326x"
          alt="imgProduto"
        />
        <strong>Tênis Top</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-everlast-station-masculino/26/AXB-1666-226/AXB-1666-226_detalhe2.jpg?ims=326x"
          alt="imgProduto"
        />
        <strong>Tênis Top</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-everlast-station-masculino/26/AXB-1666-226/AXB-1666-226_detalhe2.jpg?ims=326x"
          alt="imgProduto"
        />
        <strong>Tênis Top</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-everlast-station-masculino/26/AXB-1666-226/AXB-1666-226_detalhe2.jpg?ims=326x"
          alt="imgProduto"
        />
        <strong>Tênis Top</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
