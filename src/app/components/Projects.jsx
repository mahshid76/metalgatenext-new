"use client";

import { useState } from "react";
import RetryImage from "./RetryImage";
import Lightbox from "./Lightbox";
import SectionHeading from "./SectionHeading";
import { projects, rowA, rowB } from "../data/projects";

const ROW_HEIGHT = 460;

function Strip({ photos, scrollClass, loopClass, onOpen, offset = 0 }) {
  // Each group is rendered twice so the CSS marquee can loop seamlessly;
  // the copy is hidden from assistive tech and keyboard focus.
  return (
    <div className="row overflow-clip">
      <div className={`${scrollClass} w-max`}>
        <div className={`${loopClass} flex w-max`}>
          {[false, true].map((duplicate) => (
            <div key={String(duplicate)} className="flex gap-4 pr-4" aria-hidden={duplicate || undefined}>
              {photos.map((photo, i) => (
                <button
                  key={photo.id}
                  type="button"
                  tabIndex={duplicate ? -1 : undefined}
                  aria-label={duplicate ? undefined : `View larger: ${photo.alt}`}
                  onClick={() => onOpen(offset + i)}
                  className="photo block flex-none cursor-zoom-in overflow-clip bg-photo"
                  style={{ width: Math.round((ROW_HEIGHT * photo.w) / photo.h), height: ROW_HEIGHT }}
                >
                  <RetryImage
                    src={photo.thumb}
                    alt={duplicate ? "" : photo.alt}
                    width={photo.tw}
                    height={photo.th}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [current, setCurrent] = useState(null);

  return (
    <section id="work" className="on-light overflow-clip bg-surface pt-32 pb-[120px]">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8">
        <SectionHeading eyebrow="Recent work" title="Our projects" />
      </div>

      <Strip photos={rowA} scrollClass="hs-l" loopClass="strip-a" onOpen={setCurrent} />
      <div className="mt-4">
        <Strip photos={rowB} scrollClass="hs-r" loopClass="strip-b" onOpen={setCurrent} offset={rowA.length} />
      </div>

      <p className="mx-auto mt-7 max-w-[1320px] px-6 text-[15px] text-dim sm:px-8">
        Click any photo to enlarge it and browse the rest.
      </p>

      {current !== null && (
        <Lightbox photos={projects} index={current} onChange={setCurrent} onClose={() => setCurrent(null)} />
      )}
    </section>
  );
}
