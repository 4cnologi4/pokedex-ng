export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  url: string;
  sprites: Sprites;
  base_experience: any;
}


interface Sprites {
  front_shiny: string;
  front_default: string;
  back_default: string;
}