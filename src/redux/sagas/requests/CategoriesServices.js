import api from './api';

export const getCategoriesService = async () => {
  const response = await api.get('/category', {
    headers: {
      Authorization: sessionStorage.getItem('token'),
    },
  });

  return response.data || [];
};

export const searchCategoriesService = async filter => {
  const response = await api.get(`/category?filter=${filter}`, {
    headers: {
      Authorization: sessionStorage.getItem('token'),
    },
  });

  return response.data || [];
};

export const postCategoriesService = async ({ name }) => {
  const response = await api.post(
    '/category',
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

export const editCategoriesService = async ({ name, uuid }) => {
  const response = await api.put(
    `/category/${uuid}`,
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

export const deleteCategoriesService = async uuid => {
  const response = await api.delete(`/category/${uuid}`, {
    headers: {
      Authorization: sessionStorage.getItem('token'),
    },
  });

  return response;
};
