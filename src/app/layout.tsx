export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <title>EduPass - EDUX Token</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
