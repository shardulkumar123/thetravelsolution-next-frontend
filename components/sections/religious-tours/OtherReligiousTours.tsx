import { Container } from "@/components/ui/Container";
import { TourCard } from "@/components/ui/TourCard";
import { Heading, Text } from "@/components/ui/Typography";

import { OTHER_RELIGIOUS_TOURS } from "@/utils/constants";

interface OtherReligiousToursProps {
  onBookClick: (packageName: string) => void;
}

export const OtherReligiousTours: React.FC<OtherReligiousToursProps> = ({ onBookClick }) => {
  return (
    <section className="py-20 bg-surface/30">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Heading
            variant="h2"
            className="text-text-primary font-extrabold tracking-tight text-3xl md:text-4xl"
          >
            Other Sacred Journeys
          </Heading>
          <Text variant="body-md" color="text-secondary" className="leading-relaxed mt-3">
            Explore historical temples, pristine rivers, and architectural heritage across
            India&apos;s holiest destinations.
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {OTHER_RELIGIOUS_TOURS.map((pkg) => (
            <TourCard key={pkg.id} pkg={pkg} onBookClick={onBookClick} />
          ))}
        </div>
      </Container>
    </section>
  );
};

OtherReligiousTours.displayName = "OtherReligiousTours";
