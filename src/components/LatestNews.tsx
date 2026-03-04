import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const mainNews = [
    {
      title: "MUSIC VIDEO OF THE NEW SONG 'TRUE SHEPHERD' IN HONOR OF ARCHBISHOP MOR JULIUS YESHU CICEK NOW ONLINE",
      image: "https://www.nishofoundation.com/wp-content/uploads/2024/12/StatueNew.jpg",
      slug: "music-video-true-shepherd",
    },
    {
      title: "HUNDREDS OF FAITHFUL PRESENT DURING 19-YEAR COMMEMORATION OF ARCHBISHOP CICEK",
      image: "https://www.nishofoundation.com/wp-content/uploads/2024/11/Herdenking_00.jpg",
      slug: "commemoration-archbishop-cicek",
    },
    {
      title: "FILM SCREENING TRUE SHEPHERD AT CAREINSTITUTION DE POSTS IN ENSCHEDE",
      image: "https://www.nishofoundation.com/wp-content/uploads/2024/12/DePosten_Wareherder_01-scaled.jpg",
      slug: "film-screening-de-posten",
    },
  ];

  const moreNews = [
    {
      date: "MARCH 5, 2023",
      title: "True Shepherd in Diemen cinema a great success",
      slug: "true-shepherd-diemen-cinema",
    },
    {
      date: "OCTOBER 31, 2023",
      title: "Film premiere True Shepherd: a successful event",
      slug: "film-premiere-true-shepherd",
    },
    {
      date: "OCTOBER 24, 2023",
      title: "Ticket sales for the film True Shepherd started",
      slug: "ticket-sales-true-shepherd",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            LATEST NEWS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainNews.map((item, index) => (
            <Link
              key={index}
              to={`/news/${item.slug}`}
              className="block"
            >
              <Card className="group overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 bg-card h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 line-clamp-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="bg-muted p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            MORE NEWS
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {moreNews.map((item, index) => (
              <Link
                key={index}
                to={`/news/${item.slug}`}
                className="group block p-6 border border-border hover:border-primary transition-all duration-200"
              >
                <p className="text-sm text-muted-foreground mb-3">
                  {item.date}
                </p>
                <h4 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
