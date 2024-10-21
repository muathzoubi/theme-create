import { Metadata } from 'next';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body className="min-h-screen bg-background font-sans antialiased">
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-5 pt-6">{children}</div>
          </div>
        </body>
      </html>
    </>
  );
}
