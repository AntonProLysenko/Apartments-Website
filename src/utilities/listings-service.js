import * as listingAPI from './listings-api';

export async function create (listingData){
    
     return  await listingAPI.create(listingData)
    
}

export async function deleteListing (listingData){
    
     return  await listingAPI.deleteListing(listingData)
    
}