import React from "react";
import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

import App from "./App";

describe("portfolio application", () => {
  it("renders the primary sections and site identity", () => {
    const markup = renderToStaticMarkup(<App />);

    expect(markup).toContain("Alexandrie Grenier");
    expect(markup).toContain('id="home"');
    expect(markup).toContain('id="about"');
    expect(markup).toContain('id="portfolio"');
    expect(markup).toContain('id="footer"');
  });
});
