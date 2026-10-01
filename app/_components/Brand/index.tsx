import Image from "next/image";
import Link from "next/link";

type Tone = "light" | "dark";

// Assinatura horizontal para navegação: monograma + logotipo (manual: não alterar proporções).
export function LogoHorizontal({ tone = "light", className = "" }: { tone?: Tone; className?: string }) {
  return (
    <Link href="/" aria-label="UPTUR — página inicial" className={`flex items-center gap-3 ${className}`}>
      <Image src={`/brand/monograma-${tone}.png`} alt="" width={749} height={471} priority className="h-7 w-auto" />
      <Image src={`/brand/logotipo-${tone}.png`} alt="UPTUR" width={904} height={111} priority className="hidden h-[15px] w-auto sm:block" />
    </Link>
  );
}

export function Monograma({ tone = "light", className = "" }: { tone?: Tone; className?: string }) {
  return <Image src={`/brand/monograma-${tone}.png`} alt="" width={749} height={471} className={className} />;
}

export function Assinatura({ tone = "light", className = "" }: { tone?: Tone; className?: string }) {
  return <Image src={`/brand/assinatura-${tone}.png`} alt="UPTUR" width={904} height={662} className={className} />;
}
