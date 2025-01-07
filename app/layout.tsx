import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template : "%s | Next Movies",
    default : "Loading...",
  },
  description : "The Best Movies"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
