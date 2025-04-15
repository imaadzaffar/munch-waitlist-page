import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delete Account',
  description: 'Learn how to delete your Munch account and understand what happens to your data.',
};

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
} 