import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  // Peces Tropicales
  {
    id: 1,
    name: "Pez Ángel",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    category: "fish",
    description: "Hermoso pez ángel tropical, perfecto para acuarios comunitarios. Colores vibrantes y personalidad única.",
    inStock: true
  },
  {
    id: 2,
    name: "Pez Payaso",
    price: 18.50,
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=400&h=300&fit=crop",
    category: "fish",
    description: "El famoso pez payaso, conocido por su relación simbiótica con las anémonas. Ideal para acuarios marinos.",
    inStock: true
  },
  {
    id: 3,
    name: "Pez Betta",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    category: "fish",
    description: "Pez betta con aletas espectaculares. Perfecto para acuarios pequeños y principiantes.",
    inStock: true
  },
  {
    id: 4,
    name: "Pez Dorado",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&h=300&fit=crop",
    category: "fish",
    description: "Clásico pez dorado, resistente y fácil de cuidar. Ideal para principiantes en la acuariofilia.",
    inStock: true
  },
  {
    id: 5,
    name: "Pez Disco",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
    category: "fish",
    description: "Elegante pez disco con patrones únicos. Requiere cuidados especializados pero es muy gratificante.",
    inStock: true
  },
  {
    id: 6,
    name: "Pez Guppy",
    price: 6.50,
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=400&h=300&fit=crop",
    category: "fish",
    description: "Colorido pez guppy, perfecto para acuarios comunitarios. Se reproduce fácilmente.",
    inStock: true
  },
  // Focas (productos temáticos)
  {
    id: 7,
    name: "Foca Bebé de Peluche",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
    category: "seal",
    description: "Adorable peluche de foca bebé, perfecto como decoración para tu acuario o como regalo.",
    inStock: true
  },
  {
    id: 8,
    name: "Figura Decorativa de Foca",
    price: 22.50,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    category: "seal",
    description: "Figura decorativa de foca marina para acuarios. Material resistente al agua.",
    inStock: true
  },
  {
    id: 9,
    name: "Foca Interactiva de Juguete",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
    category: "seal",
    description: "Foca robótica interactiva que nada en el agua. Perfecta para entretenimiento acuático.",
    inStock: false
  },
  {
    id: 10,
    name: "Set de Focas Miniatura",
    price: 15.75,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    category: "seal",
    description: "Conjunto de 3 focas miniatura para decorar tu acuario. Hechas de resina segura para peces.",
    inStock: true
  }
];