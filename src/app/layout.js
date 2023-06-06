import './globals.css'
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Reflexoterapeuta Luciene Gonsalves',
  description: 'Encontre equilíbrio, relaxamento e bem-estar com a reflexologia podal em Pinhalzinho, SP. Com especialização em tratamentos de reflexologia podal para promover saúde, aliviar tensões e melhorar a circulação. Agende uma sessão hoje mesmo!',
  keywords:'reflexologia podal, reflexologia, bem-estar, saúde, relaxamento, terapia natural, Pinhalzinho, SP',
  author:"Jfcoder",
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          
            {children}
          <Footer/>
        </body>
    </html>
  )
}
