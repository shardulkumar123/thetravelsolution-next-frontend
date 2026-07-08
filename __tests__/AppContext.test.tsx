import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { AppProvider, useApp } from "@/context/AppContext";

function TestComponent() {
  const { theme, toggleTheme } = useApp();
  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

describe("AppContext", () => {
  it("provides the default theme and allows toggling", () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    const themeValue = screen.getByTestId("theme-value");
    const button = screen.getByRole("button", { name: /toggle/i });

    expect(themeValue).toHaveTextContent("light");

    fireEvent.click(button);
    expect(themeValue).toHaveTextContent("dark");
  });
});
