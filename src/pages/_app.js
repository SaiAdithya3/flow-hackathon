// import "@picocss/pico";
import "../styles/globals.css";
// import "../styles/Home.module.css";
// import styles from "../styles/globals.css";
import Link from "next/link";
import AuthProvider from "../contexts/AuthContext";
import TransactionProvider from "../contexts/TransactionContext";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="container header">
        <ul>
          <li>Flow Demo</li>
        </ul>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
      <main className="container">
        <TransactionProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </TransactionProvider>
      </main>
      <footer className="container">
        
        
      </footer>
    </div>
  );
}

export default MyApp;