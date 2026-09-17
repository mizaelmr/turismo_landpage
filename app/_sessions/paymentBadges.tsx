import Container from "../_components/Container";

export function PaymentBadges() {
  return (
    <section className="py-10 bg-white border-b border-gray-100">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/payment-logos/stripe.svg"
              alt="Stripe"
              width={90}
              height={38}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/payment-logos/mercadopago.svg"
              alt="Mercado Pago"
              width={38}
              height={38}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/payment-logos/pix.svg"
              alt="Pix"
              width={38}
              height={38}
            />
          </div>
          <p className="text-sm text-gray-500 text-center">
            Sua assinatura é processada com segurança via Stripe · Seus
            clientes pagam as reservas com Mercado Pago e Pix
          </p>
        </div>
      </Container>
    </section>
  );
}
