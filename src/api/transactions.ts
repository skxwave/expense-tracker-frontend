import api from "@/api/axios";
import { type TransactionSummary } from "@/types/transactions";

export const dashboard = async (): Promise<TransactionSummary> => {
  const response = await api.get("/transactions/dashboard");
  return response.data;
};
