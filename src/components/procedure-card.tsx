import { Button } from "@/components/ui/button";

type ProcedureCardProps = {
  service: { title: string; text: string };
  image: string | undefined;
  kind: "aesthetic" | "podology";
  onBook: () => void;
};

export function ProcedureCard({ service, image, kind, onBook }: ProcedureCardProps) {
  return (
    <article className={`${kind === "aesthetic" ? "tc-aesthetic-card" : "tc-service-card"} tc-procedure-card`}>
      <figure className="tc-procedure-media">
        <img className="tc-procedure-image" src={image} alt={`Imagem ilustrativa de ${service.title.toLowerCase()}`} loading="lazy" width={512} height={512} />
        <figcaption>Imagem ilustrativa</figcaption>
      </figure>
      <div className="tc-procedure-copy">
        <h3>{service.title}</h3>
        <p>{service.text}</p>
        <Button variant="siteGold" size="site" onClick={onBook}>Agendar avaliação</Button>
      </div>
    </article>
  );
}