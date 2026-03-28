import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Download, 
  Eye,
  FileText,
  Globe,
  Landmark,
  TrendingUp,
  Leaf,
  Microscope,
  Map,
  Search
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const categories = [
  {
    id: 'history',
    name: 'History',
    icon: Landmark,
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
    count: 45
  },
  {
    id: 'polity',
    name: 'Polity',
    icon: Landmark,
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    count: 38
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: Map,
    color: 'bg-green-50',
    iconColor: 'text-green-500',
    count: 42
  },
  {
    id: 'economy',
    name: 'Economy',
    icon: TrendingUp,
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    count: 36
  },
  {
    id: 'environment',
    name: 'Environment',
    icon: Leaf,
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
    count: 28
  },
  {
    id: 'science',
    name: 'Science & Tech',
    icon: Microscope,
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
    count: 32
  },
  {
    id: 'international',
    name: 'International Relations',
    icon: Globe,
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
    count: 25
  },
  {
    id: 'current',
    name: 'Current Affairs',
    icon: FileText,
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-500',
    count: 52
  }
];

const materials = [
  {
    id: 1,
    title: 'Ancient Indian History - Indus Valley Civilization',
    category: 'History',
    type: 'PDF',
    pages: 45,
    size: '2.5 MB',
    updated: 'Mar 25, 2026'
  },
  {
    id: 2,
    title: 'Indian Constitution - Fundamental Rights',
    category: 'Polity',
    type: 'PDF',
    pages: 38,
    size: '1.8 MB',
    updated: 'Mar 24, 2026'
  },
  {
    id: 3,
    title: 'Physical Geography - Climate and Weather',
    category: 'Geography',
    type: 'PDF',
    pages: 52,
    size: '3.2 MB',
    updated: 'Mar 23, 2026'
  },
  {
    id: 4,
    title: 'Indian Economy - Economic Planning',
    category: 'Economy',
    type: 'PDF',
    pages: 41,
    size: '2.1 MB',
    updated: 'Mar 22, 2026'
  },
  {
    id: 5,
    title: 'Medieval India - Mughal Empire',
    category: 'History',
    type: 'PDF',
    pages: 48,
    size: '2.8 MB',
    updated: 'Mar 21, 2026'
  },
  {
    id: 6,
    title: 'Environmental Issues - Climate Change',
    category: 'Environment',
    type: 'PDF',
    pages: 35,
    size: '1.9 MB',
    updated: 'Mar 20, 2026'
  },
  {
    id: 7,
    title: 'Modern Indian History - Freedom Struggle',
    category: 'History',
    type: 'PDF',
    pages: 56,
    size: '3.5 MB',
    updated: 'Mar 19, 2026'
  },
  {
    id: 8,
    title: 'Indian Polity - Union and Its Territory',
    category: 'Polity',
    type: 'PDF',
    pages: 32,
    size: '1.6 MB',
    updated: 'Mar 18, 2026'
  }
];

export function StudyMaterials() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMaterials = materials.filter(material => {
    const matchesCategory = !selectedCategory || material.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-foreground mb-2">
          Study Materials
        </h2>
        <p className="text-muted-foreground">
          Comprehensive study materials covering all UPSC subjects
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative"
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search materials by topic or subject..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-14 rounded-xl border-2 text-base"
        />
      </motion.div>

      {/* Categories */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-semibold text-foreground mb-4"
        >
          Browse by Category
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => setSelectedCategory(
                selectedCategory === category.name ? null : category.name
              )}
              className={`group relative bg-card border-2 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all ${
                selectedCategory === category.name
                  ? 'border-primary bg-accent'
                  : 'border-border hover:border-primary/30'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className={`w-6 h-6 ${category.iconColor}`} />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground mb-1">
                  {category.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {category.count} materials
                </div>
              </div>
              {selectedCategory === category.name && (
                <motion.div
                  layoutId="selectedCategory"
                  className="absolute inset-0 border-2 border-primary rounded-2xl"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Materials List */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-between mb-4"
        >
          <h3 className="text-xl font-semibold text-foreground">
            {selectedCategory ? `${selectedCategory} Materials` : 'All Materials'}
            <span className="text-muted-foreground ml-2">
              ({filteredMaterials.length})
            </span>
          </h3>
          {selectedCategory && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="rounded-lg"
            >
              Clear Filter
            </Button>
          )}
        </motion.div>

        <div className="space-y-3">
          {filteredMaterials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all group"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex gap-4 flex-1">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <FileText className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground mb-2 text-lg">
                      {material.title}
                    </h4>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {material.pages} pages
                      </span>
                      <span>•</span>
                      <span>{material.size}</span>
                      <span>•</span>
                      <span className="px-2 py-1 bg-accent rounded-md text-xs font-medium">
                        {material.category}
                      </span>
                      <span>•</span>
                      <span>Updated {material.updated}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-lg"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card border border-border rounded-2xl p-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No materials found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
