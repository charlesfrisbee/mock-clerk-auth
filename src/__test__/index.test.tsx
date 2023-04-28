import { it, vi } from "vitest";

import { render, screen } from "@testing-library/react";

import ClerkComponent from "../components/ClerkComponent";

import { type SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

type SignInOutButtonProps = {
  children: React.ReactNode;
};

type ReturnSigninButton = ReturnType<typeof SignInButton>;

it("Test Clerk signin", () => {
  vi.mock("@clerk/nextjs", () => {
    // Create an mockedFunctions object to match the functions we are importing from the @nextjs/clerk package in the ClerkComponent component.
    const mockedFunctions = {
      SignInButton: ({
        children,
      }: SignInOutButtonProps): ReturnSigninButton => <div>{children}</div>,
      SignOutButton: ({ children }: SignInOutButtonProps) => (
        <div>{children}</div>
      ),
      useUser: () => ({
        isSignedIn: false,
        user: {
          id: "user_2NNEqL2nrIRdJ194ndJqAHwEfxC",

          fullName: "Charles Harris",
        },
      }),
    };

    return mockedFunctions;
  });

  render(<ClerkComponent />);

  screen.getByText("Sign in");
});
