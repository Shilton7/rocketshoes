import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import {
  addToCartSuccess,
  updateAmountSuccess,
} from '../../../store/modules/cart/action';
import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';
import { toast } from 'react-toastify';

function* addToCart({ id }) {
  //verifica se produto já existe no carrinho
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  //verifica estoque
  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  //quantidade atual no carrinho antes da adição
  const currentAmountCart = productExists ? productExists.amount : 0;

  //quantidade atualizada no carrinho depois da adição
  const amount = currentAmountCart + 1;

  //Estoque menor
  if (amount > stockAmount) {
    toast.error('Quantidade solicitada menor que o estoque');
    console.tron.warn('Estoque menor');
    return;
  }

  //atualiza dados no carrinho
  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    //encontrou os dados do produto
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    //add no carrrinho
    yield put(addToCartSuccess(data));

    //redireciona para a view carrinho
    history.push('/cart');
  }
}

function* updateAmounteRequest({ id, amount }) {
  if (amount <= 0) return;

  //verifica estoque
  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  //Estoque menor
  if (amount > stockAmount) {
    toast.error('Quantidade solicitada menor que o estoque');
    console.tron.warn('Estoque menor');
    return;
  }

  //atualiza amount on carrinho
  yield put(updateAmountSuccess(id, amount));
}

//ouvindo o acionamento do botao
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmounteRequest),
]);
