import * as listingAPI from './listnings-api';

export async function create (listingData){
    
     return  await listingAPI.create(listingData)
    
}