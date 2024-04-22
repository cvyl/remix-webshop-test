import React from 'react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-4 text-gray-400 text-center text-sm">
            {/* Copyright text */}
            <p>&copy; {currentYear} Mikka. All rights reserved.</p>
        </footer>
    )
}

export default Footer
