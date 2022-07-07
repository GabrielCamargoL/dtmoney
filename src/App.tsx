import { GlobalStyle } from "./assets/styles/global";
import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";



export function App() {
  return (
    <>
      <Header />
      <DashBoard />
      <GlobalStyle />
    </>
  );
}
