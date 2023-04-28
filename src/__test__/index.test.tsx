import { afterAll, afterEach, beforeEach, describe, it, vi } from "vitest";

import { cleanup, render, screen } from "@testing-library/react";

import ClerkComponent from "../components/ClerkComponent";

type SignInOutButtonProps = {
  children: React.ReactNode;
};

// For some reason the vi.mock function is not resetting itself properly after each test.
// For now the solution is to either run the test separately, or to put the tests in separate files.

describe("ClerkComponent", () => {
  afterEach(() => {
    // vi.unmock("@clerk/nextjs");
    // cleanup();
    // vi.resetAllMocks();
    // vi.resetModules();
  });

  it("Test Clerk signin", () => {
    vi.mock("@clerk/nextjs", () => {
      // Create an mockedFunctions object to match the functions we are importing from the @nextjs/clerk package in the ClerkComponent component.
      const mockedFunctions = {
        SignInButton: ({ children }: SignInOutButtonProps) => (
          <div>{children}</div>
        ),
        SignOutButton: ({ children }: SignInOutButtonProps) => (
          <div>{children}</div>
        ),
        useUser: () => ({
          isSignedIn: true,
          user: {
            id: "user_2NNEqL2nrIRdJ194ndJqAHwEfxC",
            fullName: "Charles Harris",
          },
          isLoaded: true,
        }),
      };
      return mockedFunctions;
    });
    vi.unmock("@clerk/nextjs");
    cleanup();
    vi.resetAllMocks();
    vi.resetModules();
    render(<ClerkComponent />);
    screen.getByText("Sign out");
  });
});
