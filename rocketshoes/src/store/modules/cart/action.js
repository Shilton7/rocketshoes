export function addToCart(product) {
  return {
    type: '@cart/ADD', //Tipo
    product, //conteudo
  };
}
export function removeProductToCart(id) {
  return {
    type: '@cart/REMOVE', //Tipo
    id, //conteudo
  };
}
