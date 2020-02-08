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
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

//remover item do carrinho
export function removeProductToCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

//verifica o valor da quantidade no carrinho
export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

//atualizar quantidade de produtos no carrinho
export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
