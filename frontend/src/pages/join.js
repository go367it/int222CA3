import React, { useState } from "react";

export default function JoinRoom() {
  const [room, setRoom] = useState(null);

  const onSubmit = () => {
    window.location.assign(`/video/${room}`);
  };

  return (
    <div className="d-flex justify-content-center">
      <div style={{width:"600px"}} className="card">
        <div className="card-body">
          <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Chat Room Name
            </label>
            <input
              class="form-control"
              id="exampleInputEmail1"
              style={{ padding: "10px", outline: "none", borderRadius: "5px" }}
              type="text"
              onChange={(e) => setRoom(e.target.value)}
            />
            <button className="btn btn-primary mt-3" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
