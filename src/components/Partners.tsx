import ggmgastro from "@/assets/partners/ggmgastro.png";
import bisdomNederland from "@/assets/partners/bisdom-nederland.png";
import bisdomDeutschland from "@/assets/partners/bisdom-deutschland.png";
import oneTwente from "@/assets/partners/1twente.png";
import suryoyosat from "@/assets/partners/suryoyosat.png";
import davidProductions from "@/assets/partners/david-productions.png";
import kaya from "@/assets/partners/kaya.png";

const Partners = () => {
  const partners = [
    { name: "GGM Gastro", image: ggmgastro },
    { name: "Bisdom Nederland", image: bisdomNederland },
    { name: "Bisdom Deutschland", image: bisdomDeutschland },
    { name: "1Twente", image: oneTwente },
    { name: "SuryoyoSat Nederland", image: suryoyosat },
    { name: "David Productions", image: davidProductions },
    { name: "Kaya Advocatenkantoor", image: kaya },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            PARTNERS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-card border border-border"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-h-16 w-auto object-contain opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
