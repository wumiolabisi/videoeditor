import Link from "next/link";
import ProjectsDatas from "../_data/ProjectsDatas";
import Image from "next/image";
import ReactPlayer from "react-player";

export default function Projets() {
  return (
    <main>
      <section id="portfolio-skills" className="margin-auto width-80pc">
        <header className="justify-center margin-y-5pc">
          <h1>Mes projets</h1>
          <p>
            Depuis 2018, je m&apos;intéresse au montage audiovisuelle sous
            toutes ses formes. Chaque projet que vous allez découvrir ici est le
            reflet d&apos;une démarche précise, d&apos;une recherche d&apos;émotion, de rythme
            ou d&apos;efficacité visuelle. Qu&apos;il s&apos;agisse de teasers, d&apos;essais ou de formats courts, ces
            réalisations témoignent de ma polyvalence et de mon regard sur l&apos;image en mouvement.
          </p>
        </header>
        <section className="display-flex md-flex-column flex-wrap gap-10px">
          <section className="display-grid grid-gallery gap-10px">
            {ProjectsDatas.map((video) => {
              return (
                <section
                  className="relative overflow-hidden height-400px radius-15px"
                  key={video.id}
                  id={video.id}
                >
                  {video.teaser.length === 0 ? (
                    <Image
                      src={video.img}
                      width={700}
                      height={300}
                      alt="Miniature de la vidéo"
                      className="width-100pc height-100pc object-fit-cover object-center"
                    />
                  ) : (
                    /*<Video url={video.teaser} playing={true} loop={true} muted={true} controls={false} className="video-teaser"/>*/
                    <ReactPlayer
                      src={video.teaser}
                      loop={true}
                      muted={true}
                      playing={true}
                      playsInline={true}
                      style={{
                        width: "100%",
                        height: "50vh",
                        objectFit: "cover",
                      }}
                    />
                  )}

                  <section className="absolute z-index-1 bottom-30 width-100pc display-flex align-items-start">
                    <Link
                      className="link barrio-font font-size-25px text-shadow"
                      href={"/projets/" + video.id}
                    >
                      {video.title}
                    </Link>
                  </section>
                </section>
              );
            })}
          </section>
        </section>
      </section>

      <section
        id="portfolio-bandeau"
        className="relative overflow-hidden height-200px width-80pc margin-auto radius-15px margin-y-5pc"
      >
        <Image
          alt="Découvrez mes compétences"
          src="/images/montage.jpg"
          width={700}
          height={300}
          className="blur-5px width-100vw object-fit-cover object-center"
        />
        <section className="absolute z-index-1 width-100pc top-30px display-flex flex-column align-items-start padding-left-5pc">
          <p className="width-80pc md-font-size-20px secondary-color">
            Découvrez mes compétences derrière ces projets de montage !
          </p>
          <Link href="/skills" className="btn">
            Mes compétences en détails
          </Link>
        </section>
      </section>
    </main>
  );
}
