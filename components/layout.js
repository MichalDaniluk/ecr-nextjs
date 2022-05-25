import Header from "../components/header";
import MainMenu from "./mainMenu";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <MainMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
