import sendRequest from './send-request';

const BASE_URL = '/api/listings';
const STAT_URL = '/api/stats'


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

export function update(listingData, id) {
  // console.log("in listings-api");
  // console.log(listingData, id);
  return sendRequest(`${BASE_URL}/${id}`,'PUT', listingData);
}

export function postStat(){
  return sendRequest(`${STAT_URL}/new`, 'POST', stat)
}

export function getStats(){
  return sendRequest(STAT_URL, 'GET');
}