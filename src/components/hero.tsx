import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const silos = [
  {
    title: "Government Jobs",
    href: "/government-jobs",
    description: "DPSA, provincial, and municipal vacancies",
  },
  {
    title: "Remote & Gig Jobs",
    href: "/remote-gig-jobs",
    description: "Work from home and freelance opportunities",
  },
  {
    title: "Career Advice",
    href: "/career-advice",
    description: "Tips, guides, and expert insights",
  },
  {
    title: "Learnerships & Internships",
    href: "/learnerships-internships",
    description: "Entry-level programs and training",
  },
  {
    title: "News & Updates",
    href: "/news-updates",
    description: "Latest job market news",
  },
];

export function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="text-center text-white mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Jobs & Career Success in South Africa
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Daily job market news, government vacancies, and expert advice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {silos.map((silo) => (
            <Link key={silo.href} href={silo.href} className="group">
              <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-1">{silo.title}</h3>
                  <p className="text-sm text-gray-300">{silo.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}