import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import "./App.css";

function CreateService({ onClick }) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState([]);
  const [price, setPrice] = useState("");
  const [createdServices, setCreatedServices] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // New state to track editing status

  const handleCreateService = () => {
    // Logic for creating a service goes here
    console.log("Creating a new service");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const service = {
      title,
      description,
      skills,
      price,
    };

    if (editMode) {
      setCreatedServices((prevServices) => {
        const updatedServices = [...prevServices];
        updatedServices[editIndex] = service;
        return updatedServices;
      });
      setIsEditing(false); // Reset editing status after update
    } else {
      setCreatedServices((prevServices) => [...prevServices, service]);
    }

    setTitle("");
    setDescription("");
    setSkills([]);
    setPrice("");

    setShowForm(false);
    setEditMode(false);
    setEditIndex(null);
  };

  const handleEditDetails = (index) => {
    setEditMode(true);
    setEditIndex(index);
    const { title, description, skills, price } = createdServices[index];
    setTitle(title);
    setDescription(description);
    setSkills(skills);
    setPrice(price);
    setShowForm(true); // Show the form when editing details
    setIsEditing(true); // Set editing status to true
  };

  const handleAddService = () => {
    setShowForm(true);
    setIsEditing(false);
    setTitle("");
    setDescription("");
    setSkills([]);
    setPrice("");
  };

  return (
    <div className="center">
      {!showForm && createdServices.length === 0 ? (
        <div>
          <p className="description">
            Create your first Service and start getting Leads $$$
          </p>
          <button onClick={() => setShowForm(true)} className="neon-button">
            Create Service
          </button>
        </div>
      ) : (
        <React.Fragment>
          {showForm && (
            <form onSubmit={handleFormSubmit} className="service-form">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-input"
                placeholder="Enter a catchy title for your service"
              />

              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-input"
                placeholder="Provide a detailed description of your service"
              ></textarea>

              <label htmlFor="skills">Skills:</label>
              <TagsInput
                value={skills}
                onChange={(newSkills) => setSkills(newSkills)}
                className="tags-input-container"
                tagClassName="tag"
                removeButtonClassName="tag-remove-button"
                inputProps={{ placeholder: "Add relevant skills" }}
              />

              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-input"
                placeholder="Enter the price for your service"
              />

              <button type="submit" className="neon-button">
                {isEditing ? "Update Service" : "Create Service"}
              </button>
            </form>
          )}

          {!showForm && (
            <div className="service-gallery">
              <h2 className="top-left">Your Services:</h2>
              {createdServices.map((service, index) => (
                <div key={index} className="service-container">
                  <div className="service-details">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <div className="service-skills">
                      <span className="skills-label">Skills:</span>{" "}
                      {service.skills.join(", ")}
                    </div>
                    <p className="service-price">${service.price}</p>
                  </div>
                  <button
                    className="edit-button"
                    onClick={() => handleEditDetails(index)}
                  >
                    Edit Details
                  </button>
                </div>
              ))}
             <div className="add-service-container">
                <button onClick={handleAddService} className="add-service-button">
                  Add Service
                </button>
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
}

export default CreateService;