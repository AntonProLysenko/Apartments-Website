
export default function AvailabilitiesPage(props) {
    console.log(props.apartments)
  return (
 
    props.apartments?
    <>
    <h1>We have available apartments</h1>
    </>
    :
    <>
    <h3>Sorry...</h3>

    <h4> We do't have any apartments available right now</h4>
    <h5>Please check out our sister property <a href = "#">Green Forest Apartments</a></h5>
  
    
    
    </>
    
  )
}
