//adicionar item no carrinho
export function addToCart(product) {
  return {
    type: '@cart/ADD', //Tipo
    product, //conteudo
  };
}

//remover item do carrinho
export function removeProductToCart(id) {
  return {
    type: '@cart/REMOVE', //Tipo
    id, //conteudo
  };
}

//atualizar quantidade de produtos no carrinho
export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
