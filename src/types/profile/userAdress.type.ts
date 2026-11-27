export interface UserAdressI {
  results: number;
  status: string;
  data?: Adress[];
}

export interface Adress {
  _id: string;
  name: string;
  details: string;
  phone: string;
  city: string;
}
