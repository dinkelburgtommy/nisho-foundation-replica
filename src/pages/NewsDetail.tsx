import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const newsArticles: Record<string, { title: string; date: string; image: string; content: string[] }> = {
  "music-video-true-shepherd": {
    title: "MUSIC VIDEO OF THE NEW SONG 'TRUE SHEPHERD' IN HONOR OF ARCHBISHOP MOR JULIUS YESHU CICEK NOW ONLINE",
    date: "December 2024",
    image: "https://www.nishofoundation.com/wp-content/uploads/2024/12/StatueNew.jpg",
    content: [
      "The Nisho Foundation is proud to announce the release of the music video for the new song 'True Shepherd,' created in honor of Archbishop Mor Julius Yeshu Cicek.",
      "This music video celebrates the life and legacy of Archbishop Cicek, who dedicated his life to the preservation of the Syriac Aramaic language and culture. The song captures the spirit of his mission and the impact he had on the Aramaic community worldwide.",
      "The production was made possible through the collaboration of talented musicians, filmmakers, and community members who share the vision of preserving Aramaic heritage for future generations.",
      "Watch the music video and share it with your community to help spread the message of cultural preservation and unity.",
    ],
  },
  "commemoration-archbishop-cicek": {
    title: "HUNDREDS OF FAITHFUL PRESENT DURING 19-YEAR COMMEMORATION OF ARCHBISHOP CICEK",
    date: "November 2024",
    image: "https://www.nishofoundation.com/wp-content/uploads/2024/11/Herdenking_00.jpg",
    content: [
      "Hundreds of believers gathered at the Mor Ephrem Monastery to commemorate the 19th anniversary of the passing of Archbishop Mor Julius Yeshu Cicek.",
      "The commemoration brought together members of the Syriac Aramaic community from across the Netherlands and beyond, united in their respect and admiration for the Archbishop's lifelong dedication to their heritage.",
      "The event featured prayers, speeches, and cultural performances that highlighted the Archbishop's contributions to the preservation of the Aramaic language, literature, and religious traditions.",
      "The Nisho Foundation played an active role in organizing this meaningful event, reinforcing its commitment to honoring the legacy of those who have shaped the Aramaic community.",
    ],
  },
  "film-screening-de-posten": {
    title: "FILM SCREENING TRUE SHEPHERD AT CAREINSTITUTION DE POSTEN IN ENSCHEDE",
    date: "December 2024",
    image: "https://www.nishofoundation.com/wp-content/uploads/2024/12/DePosten_Wareherder_01-scaled.jpg",
    content: [
      "The Nisho Foundation organized a special screening of the documentary film 'True Shepherd' at care institution De Posten in Enschede.",
      "This screening was part of our ongoing efforts to share the story of Archbishop Mor Julius Yeshu Cicek with diverse audiences, including elderly residents of care institutions.",
      "The residents and staff of De Posten were deeply moved by the documentary, which tells the inspiring story of the Archbishop's dedication to preserving the Syriac Aramaic heritage.",
      "The event demonstrated the universal appeal of stories about cultural preservation and the importance of sharing these narratives across different communities and generations.",
    ],
  },
  "true-shepherd-diemen-cinema": {
    title: "True Shepherd in Diemen cinema: a great success",
    date: "March 5, 2023",
    image: "https://www.nishofoundation.com/wp-content/uploads/2024/09/Cinema_04.jpg",
    content: [
      "The screening of the documentary 'True Shepherd' at a cinema in Diemen was a resounding success, drawing a large and enthusiastic audience.",
      "The documentary, which chronicles the life and legacy of Archbishop Mor Julius Yeshu Cicek, resonated deeply with viewers from all backgrounds.",
      "Following the screening, attendees engaged in a lively discussion about the importance of cultural preservation and the role of community leaders in maintaining heritage.",
      "The success of this screening has encouraged the Nisho Foundation to plan additional screenings in other cities across the Netherlands.",
    ],
  },
  "film-premiere-true-shepherd": {
    title: "Film premiere True Shepherd: a successful event",
    date: "October 31, 2023",
    image: "https://www.nishofoundation.com/wp-content/uploads/2024/09/Cinema_07.jpg",
    content: [
      "The premiere of the documentary film 'True Shepherd' was a landmark event for the Nisho Foundation and the Aramaic community.",
      "The film celebrates the life and work of Archbishop Mor Julius Yeshu Cicek, highlighting his tireless efforts to preserve the Syriac Aramaic language and culture.",
      "The premiere attracted a diverse audience, including community leaders, cultural enthusiasts, and members of the Aramaic diaspora.",
      "The event marked a significant milestone in the Nisho Foundation's mission to document and share the rich heritage of the Aramaic community.",
    ],
  },
  "ticket-sales-true-shepherd": {
    title: "Ticket sales for the film True Shepherd started",
    date: "October 24, 2023",
    image: "https://www.nishofoundation.com/wp-content/uploads/2024/09/Cinema_01.jpg",
    content: [
      "The Nisho Foundation is excited to announce that tickets for the documentary film 'True Shepherd' are now available for purchase.",
      "This documentary tells the inspiring story of Archbishop Mor Julius Yeshu Cicek and his dedication to the Syriac Aramaic community.",
      "Tickets can be purchased through our website, and we encourage everyone to secure their seats early as demand is expected to be high.",
      "By attending the screening, you are supporting the Nisho Foundation's mission to preserve and promote Aramaic heritage through cultural initiatives.",
    ],
  },
};

const NewsDetail = () => {
  const { slug } = useParams();
  const article = slug ? newsArticles[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article not found</h1>
          <Link to="/news" className="text-primary hover:text-primary/80">← Back to News</Link>
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
          <Link to="/news" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>
          <p className="text-sm text-muted-foreground mb-4">{article.date}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{article.title}</h1>
          <img src={article.image} alt={article.title} className="w-full h-80 object-cover mb-8" />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetail;
