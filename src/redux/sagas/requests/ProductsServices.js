import api from './api';

export const getProductsService = async () => {
  const response = await api.get('/product', {
    headers: {
      Authorization: sessionStorage.getItem('token'),
    },
  });

  return response.data || [];
};

export const searchProductsService = async filter => {
  const response = await api.get(`/product?filter=${filter}`, {
    headers: {
      Authorization: sessionStorage.getItem('token'),
    },
  });

  return response.data || [];
};

export const postProductsService = async ({ name }) => {
  const response = await api.post(
    '/product',
    {
      headers: {
        Authorization: sessionStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    },
    JSON.stringify(name)
  );

  return response;
};

export const editProductsService = async ({ name, uuid }) => {
  const response = await api.put(
    `/product/${uuid}`,
    {
      headers: {
        Authorization: sessionStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    },
    JSON.stringify({ name, uuid })
  );

  return response;
};

export const deleteProductsService = async uuid => {
  const response = await api.delete(`/product/${uuid}`, {
    headers: {
      Authorization: sessionStorage.getItem('token'),
    },
  });

  return response;
};
