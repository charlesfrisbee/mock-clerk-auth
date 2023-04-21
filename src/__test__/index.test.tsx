import { it, vi } from "vitest";

import { render, screen } from "@testing-library/react";

import ClerkComponent from "../components/ClerkComponent";

type SignOutButtonProps = {
  children: React.ReactNode;
};

it("Test Clerk signin", () => {
  vi.mock("@clerk/nextjs", () => ({
    SignOutButton: ({ children }: SignOutButtonProps) => <div>{children}</div>,
    SignInButton: ({ children }: SignOutButtonProps) => <div>{children}</div>,
    useUser: () => ({
      isSignedIn: false,
      user: {
        id: "user_2NNEqL2nrIRdJ194ndJqAHwEfxC",

        fullName: "Charles Harris",
      },
    }),
  }));

  render(<ClerkComponent />);

  screen.getByText("Sign in");
});
