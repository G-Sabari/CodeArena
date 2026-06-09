import { useState } from "react"
import { Link } from "react-router-dom"
import { FaEye, FaEyeSlash } from "react-icons/fa"

function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [error, setError] = useState("")

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleRegister = (e) => {

        e.preventDefault()

        if (!username || !email || !password || !confirmPassword) {
            setError("All fields are required")
            return
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters")
            return
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }

        setError("")

        console.log(username)
        console.log(email)
        console.log(password)
    }

    return (

        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black relative overflow-hidden px-4">

            {/* Glow Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

            {/* Register Card */}
            <div className="relative z-10 bg-zinc-900 p-6 sm:p-8 rounded-xl w-full max-w-sm border border-zinc-800 shadow-2xl">

                <h1 className="text-white text-2xl sm:text-3xl font-bold pb-4">
                    Register
                </h1>

                {error && (
                    <p className="text-red-500 mb-4">
                        {error}
                    </p>
                )}

                <form onSubmit={handleRegister}>

                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none text-sm sm:text-base"
                    />

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none mt-4 text-sm sm:text-base"
                    />

                    {/* Password */}
                    <div className="relative mt-4">

                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white outline-none pr-12 text-sm sm:text-base focus:ring-2 focus:ring-white transition"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
                        >
                            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                        </button>

                    </div>

                    {/* Confirm Password */}
                    <div className="relative mt-4">

                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-3.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white outline-none pr-12 text-sm sm:text-base focus:ring-2 focus:ring-white transition"
                        />

                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
                        >
                            {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                        </button>

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-zinc-300 transition mt-4 text-sm sm:text-base"
                    >
                        Register
                    </button>

                    <div className="flex justify-between text-sm text-zinc-400 mt-4">

                        <p>Already have an account?</p>

                        <Link
                            to="/"
                            className="hover:text-white transition"
                        >
                            Login
                        </Link>

                    </div>

                </form>

            </div>

        </div>

    )
}

export default Register