import React from 'react'

export const BackgroundPaths = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="path-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(152, 175, 65, 0.1)" />
            <stop offset="100%" stopColor="rgba(152, 175, 65, 0.3)" />
          </linearGradient>
          <linearGradient id="path-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(209, 246, 141, 0.1)" />
            <stop offset="100%" stopColor="rgba(209, 246, 141, 0.2)" />
          </linearGradient>
          <linearGradient id="path-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(123, 89, 156, 0.1)" />
            <stop offset="100%" stopColor="rgba(123, 89, 156, 0.2)" />
          </linearGradient>
        </defs>
        
        {/* Animated Path 1 */}
        <path
          d="M0,200 Q250,100 500,200 T1000,200 L1000,0 L0,0 Z"
          fill="url(#path-gradient-1)"
          className="animate-pulse"
          style={{
            animation: 'float-path-1 6s ease-in-out infinite'
          }}
        />
        
        {/* Animated Path 2 */}
        <path
          d="M0,400 Q200,300 400,400 T800,400 Q900,350 1000,400 L1000,0 L0,0 Z"
          fill="url(#path-gradient-2)"
          style={{
            animation: 'float-path-2 8s ease-in-out infinite reverse'
          }}
        />
        
        {/* Animated Path 3 */}
        <path
          d="M0,600 Q300,500 600,600 Q750,650 1000,600 L1000,1000 L0,1000 Z"
          fill="url(#path-gradient-3)"
          style={{
            animation: 'float-path-3 10s ease-in-out infinite'
          }}
        />
        
        {/* Small floating dots */}
        <circle cx="100" cy="150" r="2" fill="rgba(152, 175, 65, 0.3)">
          <animate attributeName="cy" values="150;130;150" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="300" r="3" fill="rgba(209, 246, 141, 0.4)">
          <animate attributeName="cy" values="300;280;300" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="700" cy="200" r="2" fill="rgba(123, 89, 156, 0.3)">
          <animate attributeName="cy" values="200;180;200" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="850" cy="450" r="4" fill="rgba(255, 201, 181, 0.3)">
          <animate attributeName="cy" values="450;430;450" dur="7s" repeatCount="indefinite" />
        </circle>
      </svg>
      
      <style jsx>{`
        @keyframes float-path-1 {
          0%, 100% { transform: translateY(0px) scaleY(1); }
          50% { transform: translateY(-10px) scaleY(1.02); }
        }
        
        @keyframes float-path-2 {
          0%, 100% { transform: translateY(0px) scaleX(1); }
          50% { transform: translateY(-15px) scaleX(1.01); }
        }
        
        @keyframes float-path-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.5deg); }
        }
      `}</style>
    </div>
  )
}

export default BackgroundPaths