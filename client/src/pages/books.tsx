import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Book, Star, Bookmark, Eye, Heart, Download, Calendar, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import SearchInput from "@/components/search-input";
import { motion } from "framer-motion";

export default function Books() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Все жанры");
  const [selectedType, setSelectedType] = useState("Всё");

  const genres = [
    "Все жанры",
    "Фантастика",
    "Детектив",
    "Романы",
    "Научная литература",
    "Биографии",
    "История",
    "Поэзия"
  ];

  const types = ["Всё", "Книги", "Авторы", "Коллекции"];

  const books = [
    {
      id: 1,
      title: "Мастер и Маргарита",
      author: "Михаил Булгаков",
      genre: "Романы",
      year: 1967,
      pages: 448,
      rating: 4.8,
      description: "Классика русской литературы о любви, прощении и вечных вопросах",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop",
      readingProgress: 75,
      isReading: true,
      downloads: "2.1М"
    },
    {
      id: 2,
      title: "1984",
      author: "Джордж Оруэлл",
      genre: "Фантастика",
      year: 1949,
      pages: 328,
      rating: 4.9,
      description: "Антиутопия о тоталитарном обществе и контроле над сознанием",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop",
      readingProgress: 0,
      isReading: false,
      downloads: "1.8М"
    },
    {
      id: 3,
      title: "Преступление и наказание",
      author: "Фёдор Достоевский",
      genre: "Романы",
      year: 1866,
      pages: 671,
      rating: 4.7,
      description: "Психологический роман о нравственных дилеммах человека",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop",
      readingProgress: 45,
      isReading: true,
      downloads: "987К"
    },
    {
      id: 4,
      title: "Маленький принц",
      author: "Антуан де Сент-Экзюпери",
      genre: "Фантастика",
      year: 1943,
      pages: 96,
      rating: 4.6,
      description: "Философская сказка о дружбе, любви и ответственности",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop",
      readingProgress: 100,
      isReading: false,
      downloads: "3.2М"
    },
    {
      id: 5,
      title: "Гарри Поттер и философский камень",
      author: "Джоан Роулинг",
      genre: "Фантастика",
      year: 1997,
      pages: 432,
      rating: 4.9,
      description: "Первая книга о мальчике-волшебнике и его приключениях",
      image: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=300&h=450&fit=crop",
      readingProgress: 0,
      isReading: false,
      downloads: "5.1М"
    },
    {
      id: 6,
      title: "Шерлок Холмс: Полное собрание",
      author: "Артур Конан Дойл",
      genre: "Детектив",
      year: 1887,
      pages: 1248,
      rating: 4.8,
      description: "Полное собрание рассказов о великом сыщике",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop",
      readingProgress: 23,
      isReading: true,
      downloads: "1.4М"
    }
  ];

  const authors = [
    {
      id: 1,
      name: "Лев Толстой",
      genre: "Классика",
      booksCount: 15,
      followers: "2.3М",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Агата Кристи",
      genre: "Детектив",
      booksCount: 66,
      followers: "1.8М",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Стивен Кинг",
      genre: "Ужасы",
      booksCount: 64,
      followers: "1.5М",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop"
    }
  ];

  const collections = [
    {
      id: 1,
      title: "Классика русской литературы",
      description: "Лучшие произведения русских писателей",
      booksCount: 25,
      readers: "847К",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Научная фантастика",
      description: "Лучшие произведения в жанре научной фантастики",
      booksCount: 42,
      readers: "1.2М",
      image: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Современные бестселлеры",
      description: "Популярные книги последних лет",
      booksCount: 18,
      readers: "654К",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=200&fit=crop"
    }
  ];

  const filteredContent = () => {
    if (selectedType === "Книги") return books;
    if (selectedType === "Авторы") return authors;
    if (selectedType === "Коллекции") return collections;
    return books;
  };

  const filteredBooks = filteredContent().filter(item => {
    const matchesSearch = (item.title || item.name)?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (item.author || item.genre)?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "Все жанры" || item.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="fade-in">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-12">
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
              <Book className="w-8 h-8 mr-3" />
              <h1 className="text-3xl font-bold">Книги</h1>
            </div>
          </div>
          <p className="text-lg opacity-90">
            Читайте бестселлеры и открывайте новых авторов
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4">
          <SearchInput
            placeholder="Поиск книг, авторов, коллекций..."
            value={searchQuery}
            onChange={setSearchQuery}
            className="flex-1 max-w-md"
            focusColor="ring-yellow-500"
          />
          <div className="flex gap-4">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[140px]" data-testid="select-type">
                <SelectValue placeholder="Тип" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="w-[180px]" data-testid="select-genre">
                <SelectValue placeholder="Жанр" />
              </SelectTrigger>
              <SelectContent>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Content Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredBooks.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-xl shadow-lg overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 hover-scale group">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title || item.name}
                      className={`w-full object-cover ${
                        selectedType === "Авторы" || selectedType === "Коллекции" ? "h-48" : "h-64"
                      }`}
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-black/70 text-white">
                        {selectedType === "Книги" ? (
                          <Book className="w-3 h-3 mr-1" />
                        ) : selectedType === "Авторы" ? (
                          <Users className="w-3 h-3 mr-1" />
                        ) : (
                          <Bookmark className="w-3 h-3 mr-1" />
                        )}
                        {selectedType}
                      </Badge>
                    </div>
                    {/* Hover overlay for books */}
                    {selectedType === "Книги" && (
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white"
                            data-testid={`button-read-${item.id}`}
                          >
                            <BookOpen className="w-4 h-4 mr-1" />
                            Читать
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/90 hover:bg-white"
                            data-testid={`button-bookmark-${item.id}`}
                          >
                            <Bookmark className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/90 hover:bg-white"
                            data-testid={`button-download-${item.id}`}
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-1 line-clamp-1">{item.title || item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.author || (item.booksCount ? `${item.booksCount} книг` : item.description)}
                    </p>
                    
                    
                    
                    {/* Author specific info */}
                    {item.followers && (
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Book className="w-3 h-3" />
                          <span>{item.booksCount} книг</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{item.followers}</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Collection specific info */}
                    {item.readers && (
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Book className="w-3 h-3" />
                          <span>{item.booksCount} книг</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{item.readers}</span>
                        </div>
                      </div>
                    )}
                    
                    {item.genre && (
                      <Badge variant="secondary" className="text-xs mb-2">
                        {item.genre}
                      </Badge>
                    )}
                    
                    
                    {item.description && selectedType === "Книги" && (
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Book className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Контент не найден</h3>
            <p className="text-muted-foreground mb-6">
              Попробуйте изменить фильтры или поисковый запрос.
            </p>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedGenre("Все жанры");
                setSelectedType("Всё");
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-white"
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
