import SkillSet from "@/app/_components/SkillSet";
import Image from "next/image";
import Link from "next/link";

export default function Skills() {
  return (
    <main>
      <section id="portfolio-skills" className="margin-auto width-80pc">
        <header className="justify-center margin-y-5pc">
          <h1>Mon parcours et mes outils</h1>
          <p>
           Avec le temps, j’ai pris la main sur les outils des métiers du montage audiovisuel, et maintenant je sais comment donner vie à chaque projet !
           Voilà les compétences clés que je peux mettre à votre service.
          </p>
        </header>

        <h2>Compétences techniques</h2>
        <p>Montage et post-production, effets spéciaux et animation</p>
        <section className="display-grid grid-default md-flex-column flex-wrap gap-10px">
        
          <SkillSet
            src={"/icons/adobe_premiere_pro.svg"}
            skillTitle={"Adobe Premiere Pro/DaVinci Resolve"}
            progress={"90"}
          >
            <ul className="padding-left-5pc">
              <li>Dérushage et organisation logique des séquences</li>
              <li>Montage narratif (fiction, interviews, formats courts)</li>
              <li>Habillage vidéo, titrage et sous-titrage</li>
              <li>
                Export aux normes broadcast et web (Youtube, Insta, TV, etc.)
              </li>
            </ul>
          </SkillSet>

          <SkillSet
            src={"/icons/adobe_after_effect.svg"}
            skillTitle={"Adobe After Effects"}
            progress={"70"}
          >
            <ul className="padding-left-5pc">
              <li>
                Intégration d’animations 2D (logos, titrages, éléments
                graphiques)
              </li>
              <li>Tracking de mouvement et incrustation d’éléments</li>
              <li>Animation typographique et transitions dynamiques</li>
              <li>
                Nettoyage et effets simples pour trucages (masques, effets de
                duplication)
              </li>
            </ul>
          </SkillSet>

          <SkillSet
            src={"/icons/adobe_photoshop.svg"}
            skillTitle={"Adobe Photoshop"}
            progress={"85"}
          >
            <ul className="padding-left-5pc">
              <li>
                Création de miniatures, visuels réseaux sociaux et éléments
                d’habillage
              </li>
              <li>Retouches photo et détourage précis</li>
              <li>
                Création de gabarits et mockups pour intégration dans les vidéos
              </li>
              <li>Optimisation des visuels pour le web ou le print</li>
            </ul>
          </SkillSet>

          <SkillSet
            src={"/icons/blender.svg"}
            skillTitle={"Blender"}
            progress={"70"}
          >
            <ul className="padding-left-5pc">
              <li>Modélisation de base (objets simples, texte 3D)</li>
              <li>
                Animation de caméra et rendu pour intégration dans un montage
              </li>
              <li>
                Utilisation de shaders et lumière pour de courtes séquences
                animées
              </li>
              <li>
                Préparation de scènes simples à intégrer dans After Effects
              </li>
            </ul>
          </SkillSet>
          <SkillSet
            src={"/icons/web.svg"}
            skillTitle={"Web et contenu numérique"}
            progress={"90"}
          >
            <ul className="padding-left-5pc">
              <li>Création et gestion de sites sous WordPress</li>
              <li>Optimisation SEO de contenu visuel et texte</li>
              <li>Création de formats adaptés aux réseaux sociaux</li>
              <li>Compréhension des logiques d’UX/UI et responsive design</li>
            </ul>
          </SkillSet>
        </section>

        <h2>Soft Skills</h2>
        <section className="display-grid grid-default flex-wrap gap-10px">
          <article>
            <h3>🎯 Autonomie créative</h3>
            <div>
              <p>
                J’ai appris à produire de manière autodidacte : son, image,
                montage… Des expériences comme la co-réalisation du podcast À
                TAAABLE ETC m’ont donné le réflexe de toujours chercher des
                solutions, même sans moyens.
              </p>
            </div>
          </article>

          <article>
            <h3>🤝 Collaboration humaine et bienveillante</h3>
            <div>
              <p>
                Habituée à travailler avec des artistes, des réalisateurs, des
                marques et des équipes pluridisciplinaires, je sais écouter,
                reformuler les besoins et apporter des propositions concrètes
                dans le respect du brief initial.
              </p>
            </div>
          </article>

          <article>
            <h3>🧠 Curiosité technique</h3>
            <div>
              {" "}
              <p>
                Chaque nouveau projet est une excuse pour apprendre un nouvel
                effet, explorer un outil ou optimiser mon flux de travail. La
                technique est un terrain de jeu, jamais un frein.
              </p>
            </div>
          </article>

          <article>
            <h3>🎧 Sens du rythme et oreille musicale</h3>
            <div>
              {" "}
              <p>
                Musicienne autodidacte, je monte souvent comme on compose : je
                sais synchroniser l’image au son avec justesse, jouer des
                silences, des respirations et des temps forts pour donner vie au
                montage.
              </p>
            </div>{" "}
          </article>

          <article>
            <h3>🗂️ Organisation & rigueur</h3>
            <div>
              <p>
                Je suis méthodique dans mes dossiers, mes exports et mes
                archives. Travailler avec plusieurs interlocuteurs et sur des
                projets complexes m’a appris à structurer mon process de travail
                du début à la fin.
              </p>
            </div>{" "}
          </article>
        </section>
      </section>

      <section
        id="portfolio-bandeau"
        className="relative overflow-hidden height-200px width-80pc margin-auto radius-15px margin-y-5pc"
      >
        <Image
          src="/images/montage.jpg"
          alt="Image de montage"
          width={120}
          height={200}
          className="blur-5px width-100vw object-fit-cover object-center"
        />
        <section className="absolute z-index-1 width-100pc top-30px display-flex flex-column align-items-start padding-left-5pc">
          <p className="width-80pc md-font-size-20px secondary-color">
            Découvrez mes compétences en action à travers mes derniers projets
            de montage
          </p>
          <Link href="/projets" className="btn">
            Mes derniers projets
          </Link>
        </section>
      </section>
    </main>
  );
}
