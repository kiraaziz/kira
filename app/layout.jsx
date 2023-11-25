import "@/app/globals.css";
import MainLayout from "./components/MainLayout";

export default function RootLayout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
