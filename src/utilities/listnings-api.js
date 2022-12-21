import sendRequest from './send-request';

const BASE_URL = '/principal';

export function create(listingData){
    return sendRequest(`${BASE_URL}/new`, 'POST',listingData)
}

export function getAll() {
  return sendRequest(BASE_URL, 'GET');
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`,'GET');
}