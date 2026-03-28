import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const mockQuestions = [
  {
    id: 1,
    question: "Which of the following is/are the fundamental rights guaranteed by the Indian Constitution?",
    options: [
      "Right to Equality",
      "Right to Freedom",
      "Right against Exploitation",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 2,
    question: "The concept of 'Judicial Review' in the Indian Constitution has been borrowed from which country?",
    options: [
      "United Kingdom",
      "United States of America",
      "France",
      "Germany"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which Article of the Indian Constitution deals with the Right to Constitutional Remedies?",
    options: [
      "Article 19",
      "Article 21",
      "Article 32",
      "Article 14"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "The Planning Commission of India was replaced by which institution?",
    options: [
      "Finance Commission",
      "NITI Aayog",
      "Reserve Bank of India",
      "Election Commission"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Who is known as the 'Father of the Indian Constitution'?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Dr. B.R. Ambedkar",
      "Sardar Vallabhbhai Patel"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "The monsoon winds in India are caused by which phenomenon?",
    options: [
      "Differential heating of land and sea",
      "Earth's rotation",
      "Trade winds",
      "Jet streams"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Which is the highest civilian award in India?",
    options: [
      "Padma Vibhushan",
      "Padma Bhushan",
      "Bharat Ratna",
      "Padma Shri"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "The First Five Year Plan of India was based on which model?",
    options: [
      "Mahalanobis Model",
      "Harrod-Domar Model",
      "Lewis Model",
      "Solow Model"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Which amendment to the Constitution added the words 'Socialist', 'Secular' to the Preamble?",
    options: [
      "42nd Amendment",
      "44th Amendment",
      "52nd Amendment",
      "73rd Amendment"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "The Poona Pact was signed between whom?",
    options: [
      "Gandhi and Jinnah",
      "Gandhi and Ambedkar",
      "Nehru and Patel",
      "Gandhi and British Government"
    ],
    correctAnswer: 1
  }
];

export function TestInterface() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(mockQuestions.length).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [showResults, setShowResults] = useState(false);

  const question = mockQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / mockQuestions.length) * 100;

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === mockQuestions[index].correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / mockQuestions.length) * 100;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className={`w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center ${
              percentage >= 80 ? 'bg-green-50' :
              percentage >= 60 ? 'bg-yellow-50' :
              'bg-red-50'
            }`}
          >
            <CheckCircle2 className={`w-16 h-16 ${
              percentage >= 80 ? 'text-green-500' :
              percentage >= 60 ? 'text-yellow-500' :
              'text-red-500'
            }`} />
          </motion.div>

          <h2 className="text-3xl font-semibold text-foreground mb-2">
            Test Completed!
          </h2>
          <p className="text-muted-foreground mb-8">
            Here are your results
          </p>

          <div className="bg-accent rounded-2xl p-8 mb-8">
            <div className="text-6xl font-semibold text-primary mb-2">
              {score}/{mockQuestions.length}
            </div>
            <div className="text-2xl text-muted-foreground mb-4">
              {percentage.toFixed(0)}% Correct
            </div>
            <div className="text-sm text-muted-foreground">
              {percentage >= 80 ? 'Excellent performance! Keep it up!' :
               percentage >= 60 ? 'Good job! Keep practicing to improve.' :
               'Keep studying and try again!'}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => {
                setCurrentQuestion(0);
                setSelectedAnswers(new Array(mockQuestions.length).fill(null));
                setShowResults(false);
              }}
              className="rounded-xl"
            >
              Retry Test
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl">
              Review Answers
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              UPSC Practice Test
            </h3>
            <p className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {mockQuestions.length}
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-accent rounded-xl">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-primary"
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-6"
        >
          <div className="mb-8">
            <div className="text-sm text-primary font-medium mb-3">
              Question {currentQuestion + 1}
            </div>
            <h2 className="text-2xl font-semibold text-foreground leading-relaxed">
              {question.question}
            </h2>
          </div>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => handleSelectOption(index)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/30 hover:bg-accent'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}
                  >
                    {selectedAnswers[currentQuestion] === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="w-2 h-2 bg-white rounded-full"
                      />
                    )}
                  </div>
                  <span className="text-foreground">{option}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="lg"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="rounded-xl"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Previous
        </Button>

        <div className="flex gap-2">
          {mockQuestions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentQuestion
                  ? 'bg-primary w-8'
                  : selectedAnswers[index] !== null
                  ? 'bg-primary/30'
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>

        {currentQuestion === mockQuestions.length - 1 ? (
          <Button
            size="lg"
            onClick={handleSubmit}
            className="rounded-xl"
          >
            Submit Test
            <CheckCircle2 className="ml-2 w-4 h-4" />
          </Button>
        ) : (
          <Button
            size="lg"
            onClick={handleNext}
            className="rounded-xl"
          >
            Next
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
