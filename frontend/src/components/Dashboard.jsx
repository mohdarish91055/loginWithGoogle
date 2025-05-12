import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user-info"));
    if (data) {
      setUser(data);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user-info");
    navigate("/login");
  };

  if (!user) return <h3>Loading...</h3>;

  return (
    <>
      <h1>Dashboard</h1>
      <img
        src={user?.image}
        alt="profile"
        style={{ width: 100, height: 100, borderRadius: "50%" }}
      />
      <h3>Hello!, {user?.name}</h3>
      <h3>Email : {user?.email}</h3>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Dashboard;
