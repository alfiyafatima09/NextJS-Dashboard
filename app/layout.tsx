import '@/app/ui/global.css';

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}


//layout.tsx is seen in all the pages of the app. It is the parent component of all the pages. It is used to wrap the children components of the app. It is used to apply global styles to the app. It is used to apply global fonts