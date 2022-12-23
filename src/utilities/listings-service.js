import * as listingAPI from './listings-api';

export async function create (listingData){
    
     return  await listingAPI.create(listingData)
    
}