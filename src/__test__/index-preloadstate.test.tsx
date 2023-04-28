import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import ClerkComponent from "../components/ClerkComponent";

describe("ClerkComponent", () => {
  it("Test loading state", () => {
    vi.mock("@clerk/nextjs", () => {
      // Create an mockedFunctions object to match the functions we are importing from the @nextjs/clerk package in the ClerkComponent component.
      const mockedFunctions = {
        useUser: () => ({
          isLoaded: false,
        }),
      };

      return mockedFunctions;
    });

    render(<ClerkComponent />);

    screen.getByText("Loading...");
  });
});
