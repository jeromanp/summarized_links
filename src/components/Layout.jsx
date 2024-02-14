import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Sumarizador páginas web</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Resume el contenido de cualquier página web con esta aplicación, que con ayuda de la Inteligencia Artíficial hará tu lecturas más efectiva."
        ></meta>
        <link rel="icon" href="/assets/logo.png" />
        <meta name="author" content="Jose Eduardo Roman Piña" />
      </Head>
      <main className="w-full">{children}</main>
    </>
  );
}
