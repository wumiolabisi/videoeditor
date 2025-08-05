import ProjectsDatas from "../../_data/ProjectsDatas";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import IFramePlayer from "@/app/_components/Video/IFramePlayer";


export async function generateStaticParams() {
  return ProjectsDatas.map((project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  
  const { projectId } = await params;
  const project = ProjectsDatas.find((p) => p.id === projectId);

  if (!project) {
    return notFound();
  }

  return (
    <main>
      <section id="portfolio-skills" className="margin-auto width-80pc">
        <header className="justify-center margin-y-10px ">
          <span id="retour-projets" className="display-flex gap-5px align-items-center">
            <Link className="primary-color" href="/projets"><Image alt="Icône cliquable pour retourner sur la page mes projets" src="/icons/arrow.svg" width={30} height={30}
                          className="size-20xy"
                        /></Link><Link className="primary-color" href="/projets"> Retour aux projets</Link></span>
        </header>

      <section className="width-80pc margin-auto">
                  <h1 className="text-center">{project.title}</h1>

        <section
          id="video-container"
          className="relative overflow-hidden radius-30px width-100pc height-50vh margin-y-5pc"
        >
          <Suspense>
          <IFramePlayer url={project.src} fallbackImage={project.img} />
          </Suspense>
        </section>

        <section
          id="tag-container"
          className="display-flex flex-column gap-10px"
        >

          <div>
            <span className="category">TYPE</span>{" "}
            <span className="font-size-13px">{project.type}</span>
          </div>
           <div>
            <span className="category">DESTINATION</span>{" "}
            <span className="font-size-13px">{project.format}</span>
          </div>
          <div>
            <span className="category">LOGICIELS</span>{" "}
            <span className="font-size-13px">{project.softwares}</span>
          </div>
        </section>

        <section className="padding-y-2pc">
          <article>
            <h2>Le projet en quelques mots</h2>
            <p>{project.desc}</p>
            {project.desc2.toString() !== '' ?
            (<>
            <h2>Les étapes clés du projet</h2>
             <ul className="padding-left-5pc">
              {Object.entries(project.desc2).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
            </>) : ''}
            <p className="font-size-13px">Voir à la source : <Link href={project.src}><u>{project.src}</u></Link></p>
          </article>
        </section>
      </section>
</section>
      <section
        id="portfolio-bandeau"
        className="relative overflow-hidden height-200px width-80pc margin-auto radius-15px margin-y-5pc"
      >
        <Image
          width={700}
          height={300}
          alt="Une image"
          src="/images/montage.jpg"
          className="blur-5px width-100vw object-fit-cover object-center"
        />
        <section className="absolute z-index-1 width-100pc top-30px display-flex flex-column align-items-start padding-left-5pc">
          <p className="width-80pc font-size-20px secondary-color">
            Vous souhaitez me poser une question plus précise ?
          </p>
          <Link className="btn" href="/contact">
            Echangeons directement !
          </Link>
        </section>
      </section>
    </main>
  );
}
