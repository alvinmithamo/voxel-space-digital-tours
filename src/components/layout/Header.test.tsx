import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

function renderWithRouter(initialPath: string = "/") {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Header />
    </MemoryRouter>
  );
}

describe("Header", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", { value: 0, writable: true });
  });

  it("renders logo and primary nav links", () => {
    renderWithRouter("/");

    expect(screen.getByAltText(/voxel space logo/i)).toBeInTheDocument();

    for (const label of ["Spaces", "Process", "Contact"]) {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    }

    expect(screen.getAllByRole("button", { name: /get started/i })[0]).toBeInTheDocument();
  });

  it("toggles mobile menu open/close when the menu button is clicked", () => {
    renderWithRouter("/");

    const toggle = screen.getByRole("button", { name: /open menu/i });
    fireEvent.click(toggle);

    expect(screen.getAllByRole("link", { name: "Spaces" }).length).toBeGreaterThan(1);

    fireEvent.click(screen.getByRole("button", { name: /close menu/i }));

    expect(screen.getAllByRole("link", { name: "Spaces" }).length).toBe(1);
  });

  it("closes the mobile menu when the route changes", () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
    expect(screen.getAllByRole("link", { name: "Spaces" }).length).toBeGreaterThan(1);

    rerender(
      <MemoryRouter initialEntries={["/about"]}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("link", { name: "Spaces" }).length).toBe(1);
  });

  it("applies scrolled styles when window scrollY exceeds threshold", async () => {
    renderWithRouter("/");
    const header = screen.getByRole("banner");

    expect(header.className).toMatch(/bg-transparent/);

    await act(async () => {
      Object.defineProperty(window, "scrollY", { value: 100, writable: true });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(header.className).toMatch(/bg-background\/90/);
  });
});
