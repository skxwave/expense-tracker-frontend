import api from "@/api/axios";
import { type TotalIncomesExpenses, type TransactionSummary } from "@/types/transactions";

export const dashboard = async (): Promise<TransactionSummary> => {
  const response = await api.get("/transactions/dashboard");
  return response.data;
};

export const total_incomes_expenses = async (days: number = 30): Promise<TotalIncomesExpenses> => {
  const response = await api.get("/transactions/total_incomes_expenses", { params: { days } });
  return response.data;
};
