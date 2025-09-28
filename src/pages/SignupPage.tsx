import NavBarPublic from "../components/NavBarPublic";
import SignupForm from "../forms/SignupForm";

export default function SignupPage() {
  return (
    <div>
      <NavBarPublic />
      <div className="container mx-auto my-8">
        <h2 className="text-center">Signup</h2>
        <p className="text-center">Please fill out the form below to create an account</p>
        <SignupForm />
      </div>
    </div>
  );
}
