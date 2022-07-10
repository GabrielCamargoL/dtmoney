import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';



interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// varias formas de pegar o conteúdo de transaction (interface, typePíck ou typeOmit)

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;


interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    await api.post('/transactions', transaction);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}