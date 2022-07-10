import { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
