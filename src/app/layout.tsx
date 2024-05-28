import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

// import "./main.css";

const lorimer = localFont({
  src: [
    {
      path: "../fonts/Lorimer No 2 Condensed.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // className={`${pp.className} h-svh`}
    <html lang="en" className={`${lorimer.className}`}>
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
