import { motion } from "framer-motion"
import { Lock, Sparkles } from "lucide-react"

import { UserAuthForm } from "./components/user-auth-form"

export default function SignIn() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
    },
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Animated Background */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-blue-dark"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'rgba(255,255,255,0.08)',
            }}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -30, 30, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: [0.42, 0, 0.58, 1],
              delay: i * 0.5,
            }}
          />
        ))}
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12" style={{ color: '#fff' }}>
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.18)' }}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <span className="text-2xl font-bold">NexusAuth</span>
          </motion.div>
          {/* Center Content */}
          <motion.div className="text-center" animate={floatingAnimation}>
            <motion.div
              className="w-64 h-64 mx-auto mb-8 rounded-full flex items-center justify-center backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.10)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-32 h-32 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.10) 100%)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
              >
                <Lock className="w-16 h-16" style={{ color: '#fff' }} />
              </motion.div>
            </motion.div>
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Secure Access
            </motion.h2>
            <motion.p
              className="text-xl"
              style={{ color: 'rgba(255,255,255,0.8)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Your gateway to innovation
            </motion.p>
          </motion.div>
          {/* Bottom Quote */}
          <motion.blockquote
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="text-lg italic">"The dreams."</p>
            <footer style={{ color: 'rgba(255,255,255,0.7)' }}>— Eleanor Roosevelt</footer>
          </motion.blockquote>
        </div>
      </motion.div>
      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <motion.div
          className="w-full max-w-md space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div className="text-center space-y-2" variants={itemVariants}>
            <h1 className="text-4xl font-bold" style={{ color: '#0a2540' }}>Welcome Back</h1>
            <p style={{ color: '#4b5563' }}>Enter your credentials to access your account</p>
          </motion.div>
          <UserAuthForm/>

          {/* Sign Up Link */}
          <motion.p className="text-center" variants={itemVariants}>
            Don't have an account?{" "}
            <motion.a
              href="#"
              className="font-semibold transition-colors"
              style={{ color: '#2563eb' }}
              whileHover={{ scale: 1.05 }}
            >
              Sign up
            </motion.a>
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
