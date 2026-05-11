import Image from "next/image";

export function ProudJourneySection() {
  return (
    <section className="relative w-full overflow-hidden h-[392px]">
      <Image
        src="/images/headers/headerVEcHUNGTOI.webp"
        alt="Proud Journey Banner"
        fill
        priority
        quality={80}
        sizes="(max-width: 768px) 100vw, 1920px"
        className="object-cover"
        style={{ objectPosition: 'center 45%' }}
      />
    </section>
  );
}