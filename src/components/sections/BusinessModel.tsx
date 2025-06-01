import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";

const plans = [
  {
    size: 'Starter',
    headcount: '1 – 50 employees',
    pricing: 'No Hire, No Pay',
    fee: '$500',
    extras: 'First hire each year is free • Access to basic analytics',
  },
  {
    size: 'Growth',
    headcount: '51 – 250 employees',
    pricing: 'No Hire, No Pay',
    fee: '$800',
    extras: 'Includes smart-filtering engine and up to 3 hiring manager seats',
  },
  {
    size: 'Scale-Up',
    headcount: '251 – 1,000 employees',
    pricing: 'No Hire, No Pay',
    fee: '$1,200',
    extras: 'Priority candidate alerts • Unlimited hiring manager seats',
  },
  {
    size: 'Enterprise',
    headcount: '1,001+ employees',
    pricing: 'No Hire, No Pay',
    fee: 'Custom (volume-based)',
    extras: 'Dedicated success manager • Custom analytics & API access',
  },
];

export const BusinessModel = () => {
  return (
    <section className="bg-body text-heading-1 py-16">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Business Model</Title>
          <Paragraph>
            Transparent, fair, and growth-adapted pricing for companies of all sizes.
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">

          {plans.map((plan, index) => (
            <Info key={index} title="" description="">
              <div className="space-y-4 max-w-[250px] mx-auto text-left">
                <h3 className="text-xl font-bold text-heading-1">{plan.size}</h3>
                <p className="text-sm text-heading-2">{plan.headcount}</p>

                <div>
                  <p className="text-sm font-semibold">Pricing Model</p>
                  <p className="text-heading-3">{plan.pricing}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Fee per Successful Hire</p>
                  <p className="text-heading-3">{plan.fee}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Extras</p>
                  <p className="text-sm text-heading-3">{plan.extras}</p>
                </div>
              </div>
            </Info>

          ))}
        </div>
      </Container>
    </section>
  );
};
