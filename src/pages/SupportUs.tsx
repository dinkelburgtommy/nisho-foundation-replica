import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import wallImg from "@/assets/wall.jpg";

const SupportUs = () => {
  const steps = [
    { title: "Choose to Support Us", description: "If you believe in the mission of the Nisho Foundation—fostering cultural exchange between Europe and the Middle East—you can support our projects and activities through a donation. Your contribution helps advance our research and community programs." },
    { title: "Make Your Donation", description: "Once you've decided to donate, simply complete the payment process on our website. Your donation will go a long way in supporting the preservation and study of thousands of years of cultural exchange between these regions." },
    { title: "Automatic Subscription", description: "After completing your donation, you will automatically be subscribed to our donor network. As part of this, you'll receive regular updates on the foundation's progress and projects." },
    { title: "Immediate Confirmation", description: "You will receive an email confirmation immediately after your donation has been processed, acknowledging that we've received your generous contribution." },
    { title: "Project Allocation Information (within one week)", description: "Within one week of your donation, we will send you detailed information about where your donation is being allocated. This email will provide insights into which project or area your funds are supporting, along with other relevant details about the initiative you're helping to build." },
    { title: "Donor Benefits", description: "As a valued donor, you will not only be kept informed of the foundation's ongoing activities, but you'll also enjoy a discount on participation in our events and programs as a token of our appreciation for your support." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-8">DONATION</h1>
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">How are donations used?</h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Donations support our educational endowment, cultural preservation projects, and humanitarian efforts. We ensure that contributions are used effectively to promote the Aramaic heritage and support the community. Donors receive updates on how their contributions are making an impact.
            </p>
            <div className="relative mb-16">
              <img src={wallImg} alt="Aramaic Text" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,0%,0.6)] to-transparent flex items-center">
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-primary-foreground">The Oldest Language</h3>
                  <p className="text-primary-foreground/80 mt-2">In the Middle East</p>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-8">How Our Donation Process Works</h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">{index + 1}</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Partners />
      <Footer />
    </div>
  );
};

export default SupportUs;
