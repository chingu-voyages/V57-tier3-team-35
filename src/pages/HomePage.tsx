import NavBarPublic from "../components/NavBarPublic";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBarPublic />
      <div className="container mx-auto my-8 text-center py-8">
        <h1>Welcome to SkillSwap</h1>
        <p>Connect, Learn, and Grow Together!</p>
        <button className="button mt-20" onClick={()=> navigate("/signup")}>Create Account</button>
      </div>
    </div>
  );
}
