// fonts
import { Sora } from "@next/font/google";
// components
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-gradient-to-br from-[#6499E9] to-[#9EDDFF] text-white bg-cover ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
