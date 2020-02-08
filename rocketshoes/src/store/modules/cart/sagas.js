import { call, put, all, takeLatest } from 'redux-saga/effects';
import { addToCartSuccess } from '../../../store/modules/cart/action';
import api from '../../../services/api';

function* addToCart({ id }) {
  //encontrou os dados do produto
  const response = yield call(api.get, `/products/${id}`);

  //add no carrrinho
  yield put(addToCartSuccess(response.data));
}

//ouvindo o acionamento do botao
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
