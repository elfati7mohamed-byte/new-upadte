import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import WhatsAppWidget from './components/WhatsAppWidget/WhatsAppWidget';
export const metadata = {
  title: 'BudhokEdu',
  description: 'Your path to worldwide Universities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-roboto bg-gray-50 text-gray-900">
        <Navbar />

        <main className="min-h-screen px-4 md:px-8 py-6">
          {children}
        </main>

        <Footer />

        {/* Global WhatsApp Widget */}
        <WhatsAppWidget />
      </body>
    </html>
  );
}