import React from "react";

function CreateService({onClick}) {
    const handleCreateService = () => {
        // Logic for creating a service goes here
        console.log("Creating a new service");
      };
    
      return (
        
        <div className="center">
        <button onClick={onClick} className="neon-button">
          Create Service
        </button>
      </div>
      );
    }
export default CreateService;