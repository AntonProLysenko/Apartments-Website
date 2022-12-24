import * as listingAPI from './listings-api';

export async function create (listingData){
     return  await listingAPI.create(listingData)   
}

export async function deleteListing (listingData){
     return  await listingAPI.deleteListing(listingData)
}

export async function edit (listingData, id){
     return  await listingAPI.edit(listingData, id)
}

