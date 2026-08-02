import React from "react";

import { Bus, Car, Hotel, Plane } from "lucide-react";

export const SERVICES_ITEMS = [
  {
    id: "service-1",
    title: "Flight Bookings",
    description:
      "Seamless international and domestic flight ticket bookings with instant confirmations.",
    icon: <Plane className="text-secondary size-6" />,
  },
  {
    id: "service-2",
    title: "Hotel Bookings",
    description:
      "Curated luxury hotels, boutique resorts, and budget-friendly stays verified for quality and comfort.",
    icon: <Hotel className="text-success size-6" />,
  },
  {
    id: "service-3",
    title: "Bus Bookings",
    description:
      "Reliable, comfortable, and affordable intercity bus tickets for effortless regional travel.",
    icon: <Bus className="text-warning size-6" />,
  },
  {
    id: "service-4",
    title: "Taxi Bookings",
    description:
      "Safe, prompt, and convenient taxi bookings for airport transfers, local sightseeing, and outstation trips.",
    icon: <Car className="text-danger size-6" />,
  },
];
