import type { Metadata } from "next";
import "./globals.scss";
import{Barrio, Sansation} from 'next/font/google';
import Link from "next/link";
import Navigation from "./_components/Navigation";

const barrio = Barrio({
  weight: '400',
  subsets:['latin']
})
const sansation = Sansation({
  weight: '400',
    subsets:['latin']

})
export const metadata: Metadata = {
  title: "Omowumi OLABISI - Monteuse vidéo, monteuse audiovisuelle, graphiste et chargée de contenus web",
  description:
    "Je m'appelle Omowumi et je suis monteuse vidéo - Découvrez toutes mes compétences dans ce portfolio !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  


  return (
    <html lang="fr" className={barrio.className + sansation.className}>
      <body>
         <header>
        <section
          id="portfolio-title"
          className="margin-auto width-80pc md-height-200px text-center display-flex flex-column justify-center align-items-center"
        >
          <div className="barrio-font font-regular font-size-60px">
            Omowumi OLABISI
          </div>
          <div className="sansation-font font-regular font-size-20px width-60pc">
            Donner du sens à l&apos;image en assurant la cohérence visuelle et narrative de vos contenus.
          </div>
        </section>

       <Navigation/>
      </header>
        {children}
        <footer id="portfolio-footer">
          <section className="font-size-13px top-border-dotted width-80pc text-center margin-auto padding-y-2pc">
            
            <p>Toutes les réalisations présentées ont été monté ou réalisé par mes soins. Le site aussi, a été développé par moi !</p>
            <p>
              <Link href="/mentions-legales"><u>Mentions légales</u></Link>
            </p>
            <p>Omowumi OLABISI © 2025</p>
          </section>
        </footer>
      </body>
    </html>
  );
}
