import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb,
  TrendingUp,
  Target
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';

export function AnswerEvaluator() {
  const [answer, setAnswer] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluation, setEvaluation] = useState<any>(null);

  const handleEvaluate = () => {
    setIsEvaluating(true);
    
    // Simulate AI evaluation
    setTimeout(() => {
      setEvaluation({
        score: 8,
        totalScore: 10,
        strengths: [
          "Clear understanding of the fundamental concepts",
          "Well-structured answer with logical flow",
          "Good use of relevant examples and case studies",
          "Appropriate use of technical terminology"
        ],
        weaknesses: [
          "Could include more recent developments and current affairs",
          "Missing some key constitutional provisions",
          "Conclusion could be more impactful"
        ],
        suggestions: [
          "Include reference to recent amendments and judicial pronouncements",
          "Add more statistical data to support your arguments",
          "Structure your answer using subheadings for better readability",
          "Conclude with a forward-looking perspective"
        ]
      });
      setIsEvaluating(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-semibold text-foreground mb-2">
          AI Answer Evaluator
        </h2>
        <p className="text-muted-foreground">
          Write your answer and get instant AI-powered feedback with detailed analysis
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Question
              </h3>
              <p className="text-foreground leading-relaxed">
                Discuss the significance of the Fundamental Rights enshrined in the Indian 
                Constitution. How do they balance individual liberty with social justice?
              </p>
            </div>
            <div className="text-xs text-muted-foreground bg-accent px-3 py-2 rounded-lg">
              Word limit: 250 words • Time: 15 minutes
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="mb-4">
              <label className="text-lg font-semibold text-foreground block mb-2">
                Your Answer
              </label>
              <p className="text-sm text-muted-foreground mb-4">
                Write your answer below to get detailed AI evaluation
              </p>
            </div>
            <Textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Start typing your answer here..."
              className="min-h-[300px] text-base leading-relaxed rounded-xl border-2 focus:border-primary resize-none"
            />
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-muted-foreground">
                {answer.split(/\s+/).filter(word => word.length > 0).length} words
              </span>
              <Button
                onClick={handleEvaluate}
                disabled={answer.length < 50 || isEvaluating}
                size="lg"
                className="rounded-xl"
              >
                {isEvaluating ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                    Evaluating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 w-4 h-4" />
                    Evaluate Answer
                  </>
                )}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Evaluation Results */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {!evaluation ? (
            <div className="bg-card border border-border rounded-2xl p-12 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Ready to evaluate
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Write your answer and click "Evaluate Answer" to get instant AI-powered 
                  feedback with detailed insights
                </p>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Score Card */}
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Your Score</h3>
                  <TrendingUp className="w-6 h-6 opacity-80" />
                </div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-6xl font-semibold">{evaluation.score}</span>
                  <span className="text-3xl text-white/70 mb-2">/ {evaluation.totalScore}</span>
                </div>
                <p className="text-white/80">
                  {evaluation.score >= 8 ? 'Excellent answer!' :
                   evaluation.score >= 6 ? 'Good attempt!' :
                   'Keep practicing!'}
                </p>
              </div>

              {/* Strengths */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Strengths</h3>
                </div>
                <ul className="space-y-3">
                  {evaluation.strengths.map((strength: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-3 text-sm text-foreground"
                    >
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{strength}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Areas to Improve</h3>
                </div>
                <ul className="space-y-3">
                  {evaluation.weaknesses.map((weakness: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-3 text-sm text-foreground"
                    >
                      <span className="text-yellow-500 mt-0.5">!</span>
                      <span>{weakness}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Suggestions */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Suggestions</h3>
                </div>
                <ul className="space-y-3">
                  {evaluation.suggestions.map((suggestion: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-3 text-sm text-foreground"
                    >
                      <span className="text-blue-500 mt-0.5">→</span>
                      <span>{suggestion}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-xl"
                onClick={() => {
                  setAnswer('');
                  setEvaluation(null);
                }}
              >
                Evaluate Another Answer
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
