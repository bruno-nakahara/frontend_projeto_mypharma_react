import api from '../../../services/api';

export const getBrandsService = async () => {
  const response = await api.get(
    '/brand',
    {},
    {
      headers: {
        Authorization: `${sessionStorage.getItem('token')}`,
      },
    }
  );

  return response.data || [];
};

export const searchBrandsService = async filter => {
  const response = await api.get(
    `/brand?filter=${filter}`,
    {},
    {
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
    }
  );

  return response.data || [];
};

export const postBrandsService = async ({ name }) => {
  const response = await api.post('/brand', JSON.stringify(name), {
    headers: {
      Authorization: sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  });

  return response;
};

export const editBrandsService = async ({ name, uuid }) => {
  const response = await api.put(
    `/brand/${uuid}`,
    JSON.stringify({ name, uuid }),
    {
      headers: {
        Authorization: sessionStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    }
  );

  return response;
};

export const deleteBrandsService = async uuid => {
  const response = await api.delete(
    `/brand/${uuid}`,
    {},
    {
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
    }
  );

  return response;
};
