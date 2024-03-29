import React from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    // For example, navigate the user to the login page
    navigate("/login");
  };

  return (
    <button onClick={handleLogin} style={{ background: "red", color: "white", border: "none", borderRadius: "4px", padding: "8px 16px", cursor: "pointer" }}>
      Login
    </button>
  );
};

export default LoginButton;
