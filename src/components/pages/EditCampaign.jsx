import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom'

const EditCampaign = (props) => {
  let { id } = useParams()
  const currentCampaignDetail = props.campaigns.find(campaign => campaign._id === id )

  const [formData, setFormData] = useState({
    name: currentCampaignDetail ? currentCampaignDetail.name : "",
    category: currentCampaignDetail ? currentCampaignDetail.category : "",
    image: currentCampaignDetail ? currentCampaignDetail.image : "",
    price: currentCampaignDetail ? currentCampaignDetail.price : ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

//   const handleDeleteClick = async () => {
//     try {
//         // request the server delete the current bounty
//         await axios.delete(`${process.env.REACT_APP_SERVER_URL}/campaign/${id}`)
//         // if the update succces, get /editItem to update state in parent
//         const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/campaign`);
//         // // update the page
//         // props.setBounties(response.data)
//         // redirect 
//         navigate('/')
//     } catch(err) {
//         console.warn(err)
//     }
// }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    if (!formData.image) {
      newErrors.image = 'Image is required';
    }
    if (!formData.price) {
      newErrors.price = 'Price is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
const navigate = useNavigate()
  const handleSubmit = async event => {
    event.preventDefault();
    // get the token from local storage
		const token = localStorage.getItem('jwt')
		// make the auth headers
		const options = {
			headers: {
				'Authorization': token
			}
		}
    if (validateForm()) {
      try {
        await axios.put(`${process.env.REACT_APP_SERVER_URL}/campaign/${id}`, formData, options)
        .then(response=>{
            console.log(response.data)
            //once the backend gets back to us, navigate to the / route to see all items
            navigate('/') //clicking a link for the user
        
        })
        // redirect the user to the details page
      } catch (error) {
        // display an error message to the user
      }
    }
  };

  return (
    <div class="columns is-centered">
    <div class = "column is-5">
            <div class = "box">
                <h2 class ="title">Edit </h2>
    <form onSubmit={handleSubmit}>
      <div class="field">
        <label class="label" htmlFor="name">Product name</label>
        <input
          class="input is-medium"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div class="field">
        <label class="label" htmlFor="price">Price</label>
        <input
          class="input is-medium"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        {errors.price && <p>{errors.price}</p>}
      </div>
      <div class="field">
        <label class="label" htmlFor="category">Content</label>
        <input
          class="input is-medium"
          type="text"
          name="category"
          value={formData.content}
          onChange={handleChange}
          required
        />
        {errors.category && <p>{errors.category}</p>}
      </div>
      <div class="field">
        <label class="label" htmlFor="image">YouTube URL:</label>
        <input
          class="input is-medium"
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
        {errors.image && <p>{errors.image}</p>}
      </div>

      <button class="button is-medium is-dark m-1" type="submit">Update</button>
      {/* <button class="button is-medium is-dark m-1" onClick={handleDeleteClick}>Delete</button> */}
      <Link to={'/'}>
     				 <button class="button is-medium is-dark m-1">
        				Cancel
     				 </button>
      </Link>
    </form>
    </div>
    </div>
    </div>
  );
  
};


export default EditCampaign