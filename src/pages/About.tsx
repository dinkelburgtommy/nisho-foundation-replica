import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-8">ORGANISATION</h1>
              
              <h2 className="text-2xl font-bold text-foreground mb-6">Our story</h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded on August 7, 2018, in Enschede (NL), the Nisho Foundation is an independent, young, and ambitious non-profit organization driven by a clear mission. The word Nisho, meaning "goal" in Aramaic, reflects our belief that every person and organization should have a purpose to work toward.
                </p>
                <p>
                  Our purpose is to promote the educational, social, cultural, and political growth of the Aramaic (Suryoye) community. Through initiatives that explore and preserve Aramaic history and heritage, we also address contemporary issues faced by the community today.
                </p>
                <p className="font-semibold text-foreground">
                  The Nisho Foundation supports the Aramaic (Suryoye) community's educational, social, and cultural growth while preserving its rich heritage.
                </p>
                <p>
                  We achieve our mission by implementing educational and cultural projects designed to raise awareness of vital topics. Through innovative and engaging approaches, we strive to foster meaningful conversations around our shared heritage and modern challenges. Alongside the transfer of traditional knowledge, we create new insights by connecting professionals who share their expertise and experiences with each other and the community.
                </p>
                <p>
                  Our efforts are shared through meetings, digital platforms, newsletters, and diverse networking activities. The Nisho Foundation is open to partnerships and values collaboration with organizations that have similar social goals. While our focus is on the Aramaic community, our reach and vision extend beyond Aramaic organizations alone, as we work to build bridges with all communities dedicated to social progress and cultural preservation.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">NEWS</h3>
                <div className="space-y-4">
                  <Link to="/news/true-shepherd-diemen-cinema" className="block p-4 border border-border hover:border-primary transition-colors">
                    <h4 className="font-medium text-foreground hover:text-primary transition-colors">True Shepherd in Diemen cinema a great success</h4>
                  </Link>
                  <Link to="/news/film-premiere-true-shepherd" className="block p-4 border border-border hover:border-primary transition-colors">
                    <h4 className="font-medium text-foreground hover:text-primary transition-colors">Film premiere True Shepherd: a successful event</h4>
                  </Link>
                  <Link to="/news/ticket-sales-true-shepherd" className="block p-4 border border-border hover:border-primary transition-colors">
                    <h4 className="font-medium text-foreground hover:text-primary transition-colors">Ticket sales for the film True Shepherd started</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Partners />
      <Footer />
    </div>
  );
};

export default About;
