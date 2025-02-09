
import QueryProvider from "./components/QueryProvider";
// import { Roboto } from "next/font/google";
import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"], // Optional: Customize weights
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // className={roboto.className}
      suppressHydrationWarning={true}
    >
      <body className={`${inter.className} antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}