import Image from "next/image";
import styles from "./page.module.css";
import InputComponent from "@/components/InputComponent";
import { FirebaseProvider } from "@/context";
// import

export default function Home() {
  return (
    <FirebaseProvider>
      <main>
        <InputComponent />
      </main>
    </FirebaseProvider>
  );
}
