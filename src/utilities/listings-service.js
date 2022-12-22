import * as listingAPI from './listings-api';

export async function create (listingData){
    
    console.log(listingData);
    
     return  await listingAPI.create(listingData)
    
}