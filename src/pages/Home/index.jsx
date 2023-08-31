import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import brand from "../Room/video-logo.jfif";

const HomePage = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div className="d-block">
      <img src={brand} alt="brand" className="img-fluid brand-image" />
      <div className="input-group mb-3 w-75 position-relative top-50 start-50 translate-middle">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter Room Code"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary join join-btn"
          type="submit"
          id="button-addon2"
          onClick={handleJoinRoom}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default HomePage;
