'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname  } from "next/navigation";

export default function Navigation(){
    const pathname = usePathname();
    return (
         <nav
          id="portfolio-navbar"
          className="md-margin-y-5pc  margin-auto width-80pc sm-border-top-bottom"
        >
          <ul className="sm-fixed z-index-1 right-10 top-25pc display-flex sm-flex-column sm-align-items-end justify-space-evenly gap-10px">
           <li className="display-flex flex-column align-items-center">
               <Link href="/"><Image alt="Accueil - CV Vidéo" src="/icons/home.svg" width={30} height={30}
                className={`md-light-svg size-30xy sm-custom-btn-video ${pathname == "/" ? "active" : ""}`}/>
              </Link>
              <span className={`sm-font-size-10px ${pathname == "/" ? "font-bold" : ""}`}> <Link href="/">Accueil</Link></span>
            </li>
            <li className="display-flex flex-column align-items-center">
               <Link href="/projets"><Image alt="Icône cliquable pour voir mes projets" src="/icons/projets-icones.svg" width={30} height={30}
                className={`md-light-svg size-30xy sm-custom-btn-video ${pathname == "/projets" ? "active" : ""}`}/>
              </Link>
              <span className={`sm-font-size-10px ${pathname == "/projets" ? "font-bold" : ""}`}> <Link href="/projets">Projets</Link></span>
            </li>
            <li className="display-flex flex-column align-items-center">
               <Link href="/skills">
                 <Image alt="Icône cliquable d'une liste avec des étoiles" src="/icons/skills.svg" width={30} height={30} 
                className={`md-light-svg size-30xy sm-custom-btn-video ${pathname == "/skills" ? "active" : ""}`}/>
                </Link>
              <span className={`sm-font-size-10px ${pathname == "/skills" ? "font-bold" : ""}`}>
                 <Link href="/skills">Skills</Link>
              </span>
            </li>
            <li className="display-flex flex-column align-items-center">
              <Link href="/contact"><Image alt="Icône d'une lettre qui renvoit vers le formulaire de contact" src="/icons/contactez-moi.svg" width={30} height={30}
                className={`md-light-svg size-30xy sm-custom-btn-video ${pathname == "/contact" ? "active" : ""}`}/>
              </Link>
              <span className={`sm-font-size-10px ${pathname == "/contact" ? "font-bold" : ""}`}> <Link href="/contact">Contact</Link></span>
            </li>
          </ul>
        </nav>
    )
}