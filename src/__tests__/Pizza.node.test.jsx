import { render, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import Pizza from "../Pizza";

describe("Pizza.node", () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";
  const description = "super cool pizza";
  let screen;

  beforeEach(() => {
    screen = render(
      <Pizza name={name} description={description} image={src} />,
    );
  });

  afterEach(cleanup);

  test("alt text renders on image", async () => {
    const img = screen.getByRole("img");
    expect(img.src).toBe(src);
    expect(img.alt).toBe(name);
  });

  test("to have default image if none is provided", async () => {
    const img = screen.getByRole("img");
    expect(img.src).not.toBe("");
  });
});
// AAA (Arrange, Act, Assert) pattern is used in the test cases.
