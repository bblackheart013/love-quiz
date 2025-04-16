import React, { useState } from 'react';
import './index.css';
import './results.css';
import EnhancedResults from './EnhancedResults';

const LoveCompatibilityQuiz = () => {
  // Define questions BEFORE using them
  const questions = [
    {
      id: 'names',
      title: 'Basic Info',
      question: 'Let\'s start with your names',
      type: 'names',
    },
    {
      id: 'communication',
      title: 'Communication Style',
      question: 'How do you prefer to resolve conflicts?',
      options: [
        { value: 'a', text: 'Talk it out immediately, even if emotions are high' },
        { value: 'b', text: 'Take some time to cool off, then discuss calmly' },
        { value: 'c', text: 'Write down thoughts to organize them before talking' },
        { value: 'd', text: 'Seek help from a friend or mediator for perspective' }
      ]
    },
    {
      id: 'quality_time',
      title: 'Quality Time',
      question: 'What\'s your ideal way to spend time together?',
      options: [
        { value: 'a', text: 'Active adventures and trying new experiences' },
        { value: 'b', text: 'Quiet nights at home watching movies or cooking' },
        { value: 'c', text: 'Social gatherings with friends and family' },
        { value: 'd', text: 'Independent activities in the same space' }
      ]
    },
    {
      id: 'future_goals',
      title: 'Future Goals',
      question: 'How aligned are your future goals and ambitions?',
      options: [
        { value: 'a', text: 'Very aligned - we want the same things' },
        { value: 'b', text: 'Somewhat aligned - different paths but similar destinations' },
        { value: 'c', text: 'Complementary - different but supportive of each other' },
        { value: 'd', text: 'Still figuring it out - we\'re taking it day by day' }
      ]
    },
    {
      id: 'love_language',
      title: 'Love Languages',
      question: 'What\'s your primary love language?',
      options: [
        { value: 'a', text: 'Words of Affirmation - verbal expressions of love' },
        { value: 'b', text: 'Quality Time - focused attention on each other' },
        { value: 'c', text: 'Physical Touch - holding hands, hugs, kisses' },
        { value: 'd', text: 'Acts of Service - doing helpful things' },
        { value: 'e', text: 'Receiving Gifts - thoughtful presents' }
      ]
    },
    {
      id: 'partner_love_language',
      title: 'Partner\'s Love Language',
      question: 'What do you think is your partner\'s primary love language?',
      options: [
        { value: 'a', text: 'Words of Affirmation - verbal expressions of love' },
        { value: 'b', text: 'Quality Time - focused attention on each other' },
        { value: 'c', text: 'Physical Touch - holding hands, hugs, kisses' },
        { value: 'd', text: 'Acts of Service - doing helpful things' },
        { value: 'e', text: 'Receiving Gifts - thoughtful presents' }
      ]
    },
    {
      id: 'challenges',
      title: 'Relationship Challenges',
      question: 'What\'s the biggest challenge in your relationship?',
      options: [
        { value: 'a', text: 'Communication issues or misunderstandings' },
        { value: 'b', text: 'Different expectations or priorities' },
        { value: 'c', text: 'External stressors (work, family, etc.)' },
        { value: 'd', text: 'Trust or insecurity concerns' },
        { value: 'e', text: 'Different needs for space or togetherness' }
      ]
    },
    {
      id: 'strengths',
      title: 'Relationship Strengths',
      question: 'What\'s the greatest strength of your relationship?',
      options: [
        { value: 'a', text: 'Deep emotional connection and understanding' },
        { value: 'b', text: 'Shared values, interests, or goals' },
        { value: 'c', text: 'Ability to have fun and laugh together' },
        { value: 'd', text: 'Mutual respect and support' },
        { value: 'e', text: 'Growth - you make each other better people' }
      ]
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [partnerName, setPartnerName] = useState('');
  const [userName, setUserName] = useState('');
  
  console.log("Current step:", currentStep);
  console.log("Questions:", questions);
  console.log("Current question object:", questions[currentStep]);
  console.log("Answers so far:", answers);

  const calculateCompatibility = () => {
    // This is a simplified compatibility calculation
    const loveLangMatch = answers.love_language === answers.partner_love_language ? 20 : 10;
    
    let strengthPoints = 0;
    switch(answers.strengths) {
      case 'a': strengthPoints = 25; break;
      case 'b': strengthPoints = 20; break;
      case 'c': strengthPoints = 15; break;
      case 'd': strengthPoints = 25; break;
      case 'e': strengthPoints = 20; break;
      default: strengthPoints = 15;
    }
    
    let challengeAdjustment = 0;
    switch(answers.challenges) {
      case 'a': challengeAdjustment = -5; break;
      case 'b': challengeAdjustment = -10; break;
      case 'c': challengeAdjustment = -5; break;
      case 'd': challengeAdjustment = -15; break;
      case 'e': challengeAdjustment = -10; break;
      default: challengeAdjustment = -5;
    }
    
    let futurePoints = 0;
    switch(answers.future_goals) {
      case 'a': futurePoints = 25; break;
      case 'b': futurePoints = 20; break;
      case 'c': futurePoints = 15; break;
      case 'd': futurePoints = 10; break;
      default: futurePoints = 10;
    }
    
    let score = 30 + loveLangMatch + strengthPoints + challengeAdjustment + futurePoints;
    score = Math.max(0, Math.min(100, score));
    
    let compatibility = '';
    let description = '';
    
    if (score >= 90) {
      compatibility = 'Soulmate Connection';
      description = `You and ${partnerName} share a rare and profound connection. Your relationship has strong foundations in mutual understanding, shared values, and complementary approaches to life. With continued open communication and growth, this relationship has incredible potential.`;
    } else if (score >= 75) {
      compatibility = 'Strong Compatibility';
      description = `You and ${partnerName} have a strong foundation for lasting love. Your connection shows excellent potential with healthy communication patterns and aligned values. Focus on understanding each other's love languages to strengthen your bond even further.`;
    } else if (score >= 60) {
      compatibility = 'Good Compatibility';
      description = `You and ${partnerName} have good compatibility with room to grow together. Your relationship has solid elements that can be built upon. Working on communication and understanding each other's needs will help strengthen your connection.`;
    } else if (score >= 45) {
      compatibility = 'Moderate Compatibility';
      description = `You and ${partnerName} have some compatible elements but face challenges that require attention. With conscious effort and open communication, you can improve your understanding of each other and build a stronger relationship.`;
    } else {
      compatibility = 'Growth Opportunity';
      description = `You and ${partnerName} may be experiencing some fundamental differences in how you approach relationships. This represents an opportunity for growth and learning. Consider discussing your expectations and needs openly, and perhaps seeking relationship guidance.`;
    }
    
    return {
      score,
      compatibility,
      description
    };
  };

  const handleOptionSelect = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  const handleNameInput = () => {
    if (userName && partnerName) {
      setAnswers({
        ...answers,
        names: { user: userName, partner: partnerName }
      });
      handleNext();
    } else {
      alert('Please enter both names to continue');
    }
  };

  const handleNext = () => {
    if (currentStep === questions.length - 1) {
      setResult(calculateCompatibility());
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
    setPartnerName('');
    setUserName('');
  };

  const renderProgressBar = () => {
    const progress = (currentStep / (questions.length - 1)) * 100;
    
    return (
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    );
  };

  const renderCompatibilityMeter = () => {
    return (
      <div className="compatibility-meter">
        <div className="meter-circle">
          <svg viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#ffffff"
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 45 * (result.score / 100)} ${2 * Math.PI * 45 * (1 - result.score / 100)}`}
              strokeDashoffset={2 * Math.PI * 45 * 0.25}
              transform="rotate(-90 50 50)"
            />
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="24"
              fontWeight="bold"
              fill="#ffffff"
            >
              {result.score}%
            </text>
          </svg>
        </div>
        <h3 className="compatibility-level">{result.compatibility}</h3>
      </div>
    );
  };

  // Render names input step
  const renderNamesStep = () => {
    return (
      <div className="quiz-container w-full max-w-xl mx-auto p-4 sm:p-8 rounded-lg">
        <h2>{questions[currentStep].title}</h2>
        <p>{questions[currentStep].question}</p>
        
        <div className="names-input">
          <div className="input-group">
            <label>Your Name</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your name"
              className="w-full p-3 text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          
          <div className="input-group">
            <label>Your Partner's Name</label>
            <input
              type="text"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              placeholder="Partner's name"
              className="w-full p-3 text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          
          <button 
            className="continue-btn w-full sm:w-auto py-3 px-6 mt-4 bg-white text-red-500 rounded-md font-semibold hover:bg-gray-100 transition-all"
            onClick={handleNameInput}
          >
            Continue
          </button>
        </div>
      </div>
    );
  };

  // Render multiple choice step
  const renderMultipleChoiceStep = () => {
    const question = questions[currentStep];
    
    return (
      <div className="quiz-container w-full max-w-xl mx-auto p-4 sm:p-8 rounded-lg">
        <h2>{question.title}</h2>
        <p>{question.question}</p>
        
        <div className="options-container space-y-3 my-6">
          {question.options.map((option) => (
            <div 
              key={option.value}
              className={`option text-sm sm:text-base px-4 py-3 rounded-md transition border border-white hover:bg-white/20 ${
                answers[question.id] === option.value ? 'bg-white/30 border-white' : 'bg-white/10'
              }`}
              onClick={() => handleOptionSelect(question.id, option.value)}
            >
              {option.text}
            </div>
          ))}
        </div>
        
        <div className="nav-buttons flex flex-col sm:flex-row gap-4 justify-between mt-6">
          <button 
            className="prev-btn w-full sm:w-auto py-2 px-4 bg-transparent border border-white text-white rounded-md hover:bg-white/10 transition-all"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button 
            className="next-btn w-full sm:w-auto py-2 px-4 bg-white text-red-500 rounded-md font-semibold hover:bg-gray-100 transition-all"
            onClick={handleNext}
            disabled={!answers[question.id]}
          >
            {currentStep === questions.length - 1 ? 'See Results' : 'Next'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="love-quiz-page px-4 sm:px-8 md:px-16">
      <header className="site-header py-4 px-6 flex justify-between items-center bg-red-500 text-white">
        <span className="site-name text-xl font-bold">yourmove.ai</span>
        
        <nav className="hidden md:flex space-x-6">
          <a href="/chat-assistant" className="hover:underline">Chat Assistant</a>
          <a href="/profile-writer" className="hover:underline">Profile Writer</a>
          <a href="/profile-review" className="hover:underline">Profile Review</a>
          <a href="/ai-photos" className="hover:underline">AI Enhanced Photos</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/affiliate" className="hover:underline">Affiliate</a>
        </nav>
        
        <button className="get-started-btn py-2 px-4 bg-white text-red-500 rounded-md font-semibold">Get Started</button>
      </header>
      
      <main className="max-w-4xl mx-auto py-8">
        <section className="quiz-header mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Love Compatibility Quiz
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center mt-2">
            Discover how compatible you are with your partner
          </p>
        </section>
        
        {!result && renderProgressBar()}
        
        {result ? (
          <EnhancedResults 
            result={result}
            userName={userName}
            partnerName={partnerName}
            onRetakeQuiz={handleRestart}
            onGenerateDateIdeas={() => window.location.href = '/date-ideas'}
          />
        ) : (
          currentStep === 0 ? renderNamesStep() : renderMultipleChoiceStep()
        )}
      </main>
    </div>
  );
};

export default LoveCompatibilityQuiz;