import * as listingAPI from './listings-api';

export async function create (listingData){
     return  await listingAPI.create(listingData)   
}

export async function deleteListing (listingData){
     return  await listingAPI.deleteListing(listingData)
}

export async function update (listingData, id){
     return  await listingAPI.update(listingData, id)
}

