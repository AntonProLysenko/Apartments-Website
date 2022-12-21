
import { Component } from "react";
import { create } from "../../utilities/listings-service";

export default class NewListingForm extends Component {


    state = {
        name: "",
        description: "",
        photo: "",
        available: "",
        error: ""
      }



      handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value,
          error: ""
        })
    }





    // handleSubmit = async (evt) => {
    //    evt.preventDefault()
    //    try {
    
    //      const formData = {...this.state}
    //      delete formData.error;
    //      const listing = await create(formData)
    //       this.props.setListing(listing)
    //    } catch {
    //      this.setState({ error: "Failed - Try Again"})
    //    }
    //  }

  render () {
    return(
      // action="/principal/listings" method="POST" onSubmit={this.handleSubmit}
         <form    action="/principal/" method="POST">
          <fieldset>
            <legend>Create New Listing</legend>

            <label>Title<input type="text" name="title" placeholder="Enter Title" onChange={this.handleChange} required /></label>

            <label>Description:<input type="text" name="description" placeholder="Enter Description" onChange={this.handleChange} required /> </label>

            <label>Photo link<input type="text" name="photo" onChange={this.handleChange} required /> </label>

            <label>Available :<input type="checkbox" name="available" /> </label>
            <button type="submit">create New Listing</button>

          </fieldset>
          <p className="error-message">&#160;{this.state.error}</p>
          
        </form>

     
    )
  }
}

