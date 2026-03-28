import { Outlet, Link, useLocation } from 'react-router';
import { 
  LayoutDashboard, 
  FileText, 
  PenTool, 
  MessageSquare, 
  BookOpen,
  Brain,
  User,
  LogOut
} from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { path: '/app', icon: LayoutDashboard, label: 'Dashboard', exact: true },
  { path: '/app/tests', icon: FileText, label: 'Tests' },
  { path: '/app/evaluator', icon: PenTool, label: 'Evaluator' },
  { path: '/app/chatbot', icon: MessageSquare, label: 'Chatbot' },
  { path: '/app/materials', icon: BookOpen, label: 'Materials' },
];

export function AppLayout() {
  const location = useLocation();

  const isActive = (path: string, exact?: boolean) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg text-foreground">UPSC Mentor AI</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const active = isActive(item.path, item.exact);
            return (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    active
                      ? 'bg-primary text-white shadow-lg shadow-primary/25'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-accent cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground truncate">Student Name</div>
              <div className="text-xs text-muted-foreground truncate">student@email.com</div>
            </div>
            <LogOut className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-border">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">
                {navItems.find(item => isActive(item.path, item.exact))?.label || 'Dashboard'}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <User className="w-5 h-5 text-muted-foreground" />
              </motion.button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
