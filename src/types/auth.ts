export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface RegisterCredentials {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
}