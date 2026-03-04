import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const projectData: Record<string, { title: string; image: string; description: string; content: string[] }> = {
  "ticket-sales-film": {
    title: "Ticket sales for film: started",
    image: "https://www.nishofoundation.com/wp-content/uploads/2024/09/Cinema_01.jpg",
    description: "The True Shepherd documentary film tickets are now available for purchase.",
    content: [
      "The Nisho Foundation is thrilled to announce that ticket sales for the documentary film 'True Shepherd' have officially started.",
      "This documentary is a tribute to Archbishop Mor Julius Yeshu Cicek, capturing his extraordinary dedication to the preservation of the Syriac Aramaic language, literature, and cultural heritage.",
      "The film provides an intimate look at the Archbishop's life journey, from his early years to his role as a spiritual leader and cultural guardian for the Aramaic community worldwide.",
      "We invite everyone to purchase their tickets and join us for this special screening. Your attendance supports the Nisho Foundation's ongoing mission to preserve Aramaic heritage.",
    ],
  },
  "true-shepherd-diemen": {
    title: "True Shepherd in Diemen cinema: a great success",
    image: "https://www.nishofoundation.com/wp-content/uploads/2024/09/Cinema_04.jpg",
    description: "A successful screening of the True Shepherd documentary in Diemen cinema.",
    content: [
      "The screening of 'True Shepherd' at a cinema in Diemen was a tremendous success, bringing together community members and film enthusiasts alike.",
      "The event showcased the power of documentary filmmaking in preserving cultural narratives and inspiring future generations.",
      "Audience members expressed deep appreciation for the film's portrayal of Archbishop Cicek's contributions to the Aramaic community.",
      "The success of this screening reinforces the Nisho Foundation's commitment to using creative media as a tool for cultural preservation and education.",
    ],
  },
  "film-premiere": {
    title: "Film premiere True Shepherd",
    image: "https://www.nishofoundation.com/wp-content/uploads/2024/09/Cinema_07.jpg",
    description: "The premiere of our documentary celebrating Archbishop Mor Julius Yeshu Cicek.",
    content: [
      "The film premiere of 'True Shepherd' marked a historic moment for the Nisho Foundation and the entire Aramaic community.",
      "Held at a prestigious venue, the premiere attracted distinguished guests, community leaders, and cultural advocates from across Europe.",
      "The documentary received overwhelming positive feedback, with many praising its authentic portrayal of the Archbishop's legacy and its high production quality.",
      "This project represents the Nisho Foundation's dedication to producing meaningful cultural content that resonates with audiences worldwide.",
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? projectData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:text-primary/80">← Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{project.title}</h1>
          <img src={project.image} alt={project.title} className="w-full h-80 object-cover mb-8" />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {project.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
