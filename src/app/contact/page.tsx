import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <section id="portfolio-skills" className="margin-auto width-80pc margin-y-5pc">
        <section
          id="portfolio-contact"
          className="margin-auto width-60pc display-flex flex-column align-items-center justify-center"
        >
          <h1 className="text-center text-uppercase font-bold">
            Contactez-moi
          </h1>
          <section className="display-flex md-flex-column gap-10px align-items-center">
            <Image
              src="/images/Omowumi_OLABISI_photo.webp"
              width={150}
              height={150}
              className="radius-100pc width-300x-autoy"
              alt="Contactez Omowumi, monteuse, graphiste à Paris"
            />
            <div>
              <p className="font-size-20px">
                Vous avez une question, une envie de collaboration ou simplement besoin d&apos;en savoir plus sur mon travail ?<br>
                </br>N&apos;hésitez pas à me contacter. Je serais ravi d&apos;échanger avec vous, que ce soit pour discuter d&apos;un projet, répondre à vos interrogations ou envisager une future collaboration.
              </p>
              <p className="font-size-16px text-uppercase margin-none font-bold">
                <Link href="mailto:wumi.olabisi@gmail.com">
                  wumi.olabisi@gmail.com
                </Link>
              </p>
            </div>{" "}
          </section>
        </section>
      </section>
    </main>
  );
}
