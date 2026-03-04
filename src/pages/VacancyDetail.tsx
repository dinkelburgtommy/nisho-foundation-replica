import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const vacancyData: Record<string, { title: string; content: string[] }> = {
  "general-intern": {
    title: "General Intern",
    content: [
      "The Nisho Foundation is looking for a motivated General Intern to join our team and support our mission of preserving and promoting Aramaic heritage.",
      "As a General Intern, you will assist with various tasks across different departments, gaining valuable experience in non-profit management, cultural preservation, and community engagement.",
      "Responsibilities include assisting with event planning and coordination, supporting social media and communication efforts, conducting research on cultural and historical topics, and helping with administrative tasks.",
      "We are looking for candidates who are passionate about cultural preservation, have strong organizational skills, and are eager to learn and contribute to a meaningful cause.",
      "This is an excellent opportunity for students or recent graduates looking to gain hands-on experience in the non-profit sector while making a positive impact on the Aramaic community.",
      "If you are interested in this position, please send your CV and a brief motivation letter to nishofoundation@gmail.com.",
    ],
  },
  "editorial-intern": {
    title: "Editorial and Production Intern",
    content: [
      "The Nisho Foundation is seeking an Editorial and Production Intern to support our content creation and media production efforts.",
      "In this role, you will work closely with our editorial team to create compelling content that highlights the rich history and culture of the Aramaic community.",
      "Key responsibilities include writing and editing articles for our website and newsletters, assisting with video production and post-production, managing content for social media platforms, and researching topics related to Aramaic history and current affairs.",
      "The ideal candidate has strong writing and communication skills, an interest in media production, and a passion for storytelling and cultural heritage.",
      "Experience with video editing software, social media management, or journalism is a plus but not required.",
      "To apply, please send your CV, a writing sample, and a brief motivation letter to nishofoundation@gmail.com.",
    ],
  },
};

const VacancyDetail = () => {
  const { slug } = useParams();
  const vacancy = slug ? vacancyData[slug] : null;

  if (!vacancy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Vacancy not found</h1>
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
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">{vacancy.title}</h1>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {vacancy.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VacancyDetail;
