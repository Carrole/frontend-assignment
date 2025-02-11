import '../styles/globals.scss';
import SwipeableLayout from '@/components/common/SwipeableLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'infinite scroll UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <SwipeableLayout>{children}</SwipeableLayout>
          <footer className="footer" />
        </div>
      </body>
    </html>
  );
}
