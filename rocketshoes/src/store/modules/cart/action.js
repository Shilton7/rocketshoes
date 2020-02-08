//Solicita os dados do produto - SAGA
export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST', //Tipo
    id, //conteudo
  };
}
//Retorna os dados do produto e adiciona item no carrinho
export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS', //Tipo
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
