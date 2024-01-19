import axios from 'axios';
export const phonebookInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  phonebookInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async body => {
  const { data } = await phonebookInstance.post('/users/signup', body);
  setToken(data.token);
  return data;
};

export const requestLogin = async body => {
  const { data } = await phonebookInstance.post('/users/login', body);
  setToken(data.token);
  return data;
};

export const requestLogout = async () => {
  const { data } = await phonebookInstance.post('/users/logout');

  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await phonebookInstance.get('/users/current');

  return data;
};

export const requestAllContacts = async () => {
  const { data } = await phonebookInstance.get('/contacts');
  return data;
};

export const requestAddContact = async newContact => {
  const { data } = await phonebookInstance.post('/contacts', newContact);
  return data;
};

export const requestDeleteContact = async contactId => {
  const { data } = await phonebookInstance.delete(`/contacts/${contactId}`);
  return data;
};


