
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starters' | 'main' | 'desserts';
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export interface BookingData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  time?: string;
}
