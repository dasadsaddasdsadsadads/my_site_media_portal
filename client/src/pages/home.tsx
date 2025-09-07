import { motion } from "framer-motion";
import { Link } from "wouter";
import { GraduationCap, Film, Music, Book } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const sections = [
    {
      title: "Обучение",
      icon: <GraduationCap className="w-12 h-12 text-white" />,
      description: "Курсы, лекции и статьи для саморазвития",
      color: "from-indigo-500 to-purple-500",
      buttonColor: "bg-indigo-500 hover:bg-indigo-600",
      path: "/education",
    },
    {
      title: "Фильмы",
      icon: <Film className="w-12 h-12 text-white" />,
      description: "Смотрите последние фильмы и сериалы",
      color: "from-pink-500 to-red-500",
      buttonColor: "bg-pink-500 hover:bg-pink-600",
      path: "/movies",
    },
    {
      title: "Музыка",
      icon: <Music className="w-12 h-12 text-white" />,
      description: "Слушайте любимые треки и альбомы",
      color: "from-green-500 to-teal-500",
      buttonColor: "bg-green-500 hover:bg-green-600",
      path: "/music",
    },
    {
      title: "Книги",
      icon: <Book className="w-12 h-12 text-white" />,
      description: "Читайте книги и новинки литературы",
      color: "from-yellow-500 to-orange-500",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      path: "/books",
    },
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Добро пожаловать в ЛАЗ! 😊
          </h2>
        </div>
      </section>

      {/* Sections Grid */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Link href={section.path}>
              <Card 
                className="rounded-2xl shadow-lg overflow-hidden bg-card hover:shadow-2xl transition-shadow cursor-pointer hover-scale"
                data-testid={`card-${section.path.slice(1)}`}
              >
                <CardContent className="p-6 text-center">
                  <div 
                    className={`mx-auto mb-4 p-4 rounded-full bg-gradient-to-r ${section.color} w-20 h-20 flex items-center justify-center`}
                  >
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {section.description}
                  </p>
                  <Button 
                    className={`w-full ${section.buttonColor} text-white transition-colors`}
                    data-testid={`button-${section.path.slice(1)}`}
                  >
                    Перейти
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
