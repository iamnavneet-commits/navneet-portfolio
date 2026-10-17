import { building } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

export function Building() {
  return (
    <section id="building" aria-labelledby="building-heading" className="border-t border-rule py-24 md:py-32">
      <div className="shell">
        <SectionHeading id="building-heading" title={building.heading} intro={building.intro} />

        <div className="mt-16 grid gap-14 md:mt-20 lg:grid-cols-2 lg:gap-16">
          {building.tracks.map((track) => (
            <div key={track.name}>
              <h3 className="type-title border-b border-ink pb-4">{track.name}</h3>
              <ul>
                {track.items.map((item) => (
                  <li key={item.title} className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[1fr_auto] sm:gap-6">
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="mt-1.5 max-w-[32rem] text-[0.96rem] text-ink-soft">{item.text}</p>
                    </div>
                    <p className="order-first sm:order-none">
                      <span className="inline-block rounded-full border border-rule-strong px-2.5 py-0.5 text-[0.76rem] text-ink-soft">
                        {item.status}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
