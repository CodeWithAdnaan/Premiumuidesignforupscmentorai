import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Brain, 
  Target, 
  MessageSquare, 
  BookOpen, 
  TrendingUp, 
  Award,
  Check,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/button';

export function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-xl text-foreground">UPSC Mentor AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/app">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/app">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-accent-foreground/10 mb-6"
            >
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">AI-Powered UPSC Preparation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-semibold text-foreground mb-6 leading-tight"
            >
              Your AI-Powered UPSC <br />
              <span className="text-primary">Preparation Partner</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-muted-foreground mb-10 leading-relaxed"
            >
              Master your UPSC exam with AI-powered practice tests, instant answer evaluation,
              personalized study materials, and 24/7 intelligent guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/app">
                <Button size="lg" className="text-base px-8 h-12 rounded-xl">
                  Start Preparing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-base px-8 h-12 rounded-xl">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 relative"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl shadow-primary/5 overflow-hidden">
              <div className="bg-gradient-to-br from-primary/5 via-accent/30 to-primary/10 p-8 md:p-16">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                    <div className="mt-6 flex gap-2">
                      <div className="h-10 bg-primary/10 rounded flex-1"></div>
                      <div className="h-10 bg-primary/10 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-foreground mb-4">
              Everything you need to ace UPSC
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive tools designed for serious aspirants
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl p-12 md:p-16 text-white">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-5xl font-semibold mb-2">10,000+</div>
                <div className="text-white/80 text-lg">Practice Questions</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-5xl font-semibold mb-2">5,000+</div>
                <div className="text-white/80 text-lg">Students Enrolled</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-5xl font-semibold mb-2">95%</div>
                <div className="text-white/80 text-lg">Satisfaction Rate</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-semibold text-foreground mb-6">
                Why choose UPSC Mentor AI?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the next generation of UPSC preparation with our intelligent platform.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-accent via-primary/5 to-accent rounded-2xl p-8 space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-muted rounded w-32 mb-2"></div>
                      <div className="h-2 bg-muted rounded w-24"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-5/6"></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-semibold text-primary">85%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <div className="flex-1">
                      <div className="h-3 bg-muted rounded w-40 mb-2"></div>
                      <div className="h-2 bg-muted rounded w-28"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                Ready to start your journey?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Join thousands of successful UPSC aspirants who trust UPSC Mentor AI
                for their preparation.
              </p>
              <Link to="/app">
                <Button
                  size="lg"
                  className="bg-white text-foreground hover:bg-white/90 text-base px-8 h-12 rounded-xl"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-foreground">UPSC Mentor AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your intelligent companion for UPSC exam preparation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Study Materials</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2026 UPSC Mentor AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Target,
    title: "Practice Tests",
    description: "Access thousands of UPSC-style questions across all subjects with real-time scoring and detailed explanations."
  },
  {
    icon: Brain,
    title: "AI Answer Evaluation",
    description: "Get instant, detailed feedback on your answers with personalized suggestions for improvement."
  },
  {
    icon: MessageSquare,
    title: "24/7 AI Chatbot",
    description: "Ask any UPSC-related question anytime and get comprehensive, accurate answers instantly."
  },
  {
    icon: BookOpen,
    title: "Study Materials",
    description: "Comprehensive, curated content covering all UPSC subjects organized for efficient learning."
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your performance with detailed analytics and insights to optimize your preparation strategy."
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Learn from AI trained on successful UPSC preparation methodologies and expert knowledge."
  }
];

const benefits = [
  "Personalized learning paths based on your strengths and weaknesses",
  "Real-time feedback and detailed performance analytics",
  "Comprehensive coverage of all UPSC subjects and topics",
  "Practice with authentic exam-style questions",
  "Flexible study schedule that adapts to your pace",
  "Continuous updates with latest UPSC patterns and syllabus"
];
