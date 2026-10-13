import { ArrowRight, BadgeCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandProcess, exclusiveProducts, productResults } from "@/lib/product-line";

export function ProductLine({ onContact }: { onContact: (message: string) => void }) {
  return <>
    <div className="tc-exclusive-products">
      {exclusiveProducts.map(product => <article className="tc-exclusive-product" key={product.name}>
        <img src={product.image} alt={product.name + " Tati Cubos"} loading="lazy" width="768" height="768" />
        <div className="tc-exclusive-product-copy">
          <h3>{product.name}</h3>
          <strong>{product.heading}</strong>
          <p>{product.description}</p>
          <ul>{product.benefits.map(benefit => <li key={benefit}><Check size={17} aria-hidden="true" />{benefit}</li>)}</ul>
          <Button variant="siteGold" size="site" onClick={() => onContact(`Olá, Tati! Gostaria de saber mais sobre ${product.name} e a orientação de uso.`)}>Consultar produto <ArrowRight size={17} /></Button>
        </div>
      </article>)}
    </div>
    <div className="tc-product-evolution">
      <h3>Evolução do cuidado com as unhas</h3>
      <p>Fotos enviadas pela profissional para acompanhar a apresentação da Loção Antimicótica.</p>
      <div className="tc-product-results">{productResults.map(result => <figure key={result.image}><img src={result.image} alt={result.alt} loading="lazy" /></figure>)}</div>
      <p className="tc-product-note">Os registros mostram cuidados realizados nas unhas, não comprovam efeito exclusivo do produto. Cada caso é único e os resultados variam.</p>
    </div>
    <aside className="tc-brand-process" aria-label="Processo de registro da marca">
      <BadgeCheck size={26} aria-hidden="true" />
      <h3>Marca com pedido deferido no INPI</h3>
      <p>{brandProcess.name}</p>
      <p><strong>Processo {brandProcess.number}</strong> · Pedido deferido em {brandProcess.decisionOn}</p>
    </aside>
  </>;
}