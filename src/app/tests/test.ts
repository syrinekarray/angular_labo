import { User } from './../users/user';
export interface Test {
  id: number;
  price: string;
  name: string;
  user: User;
}

export interface TestCreate {
  price: number;
  name: string;
  user: { id: number };
}
