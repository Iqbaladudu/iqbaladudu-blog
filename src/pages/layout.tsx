import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`min-h-screen w-full bg-base-bg font-rubik py-12 flex flex-col gap-y-5 ${rubik.variable}`}
    >
      {children}
    </main>
  );
}
