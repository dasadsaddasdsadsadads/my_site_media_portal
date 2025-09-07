import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, GraduationCap, Star, Clock, Users, Play, BookOpen, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SearchInput from "@/components/search-input";
import { motion } from "framer-motion";

export default function Education() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const categories = [
    "Все",
    "Программирование",
    "Дизайн", 
    "Маркетинг",
    "Бизнес",
    "Языки"
  ];

  const courses = [
    {
      id: 1,
      title: "Основы React и TypeScript",
      instructor: "Анна Петрова",
      description: "Изучите современную разработку веб-приложений с React и TypeScript",
      duration: "8 часов",
      students: 1247,
      rating: 4.8,
      price: "4,999 ₽",
      category: "Программирование",
      level: "Начинающий",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "UI/UX Дизайн для начинающих",
      instructor: "Михаил Смирнов",
      description: "Научитесь создавать красивые и функциональные интерфейсы",
      duration: "12 часов",
      students: 892,
      rating: 4.6,
      price: "6,999 ₽",
      category: "Дизайн",
      level: "Начинающий",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Digital маркетинг 2025",
      instructor: "Елена Козлова",
      description: "Актуальные стратегии продвижения в социальных сетях",
      duration: "15 часов",
      students: 1456,
      rating: 4.9,
      price: "8,999 ₽",
      category: "Маркетинг",
      level: "Продвинутый",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Основы предпринимательства",
      instructor: "Дмитрий Волков",
      description: "От идеи до успешного бизнеса: пошаговое руководство",
      duration: "20 часов",
      students: 756,
      rating: 4.7,
      price: "12,999 ₽",
      category: "Бизнес",
      level: "Средний",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      title: "Английский для IT",
      instructor: "Sarah Johnson",
      description: "Технический английский для программистов и дизайнеров",
      duration: "25 часов",
      students: 2341,
      rating: 4.8,
      price: "7,999 ₽",
      category: "Языки",
      level: "Средний",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop"
    },
    {
      id: 6,
      title: "Advanced JavaScript",
      instructor: "Алексей Иванов",
      description: "Глубокое изучение JavaScript: от ES6 до современных фреймворков",
      duration: "30 часов",
      students: 1876,
      rating: 4.9,
      price: "15,999 ₽",
      category: "Программирование",
      level: "Продвинутый",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Все" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fade-in">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center mb-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="mr-4 hover:bg-white/20 p-2 rounded-lg transition-colors text-white"
                data-testid="button-back"
              >
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </Link>
            <div className="flex items-center">
              <GraduationCap className="w-8 h-8 mr-3" />
              <h1 className="text-3xl font-bold">Обучение</h1>
            </div>
          </div>
          <p className="text-lg opacity-90">
            Изучайте новые навыки и развивайтесь профессионально
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchInput
            placeholder="Поиск курсов..."
            value={searchQuery}
            onChange={setSearchQuery}
            className="max-w-md"
            focusColor="ring-indigo-500"
          />
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Категории</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className={`px-4 py-2 transition-colors cursor-pointer ${
                  selectedCategory === category
                    ? "bg-indigo-500 text-white hover:bg-indigo-600"
                    : "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
                }`}
                onClick={() => setSelectedCategory(category)}
                data-testid={`badge-category-${category.toLowerCase()}`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-xl shadow-lg overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 hover-scale">
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white/90 text-gray-800 font-medium">
                        {course.level}
                      </Badge>
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-indigo-500 text-white">
                        {course.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                    
                    <Button
                      className="w-full bg-indigo-500 hover:bg-indigo-600 text-white"
                      data-testid={`button-go-${course.id}`}
                    >
                      <BookOpen className="w-4 h-4 mr-1" />
                      Перейти
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <GraduationCap className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Курсы не найдены</h3>
            <p className="text-muted-foreground mb-6">
              Попробуйте изменить фильтры или поисковый запрос.
            </p>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Все");
              }}
              className="bg-indigo-500 hover:bg-indigo-600 text-white"
              data-testid="button-reset-filters"
            >
              Сбросить фильтры
            </Button>
          </div>
        )}
        
      </div>
    </div>
  );
}
