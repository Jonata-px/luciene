import './globals.css'
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Reflexoterapia | Luciene Gonsalves',
  description: 'Encontre equilíbrio, relaxamento e bem-estar com a reflexologia podal em Pinhalzinho, SP. Com especialização em tratamentos de reflexologia podal para promover saúde, aliviar tensões e melhorar a circulação. Agende uma sessão hoje mesmo!',
  keywords:'reflexologia podal, reflexologia, bem-estar, saúde, relaxamento, terapia natural, Pinhalzinho, SP',
  author:"Jfcoder",
  icons: {
    icon: '/icon.ico',
  },
  "google-site-verification":"Qs7bE0RZKnq2HJ_sShxnI9UaxxVut-V3YW1_-_bLRxw"
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
            {children}
          <Footer/>
        </body>
    </html>
  )
}
