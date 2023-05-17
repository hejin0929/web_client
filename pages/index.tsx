import { Inter } from "next/font/google";
import styles from "./index.lesss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.main}></div>
    </main>
  );
}
