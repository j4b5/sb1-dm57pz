import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Code, FileSpreadsheet, Users, ArrowRight, Play } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-center">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">FinanceCode</span>
          </div>
          <div className="flex items-center gap-6">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>
        </nav>

        <h1 className="text-5xl font-bold mb-6">
          Master <span className="text-blue-400">Financial Programming</span>
          <br />
          With Our Specialized Courses
        </h1>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Learn essential skills in Excel, Python, and Web Development for finance.
          Start your journey to becoming a financial technology expert today.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700">Book A Demo</Button>
          <Button variant="outline" className="gap-2">
            How it Works <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Course Tracks Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Comprehensive <span className="text-blue-400">Learning Tracks</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 bg-zinc-900 border-zinc-800">
            <FileSpreadsheet className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Excel for Finance</h3>
            <p className="text-gray-400 mb-4">Master financial modeling, data analysis, and reporting using Microsoft Excel.</p>
            <Progress value={33} className="mb-4" />
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Start Learning
            </Button>
          </Card>

          <Card className="p-6 bg-zinc-900 border-zinc-800">
            <Code className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Python for Markets</h3>
            <p className="text-gray-400 mb-4">Learn Python programming for stock market analysis and algorithmic trading.</p>
            <Progress value={45} className="mb-4" />
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Start Learning
            </Button>
          </Card>

          <Card className="p-6 bg-zinc-900 border-zinc-800">
            <BookOpen className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Financial Web Dev</h3>
            <p className="text-gray-400 mb-4">Build interactive financial dashboards and analytics tools using web technologies.</p>
            <Progress value={60} className="mb-4" />
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Start Learning
            </Button>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 bg-zinc-900">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Powerful <span className="text-blue-400">Features</span> For Seamless Learning
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-zinc-800 p-6 rounded-xl inline-block mb-4">
              <Play className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Interactive Lessons</h3>
            <p className="text-gray-400">Learn by doing with our hands-on interactive coding exercises.</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-zinc-800 p-6 rounded-xl inline-block mb-4">
              <Users className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Community Support</h3>
            <p className="text-gray-400">Connect with fellow learners and get help when you need it.</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-zinc-800 p-6 rounded-xl inline-block mb-4">
              <BookOpen className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Structured Learning</h3>
            <p className="text-gray-400">Follow a clear path with our module-based progression system.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;