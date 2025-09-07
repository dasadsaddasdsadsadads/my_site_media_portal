// Empty data structure - no mock data implementation
// Real data would come from API endpoints

export interface Course {
  id: string;
  title: string;
  author: string;
  description: string;
  duration: string;
  price: string;
  category: string;
  rating: number;
  imageUrl?: string;
}

export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  imageUrl?: string;
}

export interface TVSeries {
  id: string;
  title: string;
  seasons: number;
  genre: string;
  year: number;
  rating: number;
  imageUrl?: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  imageUrl?: string;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  trackCount: number;
  plays: string;
  imageUrl?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  rating: number;
  imageUrl?: string;
}

export interface ReadingList {
  id: string;
  title: string;
  description: string;
  bookCount: number;
  readers: string;
  imageUrl?: string;
}

export interface Author {
  id: string;
  name: string;
  genre: string;
  bookCount: number;
  imageUrl?: string;
}

// Empty arrays - would be populated by API calls
export const courses: Course[] = [];
export const movies: Movie[] = [];
export const tvSeries: TVSeries[] = [];
export const albums: Album[] = [];
export const playlists: Playlist[] = [];
export const books: Book[] = [];
export const readingLists: ReadingList[] = [];
export const authors: Author[] = [];
