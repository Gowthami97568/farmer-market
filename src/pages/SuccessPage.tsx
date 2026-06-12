import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>🎉 Order Successful</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default SuccessPage;