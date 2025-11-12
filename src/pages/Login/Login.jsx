import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"; // Redirect after login

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (email === "user@example.com" && password === "123456") {
                toast.success("Login Successful!");
                navigate(from, { replace: true });
            } else {
                throw new Error("Invalid email or password");
            }
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            toast.success("Google Sign-in Successful!");
            navigate(from, { replace: true });
        } catch (err) {
            toast.error("Google Sign-in Failed!");
            console.log(err?.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl">
                <h2 className="text-3xl font-bold text-center text-primary">Login</h2>

                <form onSubmit={handleLogin} className="space-y-4">
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

                    {/* Password */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label className="label">
                            <Link to="/forgot-password" className="label-text-alt link link-hover text-sm">
                                Forgot Password?
                            </Link>
                        </label>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {/* Divider */}
                <div className="divider">OR</div>

                {/* Google Login */}
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline btn-primary w-full flex items-center justify-center gap-2"
                >
                    <FaGoogle /> Continue with Google
                </button>

                {/* Register Link */}
                <p className="text-center text-sm">
                    Don’t have an account?{" "}
                    <Link to="/register" className="link link-primary font-semibold">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
