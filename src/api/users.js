import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

/*eslint-disable no-console*/

const baseUrl = getBaseUrl();

export const getUsers = () => get('users');
export const deleteUser = (id) => del(`users/${id}`);

const get = (url) => fetch(baseUrl + url).then(onSuccess, onError);

const del = (url) => {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

const onSuccess = (response) => response.json();

const onError = (error) => { console.log(error); }
