import React, { useState, useEffect } from 'react';
import './results.css';

const EnhancedResults = ({ result, userName, partnerName, onRetakeQuiz, onGenerateDateIdeas }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showDateSuggestion, setShowDateSuggestion] = useState(false);
  const [compatibility, setCompatibility] = useState(0);
  const [relationshipInsights, setRelationshipInsights] = useState([]);
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [confetti, setConfetti] = useState(false);
  
  // Generate relationship insights based on answers
  useEffect(() => {
    // This would be based on actual quiz answers in a real implementation
    const insights = [
      {
        title: "Communication Strength",
        score: 85,
        description: "You both value open dialogue and express yourselves clearly. Continue making time for meaningful conversations.",
        tip: "Try the '36 Questions That Lead to Love' for even deeper connection."
      },
      {
        title: "Emotional Connection",
        score: 90,
        description: "Your emotional bond is powerful. You understand each other's feelings and provide strong support.",
        tip: "Create a weekly ritual where you share your highs and lows of the week."
      },
      {
        title: "Shared Values",
        score: 75,
        description: "You share many core values with some differences that add healthy diversity to your relationship.",
        tip: "Explore each other's 'why' behind important decisions to deepen understanding."
      },
      {
        title: "Conflict Resolution",
        score: 70,
        description: "You have a good foundation for resolving disagreements, but there's room for improvement.",
        tip: "Try the 'speaker-listener' technique - one person speaks while the other listens without interrupting."
      },
      {
        title: "Growth Potential",
        score: 95,
        description: "Your relationship has exceptional potential for growth and deepening over time.",
        tip: "Set relationship goals together every 3-6 months to keep growing as a couple."
      }
    ];
    
    setRelationshipInsights(insights);
  }, []);

  // Animate score counting up
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setShowDescription(true);
      setTimeout(() => setShowActions(true), 1000);
      setTimeout(() => setShowDateSuggestion(true), 2000);
      
      if (result.score > 80) {
        setTimeout(() => setConfetti(true), 500);
        setTimeout(() => setConfetti(false), 5000);
      }
    }, 1500);
    
    const scoreInterval = setInterval(() => {
      setCompatibility(prev => {
        if (prev < result.score) {
          return prev + 1;
        } else {
          clearInterval(scoreInterval);
          return result.score;
        }
      });
    }, 20);
    
    return () => {
      clearTimeout(timer);
      clearInterval(scoreInterval);
    };
  }, [result.score]);

  const generateDateRecommendation = () => {
    // This would be based on quiz answers in real implementation
    const dateIdeas = [
      "Cook a meal from a country you both want to visit",
      "Take a dance class together",
      "Go stargazing with a thermos of hot chocolate",
      "Create art together - painting, pottery, or photography",
      "Take a day trip to somewhere new within driving distance"
    ];
    
    return dateIdeas[Math.floor(Math.random() * dateIdeas.length)];
  };
  
  const handleInsightClick = (insight) => {
    setSelectedInsight(selectedInsight === insight ? null : insight);
  };

  return (
    <div className="enhanced-results">
      {confetti && <div className="confetti-container">{[...Array(50)].map((_, i) => (
        <div key={i} className="confetti" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          backgroundColor: ['#FF4D4D', '#FFD700', '#FF8C00', '#7FFF00', '#32CD32'][Math.floor(Math.random() * 5)]
        }}></div>
      ))}</div>}
      
      <h1 className="results-title">Your Love Compatibility Results</h1>
      
      <div className={`compatibility-meter ${isAnimating ? 'animating' : ''}`}>
        <div className="meter-circle">
          <svg viewBox="0 0 100 100">
            <circle
              className="meter-bg"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="10"
            />
            <circle
              className="meter-progress"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e74c3c"
              strokeWidth="10"
              strokeDasharray={`${2 * Math.PI * 45 * (compatibility / 100)} ${2 * Math.PI * 45 * (1 - compatibility / 100)}`}
              strokeDashoffset={2 * Math.PI * 45 * 0.25}
              transform="rotate(-90 50 50)"
            />
            <text
              x="50"
              y="45"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="22"
              fontWeight="bold"
              fill="#333"
            >
              {compatibility}%
            </text>
            <text
              x="50"
              y="65"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fill="#666"
            >
              MATCH
            </text>
          </svg>
        </div>
        
        <h2 className={`compatibility-level ${isAnimating ? 'fade-in' : ''}`}>{result.compatibility}</h2>
      </div>
      
      <div className={`result-description ${showDescription ? 'fade-in' : ''}`}>
        <div className="pulse-heart">❤️</div>
        <p>{userName} & {partnerName}, {result.description}</p>
      </div>
      
      <div className={`relationship-insights ${showDescription ? 'fade-in' : ''}`}>
        <h3>Relationship Insights</h3>
        <div className="insights-container">
          {relationshipInsights.map((insight, index) => (
            <div 
              key={index} 
              className={`insight-card ${selectedInsight === insight ? 'expanded' : ''}`}
              onClick={() => handleInsightClick(insight)}
            >
              <div className="insight-header">
                <h4>{insight.title}</h4>
                <div className="insight-score">
                  <div className="score-bar">
                    <div className="score-fill" style={{ width: `${insight.score}%` }}></div>
                  </div>
                  <span>{insight.score}%</span>
                </div>
              </div>
              
              {selectedInsight === insight && (
                <div className="insight-details">
                  <p>{insight.description}</p>
                  <div className="insight-tip">
                    <span>Relationship Tip:</span> {insight.tip}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {showDateSuggestion && (
        <div className="date-suggestion fade-in">
          <h3>Your Perfect First Date</h3>
          <div className="date-idea">
            <div className="date-icon">💫</div>
            <p>{generateDateRecommendation()}</p>
          </div>
          <button className="generate-more-btn" onClick={onGenerateDateIdeas}>
            Get More Date Ideas →
          </button>
        </div>
      )}
      
      <div className={`result-actions ${showActions ? 'fade-in' : ''}`}>
        <div className="share-results">
          <h4>Share Your Results</h4>
          <div className="social-buttons">
            <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn facebook">
                Facebook
            </a>
            <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Check out our Love Compatibility Results! 💘")}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn twitter">
                Twitter
            </a>
            <a
                href={`https://wa.me/?text=${encodeURIComponent("Check out our Love Compatibility Results! 💘 " + window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn whatsapp">
                WhatsApp
            </a>
            </div>
        </div>
        
        <button className="retake-quiz-btn" onClick={onRetakeQuiz}>
          Take Quiz Again
        </button>
        
        <div className="premium-offer">
          <h4>Want a Deeper Analysis?</h4>
          <p>Get a personalized 10-page compatibility report!</p>
          <button className="premium-btn">
            Unlock Premium Report
          </button>
        </div>
      </div>
      
      <div className={`compatibility-history ${showActions ? 'fade-in' : ''}`}>
        <h3>Compare With Past Relationships</h3>
        <p>Sign in to save your results and compare with past or future relationship compatibility tests.</p>
        <button className="sign-in-btn">Sign In / Create Account</button>
      </div>
    </div>
  );
};

export default EnhancedResults;