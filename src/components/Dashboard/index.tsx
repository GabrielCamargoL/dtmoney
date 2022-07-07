import { Summary } from '../Summary';
import { TransactionTable } from '../TransactionsTable';
import { Container } from './styles';

export function DashBoard() {
  return (
    <>
      <Container>
        <Summary />
        <TransactionTable />
      </Container>
    </>
  )
}