import Navbar from "@/features/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {children}
    </>
  );
}
