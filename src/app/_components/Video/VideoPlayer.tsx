"use client";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "motion/react";

export default function VideoPlayer() {
  const cvVideo = useRef<HTMLVideoElement | null>(null);
  const videoDuration = useRef<HTMLSpanElement | null>(null);

  /**
   * Video handlers
   */

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  function playVideo() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      cvVideo.current?.play();
    } else {
      cvVideo.current?.pause();
    }
  }

  function muteVideo() {
    const nextIsMuted = !isMuted;
    setIsMuted(nextIsMuted);

    if (nextIsMuted && cvVideo.current) {
      cvVideo.current.muted = false;
    } else {
      if (cvVideo.current) cvVideo.current.muted = true;
    }
  }

  function changeChapter(n: number) {
    if (cvVideo.current) {
      if (n === 1) cvVideo.current.currentTime = 22;
      if (n === 2) cvVideo.current.currentTime = 63.327016;
      if (n === 3) cvVideo.current.currentTime = 93.258541;
    }
  }
  /**
   * Timing
   */
  const timeDisplayRef = useRef<HTMLSpanElement | null>(null);
  const durationRef = useRef<HTMLSpanElement | null>(null);

  const convertSeconds = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  const handleTimeUpdate = () => {
    if (cvVideo.current && timeDisplayRef.current) {
      timeDisplayRef.current.textContent = convertSeconds(
        cvVideo.current.currentTime
      );
      if (durationRef.current) {
        durationRef.current.textContent = convertSeconds(
          cvVideo.current.duration
        );
      }
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            default: { type: "spring" },
            opacity: { ease: "linear" },
          },
        }}
        id="video-container"
        className="relative overflow-hidden radius-30px md-width-90pc margin-auto"
      >
        <ReactPlayer
          playing={isPlaying}
          playsInline={true}
          id="cv-video"
          ref={cvVideo}
          controls={false}
          src="www.youtube-nocookie.com/embed/AbHfVl2GWzg"
          muted={isMuted}
          style={{
            width: "100%",
            height: "50vh",
          }}
          onTimeUpdate={handleTimeUpdate}
        />
        <section
          id="video-chapters"
          className="absolute bottom-10 left-40 width-100pc"
        >
          <section className="display-flex gap-10px">
            <button
              id="chapitre-montage"
              className="btn font-size-13px"
              onClick={() => changeChapter(1)}
            >
              Mes débuts
            </button>
            <button
              id="chapitre-XP"
              className="btn font-size-13px"
              onClick={() => changeChapter(2)}
            >
              Expériences variées
            </button>
            <button
              id="chapitre-extra"
              className="btn font-size-13px"
              onClick={() => changeChapter(3)}
            >
              Mon secret ?
            </button>
          </section>
        </section>
      </motion.section>

      <section
        id="video-controls-container"
        className="md-width-90pc margin-auto"
      >
        <section className="display-flex align-items-center margin-y-10px">
          <div id="btn-play-pause">
            <input
              onClick={playVideo}
              type="image"
              src={isPlaying ? "icons/pause-icon.svg" : "icons/play.svg"}
              className="size-30xy "
            />
          </div>
          <span
            id="video-duration"
            ref={videoDuration}
            className="font-size-10px"
          >
            <span ref={timeDisplayRef}>00:00</span> /{" "}
            <span ref={durationRef}>00:00</span>
          </span>
          <div id="btn-mute-unmute" className="margin-left-auto">
            <input
              onClick={muteVideo}
              type="image"
              src={isMuted ? "icons/mute.svg" : "icons/volume.svg"}
              className="size-30xy"
            />
          </div>
        </section>
      </section>
    </>
  );
}
