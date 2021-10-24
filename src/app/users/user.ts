export interface UserCreateDto {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  role?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
export interface User {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  role: string;
  id: number;
}
