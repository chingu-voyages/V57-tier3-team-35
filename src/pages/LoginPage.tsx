import NavBarPublic from "../components/NavBarPublic";
import LoginPageForm from "../forms/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <NavBarPublic />
      <div className="container mx-auto my-8">
        <h2 className="text-center">Login</h2>
        <p className="text-center">Enter your username and password to log in.</p>
        <LoginPageForm />
      </div>
    </div>
  );
}
