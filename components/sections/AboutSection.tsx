import React from "react";

import { Container } from "@/components/ui/Container";

import { AboutContent } from "./about/AboutContent";
import { AboutImage } from "./about/AboutImage";

export const AboutSection: React.FC = () => {
  const desc =
    "The most beautiful, relaxing moments in our life are the days we travel. It excites you and gives you a thrill. Whether you're about to embark on an exciting tour or planning the biggest adventure, discover all the wonderful things set for you. It is an enriching and life expanding experience. As the best tour and travel agency in Dehradun we offering not just extraordinary travel experiences but also the most cherished memories of amazing holidays to its valued patrons. The Travelit goes an extra mile to enhance the quality of your holidays. So leave your worries on us and gear up to enjoy the best travelling experience of your lifetime. Plan your trip to India with us, the best travel agency in Dehradun. Our experienced team will help you create unforgettable memories with our customized tours and packages in India.";

  return (
    <section className="bg-background text-text-primary py-20 relative overflow-hidden" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AboutImage
            src="https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=800&q=80"
            alt="Adventure in snow mountains"
          />
          <AboutContent
            badge="About Us"
            title="Every moment is an adventure waiting to be discovered."
            description={desc}
          />
        </div>
      </Container>
    </section>
  );
};

AboutSection.displayName = "AboutSection";
