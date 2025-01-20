import "../styles/global.css";
import { Metadata } from "next"
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: "The Best Movies"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div><Navigation /></div>
        {children}
      </body>
    </html>
  )
}
