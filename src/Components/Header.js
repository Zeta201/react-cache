import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        gap: "1rem",
        fontWeight: 700,
        fontSize: "1.5rem",
        color: "green",
        background: "#ddd",
        marginBottom: "1rem",
      }}
    >
      <div onClick={() => navigate("/iris")} style={{ cursor: "pointer" }}>
        Country
      </div>
      <div onClick={() => navigate("/irisrq")} style={{ cursor: "pointer" }}>
        Country RQ
      </div>
    </div>
  );
}

export default Header;
