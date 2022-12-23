import sendRequest from './send-request';

const BASE_URL = '/api/listings';



export function getAll() {
  return sendRequest(BASE_URL, 'GET');
}

export function deleteListing(listingData){
  return sendRequest(`${BASE_URL}/:id`, 'DELETE',listingData)
}

export function create(listingData){
  return sendRequest(`${BASE_URL}/new`, 'POST',listingData)
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`,'GET');
}