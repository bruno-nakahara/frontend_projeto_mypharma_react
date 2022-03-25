import api from '../../../services/api';

export const getCategoriesService = async () => {
  const response = await api.get(
    '/category',
    {},
    {
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
    }
  );

  return response.data || [];
};

export const searchCategoriesService = async filter => {
  const response = await api.get(
    `/category?filter=${filter}`,
    {},
    {
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
    }
  );

  return response.data || [];
};

export const postCategoriesService = async category => {
  const response = await api.post('/category', JSON.stringify(category), {
    headers: {
      Authorization: sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  });

  return response;
};

export const editCategoriesService = async category => {
  const response = await api.put(
    `/category/${category.uuid}`,
    JSON.stringify(category),
    {
      headers: {
        Authorization: sessionStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    }
  );

  return response;
};

export const deleteCategoriesService = async uuid => {
  const response = await api.delete(
    `/category/${uuid}`,
    {},
    {
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
    }
  );

  return response;
};
