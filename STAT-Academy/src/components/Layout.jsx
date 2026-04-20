import Navbar from "./Navbar";

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
    </>
  );
}

export default Layout;