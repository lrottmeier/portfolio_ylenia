import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

// import "./main.css";

// const pp = localFont({
//   src: [
//     {
//       path: "../fonts/PPTelegraf-Ultrabold.otf",
//       weight: "500",
//       style: "normal",
//     },
//   ],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // className={`${pp.className} h-svh`}
    <html lang="en">
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
