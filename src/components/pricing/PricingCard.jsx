import { Check } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const PricingCard = ({ tier, serviceName = "" }) => {
  const params = new URLSearchParams({
    plan: tier.name,
    service: serviceName,
    price: tier.price + (tier.billing || ""),
  });
  const contactHref = `/contact?${params.toString()}`;
  const isCustom = tier.id === "custom";

  return (
    <Card
      hover
      className={`relative w-full min-h-[560px] ${
        tier.highlighted ? "border-accent-blue-500/60 shadow-glowBlue" : ""
      }`}
    >
      {tier.highlighted && (
        <Badge variant="blue" className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap">
          Most Popular
        </Badge>
      )}
      <div className="flex h-full flex-col p-4 sm:p-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">{tier.name}</h3>
        <p className="mb-4 text-sm text-text-secondary">{tier.subtitle}</p>

        <div className="mb-1">
          <span className="text-3xl font-extrabold text-accent-blue-500">
            {tier.price}
          </span>
          {tier.billing && <span className="ml-1 text-sm text-text-muted">{tier.billing}</span>}
        </div>
        {tier.maintenance && <p className="mb-4 text-xs text-text-muted">{tier.maintenance}</p>}

        <ul className="mb-6 mt-3 flex-1 space-y-1.5 text-text-secondary">
          {tier.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-blue-500" />
              {feature}
            </li>
          ))}
        </ul>

        <Button pill href={contactHref} className="w-full">
          {isCustom ? "Contact Us" : "Get Started"}
        </Button>
      </div>
    </Card>
  );
};

export default PricingCard;
