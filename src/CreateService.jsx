import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

function CreateService({ onClick }) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState([]);
  const [price, setPrice] = useState("");
  const [createdUser, setCreatedUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleCreateService = () => {
    // Logic for creating a service goes here
    console.log("Creating a new service");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted");

    // Create a user object
    const user = {
      title,
      description,
      skills,
      price,
    };

    // Set the created user state
    setCreatedUser(user);

    // Reset form fields
    setTitle("");
    setDescription("");
    setSkills([]);
    setPrice("");

    // Close the form
    setShowForm(false);
  };

  const handleEditDetails = () => {
    setEditMode(true);
  };

  const handleUpdateDetails = () => {
    setEditMode(false);
    // Perform update logic here
    console.log("Details updated");
  };

  return (
    <div className="center">
      {!showForm && !createdUser ? (
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
                inputProps={{ placeholder: "Enter skills separated by commas" }}
              />

              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-input"
                placeholder="Set the price for your service"
              />

              <button type="submit" className="neon-button">
                Create
              </button>
            </form>
          )}

          {createdUser && (
            <div className="created-user">
              <h2>Created User:</h2>
              <p>Title: {createdUser.title}</p>
              <p>Description: {createdUser.description}</p>
              <p>Skills:{createdUser.skills.join(", ")}</p>
              <p>Price: {createdUser.price}</p>
              <button onClick={handleEditDetails} className="edit-button">
                Edit Details
              </button>
            </div>
          )}
          {editMode && (
            <div className="modal">
              <div className="modal-content">
                <h2>Edit Details</h2>
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
                  inputProps={{
                    placeholder: "Enter skills separated by commas",
                  }}
                />

                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-input"
                  placeholder="Set the price for your service"
                />

                <button onClick={handleUpdateDetails} className="neon-button">
                  Update
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
