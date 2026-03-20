import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cinema01 from "@/assets/projects/cinema-01.jpg";
import cinema04 from "@/assets/projects/cinema-04.jpg";
import cinema07 from "@/assets/projects/cinema-07.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Ticket sales for film: started",
      description: "The True Shepherd documentary film tickets are now available for purchase.",
      image: cinema01,
      slug: "ticket-sales-film",
    },
    {
      title: "True Shepherd in Diemen cinema: a great success",
      description: "A successful screening of the True Shepherd documentary in Diemen cinema.",
      image: cinema04,
      slug: "true-shepherd-diemen",
    },
    {
      title: "Film premiere True Shepherd",
      description: "The premiere of our documentary celebrating Archbishop Mor Julius Yeshu Cicek.",
      image: cinema07,
      slug: "film-premiere",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">PROJECTS</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Initiatives that bridge tradition and innovation</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} to={`/projects/${project.slug}`} className="block">
              <Card className="group overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 bg-card h-full">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,0%,0.7)] via-[hsl(0,0%,0%,0.3)] to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-primary-foreground mb-2">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
