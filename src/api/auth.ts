import api from "@/api/axios";
import {
  type LoginCredentials,
  type LoginResponse,
  type RegisterCredentials,
  type RegisterResponse,
} from "@/types/auth";

export const login = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  const response = await api.post("/login", credentials);
  return response.data;
};

export const register = async (
  data: RegisterCredentials,
): Promise<RegisterResponse> => {
  const response = await api.post("/register", data);
  return response.data;
};
