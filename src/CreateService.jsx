import React, { useState } from "react";

function CreateService({ onClick }) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [price, setPrice] = useState("");
  const [skillTags, setSkillTags] = useState([]);

  const handleCreateService = () => {
    // Logic for creating a service goes here
    console.log("Creating a new service");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted");
    // Reset form fields
    setTitle("");
    setDescription("");
    setSkills("");
    setPrice("");
    // Close the form
    setShowForm(false);
  };

  const handleSkillsChange = (e) => {
    const { value } = e.target;
    setSkills(value);

    // Update skillTags based on comma-separated input value
    const tags = value.split(",").map((tag) => tag.trim());
    setSkillTags(tags);
  };

  const removeSkillTag = (tag) => {
    const updatedTags = skillTags.filter((t) => t !== tag);
    setSkillTags(updatedTags);
  };

  return (
    <div className="center">
      {!showForm ? (
        <div>
          <p className="description">
            Create your first Service and start getting Leads $$$
          </p>
          <button onClick={() => setShowForm(true)} className="neon-button">
            Create Service
          </button>
        </div>
      ) : (
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
          <div className="skill-tags">
            {skillTags.map((tag, index) => (
              <div key={index} className="skill-tag">
                {tag}
                <button
                  type="button"
                  onClick={() => removeSkillTag(tag)}
                  className="remove-tag-button"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <input
            type="text"
            id="skills"
            value={skills}
            onChange={handleSkillsChange}
            className="form-input"
            placeholder="Enter skills separated by commas"
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
    </div>
  );
}
export default CreateService;