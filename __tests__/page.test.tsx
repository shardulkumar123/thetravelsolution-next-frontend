import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";

import { AppProvider } from "@/context/AppContext";

import Home from "@/app/page";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

describe("Home Page", () => {
  it("renders the heading", () => {
    const queryClient = createTestQueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Home />
        </AppProvider>
      </QueryClientProvider>
    );
    const heading = screen.getByRole("heading", {
      name: /Production Ready Boilerplate/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
