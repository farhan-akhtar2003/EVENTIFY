// A SEPARATE LAYOUT.TSX IS FORMED IN ROOT FOLDER BCZ WE DONT WANT HEADER & FOOTER IN AUTH PAGES (I.E SIGNIN SIGNOUT) BUT FOR ALL OTHER PAGES WE HAVE HEADER AND FOOTER SO YOU CAN SEE IN GLOBAL LAYOUT.TSX WE DON'T HAVE HEADER AND FOOTER TAGS COMPONET......
import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // h-screen: for full height
    // flex-col: to make components one on top of the other i.e in columns position ...
<div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
