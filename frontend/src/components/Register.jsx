import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (password.length < 8) {
            setIsError(true);
            setMessage('Password must be at least 8 characters long.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/register/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setIsError(false);
                setMessage('Account created successfully!');
                setUsername('');
                setEmail('');
                setPassword('');
            } else {
                setIsError(true);
                const firstError = Object.values(data)[0];
                setMessage(Array.isArray(firstError) ? firstError[0] : 'Registration failed.');
            }
        } catch (err) {
            setIsError(true);
            setMessage('Could not connect to server.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            className="register-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <h2>Create Account</h2>
            <p>Sign up to get started</p>

            {message && (
                <p className={isError ? 'message error' : 'message success'}>
                    {message}
                </p>
            )}

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <FaUser className="input-icon" />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <FaEnvelope className="input-icon" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <FaLock className="input-icon" />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
                        required
                    />
                    <span
                        className="toggle-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </motion.div>
    );
}

export default Register;