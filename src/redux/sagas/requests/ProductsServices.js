import api from '../../../services/api';

export const getProductsService = async () => {
  const response = await api.get(
    '/product',
    {},
    {
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
    }
  );

  return response.data || [];
};

export const searchProductsService = async filter => {
  const response = await api.get(
    `/product?filter=${filter}`,
    {},
    {
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
    }
  );

  return response.data || [];
};

export const postProductsService = async product => {
  const response = await api.post('/product', JSON.stringify(product), {
    headers: {
      Authorization: sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  });

  return response;
};

export const editProductsService = async product => {
  const response = await api.put(
    `/product/${product.uuid}`,
    JSON.stringify(product),
    {
      headers: {
        Authorization: sessionStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    }
  );

  return response;
};

export const deleteProductsService = async uuid => {
  const response = await api.delete(
    `/product/${uuid}`,
    {},
    {
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
    }
  );

  return response;
};
