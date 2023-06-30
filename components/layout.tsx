
import Header from "components/Header"
import {Changa
} from 'next/font/google'
import Footer from "components/Footer"
import SEOHead from "./SeoHead"

const font = Changa({
  weight:'700',subsets:['latin']
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<>

      <section className={font.className}>
        <header className=""><Header /></header>
        <div className="w-full bg-black h-[1px] my-3"></div>
        <main className="max-w-6xl mx-auto">{children}</main>
        <footer className="">
          <Footer/>
        </footer>
      </section>
  </>

  )
}
