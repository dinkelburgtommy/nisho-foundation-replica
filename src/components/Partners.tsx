const Partners = () => {
  const partners = [
    { name: "GGM Gastro", image: "https://www.nishofoundation.com/wp-content/uploads/2024/10/ggmgastro-1024x612.png" },
    { name: "Bisdom Nederland", image: "https://www.nishofoundation.com/wp-content/uploads/2024/10/Bisdom_Nederland-1024x612.png" },
    { name: "Bisdom Deutschland", image: "https://www.nishofoundation.com/wp-content/uploads/2024/10/Bisdom_Duetch-1024x612.png" },
    { name: "1Twente", image: "https://www.nishofoundation.com/wp-content/uploads/2024/10/1Twente-1024x612.png" },
    { name: "SuryoyoSat Nederland", image: "https://www.nishofoundation.com/wp-content/uploads/2024/10/SuryoyoSat_Nederland-1024x612.png" },
    { name: "David Productions", image: "https://www.nishofoundation.com/wp-content/uploads/2024/11/Logos_DavidProductions-1024x612.png" },
    { name: "Kaya Advocatenkantoor", image: "https://www.nishofoundation.com/wp-content/uploads/2024/10/Kaya-1024x612.png" },
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
