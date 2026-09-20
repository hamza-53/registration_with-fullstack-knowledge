import { motion } from 'framer-motion';
import profilePic from '../assets/Hamza.png';
import './Home.css';

function Home() {
    return (
        <motion.div
            className="home-page"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            <motion.img
                src={profilePic}
                alt="Hamza Khan"
                className="profile-pic"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            />

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Hi, I'm Engineer Hamza Khan
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                Welcome to my Portal!
            </motion.p>

            <motion.p
                className="home-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
            >
                Please login or register to continue.
            </motion.p>
        </motion.div>
    );
}

export default Home;