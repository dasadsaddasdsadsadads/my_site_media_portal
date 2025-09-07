import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Film, Star, Clock, Play, Heart, BookmarkPlus, Tv, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SearchInput from "@/components/search-input";
import { motion } from "framer-motion";

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Все жанры");
  const [selectedType, setSelectedType] = useState("Всё");

  const genres = [
    "Все жанры",
    "Боевик",
    "Комедия",
    "Драма",
    "Фантастика",
    "Триллер",
    "Ужасы",
    "Мелодрама"
  ];

  const types = ["Всё", "Фильмы", "Сериалы"];

  const movies = [
    {
      id: 1,
      title: "Оппенгеймер",
      year: 2023,
      genre: "Драма",
      type: "Фильмы",
      rating: 8.3,
      duration: "3ч2 мин",
      description: "Биографическая драма о создателе атомной бомбы",
      director: "Кристофер Нолан",
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop",
      isNew: true
    },
    {
      id: 2,
      title: "Топ Ган: Мэверик",
      year: 2022,
      genre: "Боевик",
      type: "Фильмы",
      rating: 8.2,
      duration: "2ч2 мин",
      description: "Пит Мэверик возвращается в небеса через 30 лет",
      director: "Джозеф Косински",
      image: "https://images.unsplash.com/photo-1489599188871-2ebd43b2bc60?w=300&h=450&fit=crop",
      isNew: false
    },
    {
      id: 3,
      title: "Очко грома",
      year: 2023,
      genre: "Боевик",
      type: "Сериалы",
      rating: 8.7,
      duration: "8 эпизодов",
      description: "Последние дни Советского Союза в Чернобыле",
      director: "Крэйг Мазин",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
      isNew: false
    },
    {
      id: 4,
      title: "Дюна",
      year: 2021,
      genre: "Фантастика",
      type: "Фильмы",
      rating: 8.0,
      duration: "2ч5 мин",
      description: "Молодой наследник отправляется на пустынную планету",
      director: "Дени Вильнёв",
      image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=300&h=450&fit=crop",
      isNew: false
    },
    {
      id: 5,
      title: "Осмь показаний ненависти",
      year: 2015,
      genre: "Триллер",
      type: "Фильмы",
      rating: 8.8,
      duration: "3ч0 мин",
      description: "Мистерия убийства в заснеженных горах",
      director: "Квентин Тарантино",
      image: "https://images.unsplash.com/photo-1548263594-a71ea65a8387?w=300&h=450&fit=crop",
      isNew: false
    },
    {
      id: 6,
      title: "Очко дракона",
      year: 2022,
      genre: "Фантастика",
      type: "Сериалы",
      rating: 8.5,
      duration: "10 эпизодов",
      description: "Борьба за Железный трон Вестероса",
      director: "Мигель Сапочник",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=450&fit=crop",
      isNew: true
    }
  ];

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         movie.director.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "Все жанры" || movie.genre === selectedGenre;
    const matchesType = selectedType === "Всё" || movie.type === selectedType;
    return matchesSearch && matchesGenre && matchesType;
  });

  return (
    <div className="fade-in">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-12">
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
              <Film className="w-8 h-8 mr-3" />
              <h1 className="text-3xl font-bold">Фильмы и сериалы</h1>
            </div>
          </div>
          <p className="text-lg opacity-90">
            Смотрите последние новинки и классику кинематографа
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4">
          <SearchInput
            placeholder="Поиск фильмов и сериалов..."
            value={searchQuery}
            onChange={setSearchQuery}
            className="flex-1 max-w-md"
            focusColor="ring-pink-500"
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

        {/* Movies and Series Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredMovies.map((movie, index) => (
              <motion.div
                key={movie.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-xl shadow-lg overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 hover-scale group">
                  <div className="relative">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2 line-clamp-1">{movie.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {movie.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Film className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Фильмы не найдены</h3>
            <p className="text-muted-foreground mb-6">
              Попробуйте изменить фильтры или поисковый запрос.
            </p>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedGenre("Все жанры");
                setSelectedType("Всё");
              }}
              className="bg-pink-500 hover:bg-pink-600 text-white"
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
