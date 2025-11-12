import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // Password Validation Function
    const validatePassword = (password) => {
        if (password.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        if (!/[A-Z]/.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!/[a-z]/.test(password)) {
            return "Password must contain at least one lowercase letter.";
        }
        return "";
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        const error = validatePassword(password);
        if (error) {
            setPasswordError(error);
            toast.error(error);
            setLoading(false);
            return;
        } else {
            setPasswordError("");
        }

        try {
            // 👉 Replace this with your actual register logic (Firebase/AuthContext/etc.)
            console.log({ name, email, photoURL, password });
            toast.success("Registration Successful!");
            navigate(from, { replace: true });
        } catch (err) {
            toast.error("Registration Failed!");
            console.log(err?.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
        try {
            // 👉 Replace this with your actual Google Sign-up logic
            toast.success("Google Sign-up Successful!");
            navigate(from, { replace: true });
        } catch (err) {
            toast.error("Google Sign-up Failed!");
            console.log(err?.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl my-4 md:my-6 lg:my-8">
                <h2 className="text-3xl font-bold text-center text-primary">Register</h2>

                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="input input-bordered w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your photo URL"
                            className="input input-bordered w-full"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className={`input input-bordered w-full ${passwordError ? "input-error" : ""
                                }`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {passwordError && (
                            <p className="text-error text-sm mt-1">{passwordError}</p>
                        )}
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                {/* Divider */}
                <div className="divider">OR</div>

                {/* Google Signup */}
                <button
                    onClick={handleGoogleSignup}
                    className="btn btn-outline btn-primary w-full flex items-center justify-center gap-2"
                >
                    <FaGoogle /> Continue with Google
                </button>

                {/* Login Link */}
                <p className="text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="link link-primary font-semibold">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
