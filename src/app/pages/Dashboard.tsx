import { motion } from 'motion/react';
import { 
  FileText, 
  TrendingUp, 
  Award, 
  Clock,
  ArrowUpRight,
  Target
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const performanceData = [
  { date: 'Jan', score: 65 },
  { date: 'Feb', score: 68 },
  { date: 'Mar', score: 72 },
  { date: 'Apr', score: 70 },
  { date: 'May', score: 76 },
  { date: 'Jun', score: 80 },
  { date: 'Jul', score: 82 },
];

const subjectData = [
  { subject: 'History', score: 85 },
  { subject: 'Polity', score: 78 },
  { subject: 'Geography', score: 82 },
  { subject: 'Economy', score: 75 },
  { subject: 'Science', score: 88 },
];

const recentTests = [
  { id: 1, name: 'History - Ancient India', score: 85, total: 100, date: 'Mar 26, 2026' },
  { id: 2, name: 'Polity - Constitution', score: 78, total: 100, date: 'Mar 25, 2026' },
  { id: 3, name: 'Geography - Physical', score: 92, total: 100, date: 'Mar 24, 2026' },
  { id: 4, name: 'Economy - Basics', score: 70, total: 100, date: 'Mar 23, 2026' },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-foreground mb-2">
          Welcome back, Student! 👋
        </h2>
        <p className="text-muted-foreground">
          Here's your learning progress and insights
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                {stat.trend && (
                  <div className="flex items-center gap-1 text-green-500 text-sm">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>{stat.trend}</span>
                  </div>
                )}
              </div>
              <div className="text-3xl font-semibold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Performance Over Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card border border-border rounded-2xl p-6"
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              Performance Trend
            </h3>
            <p className="text-sm text-muted-foreground">
              Your average score over the last 7 months
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1E40AF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#1E40AF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis 
                dataKey="date" 
                stroke="#64748B"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#64748B"
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '12px'
                }}
              />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#1E40AF"
                strokeWidth={3}
                fill="url(#scoreGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Subject-wise Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-card border border-border rounded-2xl p-6"
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              Subject Performance
            </h3>
            <p className="text-sm text-muted-foreground">
              Average scores across different subjects
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis 
                dataKey="subject" 
                stroke="#64748B"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#64748B"
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '12px'
                }}
              />
              <Bar
                dataKey="score"
                fill="#1E40AF"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Tests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-card border border-border rounded-2xl p-6"
      >
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-1">
            Recent Tests
          </h3>
          <p className="text-sm text-muted-foreground">
            Your latest test performances
          </p>
        </div>
        <div className="space-y-3">
          {recentTests.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-accent transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <FileText className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-foreground mb-1">
                    {test.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {test.date}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold text-foreground">
                  {test.score}
                  <span className="text-base text-muted-foreground">/{test.total}</span>
                </div>
                <div className={`text-sm ${
                  test.score >= 80 ? 'text-green-500' :
                  test.score >= 60 ? 'text-yellow-500' :
                  'text-red-500'
                }`}>
                  {test.score >= 80 ? 'Excellent' :
                   test.score >= 60 ? 'Good' : 'Needs Work'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white">
          <Target className="w-12 h-12 mb-4 opacity-80" />
          <h3 className="text-2xl font-semibold mb-2">Ready for a test?</h3>
          <p className="text-white/80 mb-6">
            Challenge yourself with a new practice test
          </p>
          <button className="bg-white text-primary px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors">
            Start Test
          </button>
        </div>
        <div className="bg-gradient-to-br from-foreground to-foreground/90 rounded-2xl p-8 text-white">
          <Award className="w-12 h-12 mb-4 opacity-80" />
          <h3 className="text-2xl font-semibold mb-2">Need guidance?</h3>
          <p className="text-white/80 mb-6">
            Chat with our AI mentor for personalized help
          </p>
          <button className="bg-white text-foreground px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors">
            Open Chatbot
          </button>
        </div>
      </motion.div>
    </div>
  );
}

const stats = [
  {
    label: 'Total Tests',
    value: '42',
    icon: FileText,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-500',
    trend: '+12%'
  },
  {
    label: 'Average Score',
    value: '78%',
    icon: TrendingUp,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-500',
    trend: '+5%'
  },
  {
    label: 'Study Streak',
    value: '15 days',
    icon: Award,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-500',
    trend: null
  },
  {
    label: 'Time Spent',
    value: '68h',
    icon: Clock,
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-500',
    trend: '+8h'
  },
];
