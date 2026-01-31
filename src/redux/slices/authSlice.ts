import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { login as loginApi } from "@/api/auth";
import { type LoginResponse, type LoginCredentials } from "@/types/auth";
import { isAxiosError } from "axios";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
}

const STORAGE_KEYS = {
  ACCESS: "access_token",
  REFRESH: "refresh_token",
} as const;

const initialState: AuthState = {
  accessToken: localStorage.getItem(STORAGE_KEYS.ACCESS),
  refreshToken: localStorage.getItem(STORAGE_KEYS.REFRESH),
  loading: false,
  error: null,
};

export const login = createAsyncThunk<
  LoginResponse,
  LoginCredentials,
  { rejectValue: string }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await loginApi(credentials);

    localStorage.setItem(STORAGE_KEYS.ACCESS, response.access_token);
    localStorage.setItem(STORAGE_KEYS.REFRESH, response.refresh_token);

    return response;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      const message = err.response?.data?.message || "Login failed";
      return rejectWithValue(message);
    }
    return rejectWithValue("An unexpected error occurred");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.error = null;
      localStorage.removeItem(STORAGE_KEYS.ACCESS);
      localStorage.removeItem(STORAGE_KEYS.REFRESH);
    },
    updateTokens: (
      state,
      action: PayloadAction<{ access: string; refresh: string }>,
    ) => {
      state.accessToken = action.payload.access;
      state.refreshToken = action.payload.refresh;
      localStorage.setItem(STORAGE_KEYS.ACCESS, action.payload.access);
      localStorage.setItem(STORAGE_KEYS.REFRESH, action.payload.refresh);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, { payload }: PayloadAction<LoginResponse>) => {
          state.loading = false;
          state.accessToken = payload.access_token;
          state.refreshToken = payload.refresh_token;
          state.error = null;
        },
      )
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload ?? "An unexpected error occurred";
      });
  },
});

export const { logout, updateTokens } = authSlice.actions;
export default authSlice.reducer;
