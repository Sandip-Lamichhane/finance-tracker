import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const LoginSchema = Yup.object({
    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

export default function Login() {
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            console.log("Login Data:", values);

            // Future backend integration:
            // const user = await loginUser(values)

            navigate("/dashboard");
        } catch (error) {
            setErrors({
                password: "Invalid email or password",
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0e1a] text-white flex flex-col font-['DM_Sans']">
            {/* Background Glow */}
            <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(74,222,128,0.08)_0%,_transparent_65%)] pointer-events-none"></div>

            {/* Login Section */}
            <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-16">
                <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 text-xs uppercase tracking-wider mb-4">
                            Manage Your Finance •
                        </div>

                        <h1 className="text-3xl font-['Syne'] font-extrabold mb-3 leading-tight">
                            Welcome Back to{" "}
                            <span className="text-green-400">FinoTrack</span>
                        </h1>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Securely manage your expenses, budgets, and financial future.
                        </p>
                    </div>

                    {/* Formik Form */}
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={LoginSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, isSubmitting }) => (
                            <Form className="space-y-5">
                                {/* Email */}
                                <div>
                                    <label className="block text-sm mb-2 text-gray-300">
                                        Email Address
                                    </label>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-500 focus:outline-none transition ${errors.email && touched.email
                                            ? "border-red-500"
                                            : "border-white/10 focus:border-green-400"
                                            }`}
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="p"
                                        className="text-red-400 text-sm mt-1"
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="block text-sm mb-2 text-gray-300">
                                        Password
                                    </label>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="••••••••"
                                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-500 focus:outline-none transition ${errors.password && touched.password
                                            ? "border-red-500"
                                            : "border-white/10 focus:border-green-400"
                                            }`}
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="p"
                                        className="text-red-400 text-sm mt-1"
                                    />
                                </div>

                                {/* Options */}
                                <div className="flex justify-between items-center text-sm text-gray-400">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="accent-green-400"
                                        />
                                        Remember me
                                    </label>

                                    <Link
                                        to="/forgot-password"
                                        className="text-cyan-400 hover:underline"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 rounded-xl bg-green-400 text-[#0a0e1a] font-semibold hover:bg-cyan-400 transition-all duration-300 disabled:opacity-60 cursor-pointer"
                                >
                                    {isSubmitting
                                        ? "Signing In..."
                                        : "Login to Dashboard"}
                                </button>

                                {/* Register */}
                                <p className="text-center text-sm text-gray-400 pt-2">
                                    Don’t have an account?{" "}
                                    <Link
                                        to="/register"
                                        className="text-green-400 hover:text-cyan-400 transition"
                                    >
                                        Create Account
                                    </Link>
                                </p>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}