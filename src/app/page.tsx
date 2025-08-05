"use client";
import VideoPlayer from "./_components/Video/VideoPlayer";

export default function Home() {
  return (
    <main>
    
      <section id="portfolio-home-video" className="margin-y-5pc">
        <div className="width-80pc margin-auto text-center">
          <h1>
            Je me présente... en vidéo !
          </h1>
            <p>
        Depuis plusieurs années, le montage vidéo est une forme d&apos;expression que j&apos;utilise dans mes projets persos et pros. 
        À travers ce portfolio, je vous invite à découvrir mon parcours, mes compétences et ma vision du métier de monteuse vidéo.
      </p>
        </div>
        <VideoPlayer />
      </section>
    </main>
  );
}
