import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Music, Play, SkipBack, SkipForward, Pause, Shuffle, Repeat, Volume2, Heart, MoreHorizontal, ListMusic, Disc, Star, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SearchInput from "@/components/search-input";
import { motion } from "framer-motion";

export default function MusicPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Всё");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [volume, setVolume] = useState([75]);
  const [progress, setProgress] = useState([23]);

  const categories = ["Всё", "Альбомы", "Плейлисты", "Исполнители"];

  const albums = [
    {
      id: 1,
      title: "The Dark Side of the Moon",
      artist: "Pink Floyd",
      year: 1973,
      genre: "Progressive Rock",
      tracks: 10,
      duration: "43 мин",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      rating: 4.9
    },
    {
      id: 2,
      title: "Thriller",
      artist: "Michael Jackson",
      year: 1982,
      genre: "Pop",
      tracks: 9,
      duration: "42 мин",
      image: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=300&h=300&fit=crop",
      rating: 4.8
    },
    {
      id: 3,
      title: "Abbey Road",
      artist: "The Beatles",
      year: 1969,
      genre: "Rock",
      tracks: 17,
      duration: "47 мин",
      image: "https://images.unsplash.com/photo-1520170350707-b2da59970118?w=300&h=300&fit=crop",
      rating: 4.9
    },
    {
      id: 4,
      title: "Back to Black",
      artist: "Amy Winehouse",
      year: 2006,
      genre: "Soul",
      tracks: 11,
      duration: "35 мин",
      image: "https://images.unsplash.com/photo-1484755560615-676bb9f4ba96?w=300&h=300&fit=crop",
      rating: 4.7
    }
  ];

  const playlists = [
    {
      id: 1,
      title: "Лучшие хиты 2020х",
      description: "Популярные треки прошлого десятилетия",
      tracks: 47,
      duration: "3ч2 часа",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
      likes: "2.1К"
    },
    {
      id: 2,
      title: "Chill Vibes",
      description: "Расслабляющая музыка для отдыха",
      tracks: 25,
      duration: "1ч4 часа",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      likes: "856"
    },
    {
      id: 3,
      title: "Workout Mix",
      description: "Энергичная музыка для тренировок",
      tracks: 32,
      duration: "2ч1 час",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      likes: "1.4К"
    }
  ];

  const artists = [
    {
      id: 1,
      name: "Taylor Swift",
      genre: "Pop",
      followers: "47.2М",
      image: "https://images.unsplash.com/photo-1516307474647-d4ff73d75b76?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Ed Sheeran",
      genre: "Folk Pop",
      followers: "34.8М",
      image: "https://images.unsplash.com/photo-1520170350707-b2da59970118?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Billie Eilish",
      genre: "Alternative",
      followers: "28.6М",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
    }
  ];

  const currentSong = {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    duration: "5:55",
    currentTime: "2:15"
  };

  const filteredContent = () => {
    if (selectedCategory === "Альбомы") return albums.map(item => ({...item, type: 'album'}));
    if (selectedCategory === "Плейлисты") return playlists.map(item => ({...item, type: 'playlist'}));
    if (selectedCategory === "Исполнители") return artists.map(item => ({...item, type: 'artist'}));
    return [
      ...albums.map(item => ({...item, type: 'album'})), 
      ...playlists.map(item => ({...item, type: 'playlist'}))
    ];
  };

  return (
    <div className="fade-in">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-12">
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
              <Music className="w-8 h-8 mr-3" />
              <h1 className="text-3xl font-bold">Музыка</h1>
            </div>
          </div>
          <p className="text-lg opacity-90">
            Слушайте любимые треки и открывайте новую музыку
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4">
          <SearchInput
            placeholder="Поиск музыки, альбомов, исполнителей..."
            value={searchQuery}
            onChange={setSearchQuery}
            className="flex-1 max-w-md"
            focusColor="ring-green-500"
          />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]" data-testid="select-category">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Enhanced Music Player */}
        <Card className="rounded-xl shadow-lg mb-8 overflow-hidden bg-gradient-to-br from-green-50 to-teal-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mr-6">
                <Music className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-1">{currentSong.title}</h4>
                <p className="text-muted-foreground">{currentSong.artist}</p>
                <p className="text-sm text-muted-foreground">{currentSong.album}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-green-500 transition-colors"
                  data-testid="button-heart"
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-green-500 transition-colors"
                  data-testid="button-more"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-6">
              <Slider
                value={progress}
                onValueChange={setProgress}
                max={100}
                step={1}
                className="w-full"
                data-testid="slider-progress"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>{currentSong.currentTime}</span>
                <span>{currentSong.duration}</span>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-green-500 transition-colors"
                  data-testid="button-shuffle"
                >
                  <Shuffle className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-green-500 transition-colors"
                  data-testid="button-previous"
                >
                  <SkipBack className="w-6 h-6" />
                </Button>
                <Button
                  className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                  onClick={() => setIsPlaying(!isPlaying)}
                  data-testid="button-play"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-green-500 transition-colors"
                  data-testid="button-next"
                >
                  <SkipForward className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-green-500 transition-colors"
                  data-testid="button-repeat"
                >
                  <Repeat className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-muted-foreground" />
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="w-24"
                  data-testid="slider-volume"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredContent().map((item, index) => (
            <motion.div
              key={`${item.type}-${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="rounded-xl shadow-lg overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 hover-scale group">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title || item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3"
                      data-testid={`button-play-${item.id}`}
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  {item.genre && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-black/70 text-white">
                        {selectedCategory === "Альбомы" ? <Disc className="w-3 h-3 mr-1" /> : <ListMusic className="w-3 h-3 mr-1" />}
                        {selectedCategory}
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-1 line-clamp-1">{item.title || item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.artist || (item.followers ? `${item.followers} подписчиков` : item.description)}
                  </p>
                  
                  {/* Album specific info */}
                  {item.tracks && item.duration && (
                    <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <ListMusic className="w-3 h-3" />
                        <span>{item.tracks} треков</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{item.duration}</span>
                      </div>
                      {item.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{item.rating}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Playlist specific info */}
                  {item.likes && (
                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <ListMusic className="w-3 h-3" />
                        <span>{item.tracks} треков</span>
                      </div>
                    </div>
                  )}
                  
                  {item.genre && (
                    <Badge variant="secondary" className="text-xs">
                      {item.genre}
                    </Badge>
                  )}
                  
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
