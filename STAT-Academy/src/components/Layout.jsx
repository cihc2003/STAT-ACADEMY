import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{
        background: "#EFEFEF",
        minHeight: "100vh",
        padding: "20px"
      }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;