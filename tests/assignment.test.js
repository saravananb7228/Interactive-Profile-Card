const fs = require("fs");
const path = require("path");

if (typeof global.TextEncoder === "undefined") {
  const { TextEncoder, TextDecoder } = require("util");
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

const { JSDOM } = require("jsdom");

let document;
let window;

beforeEach(() => {
  const html = fs.readFileSync(
    path.resolve(__dirname, "../index.html"),
    "utf8"
  );

  const dom = new JSDOM(html, {
    runScripts: "dangerously",
    resources: "usable",
  });

  window = dom.window;
  document = window.document;

  const scriptCode = fs.readFileSync(
    path.resolve(__dirname, "../script.js"),
    "utf8"
  );

  const scriptEl = document.createElement("script");
  scriptEl.textContent = scriptCode;
  document.body.appendChild(scriptEl);
});

describe("Web Dev Assignment - Auto Evaluation", () => {
  test("1. HTML includes all required element IDs (20 points)", () => {
    expect(document.getElementById("profile-card")).not.toBeNull();
    expect(document.getElementById("toggle-theme-btn")).not.toBeNull();
    expect(document.getElementById("skill-input")).not.toBeNull();
    expect(document.getElementById("add-skill-btn")).not.toBeNull();
    expect(document.getElementById("skills-list")).not.toBeNull();
  });

  test("2. CSS stylesheet is correctly linked in head (20 points)", () => {
    const links = [...document.querySelectorAll("link[rel='stylesheet']")];
    const hasStyle = links.some((link) =>
      link.getAttribute("href")?.includes("style.css")
    );

    expect(hasStyle).toBe(true);
  });

  test("3. Clicking #toggle-theme-btn toggles .dark-theme on #profile-card (20 points)", () => {
    const profileCard = document.getElementById("profile-card");
    const btn = document.getElementById("toggle-theme-btn");

    expect(profileCard.classList.contains("dark-theme")).toBe(false);

    btn.click();
    expect(profileCard.classList.contains("dark-theme")).toBe(true);

    btn.click();
    expect(profileCard.classList.contains("dark-theme")).toBe(false);
  });

  test("4. Adding a valid skill appends a <li> element and clears input (20 points)", () => {
    const input = document.getElementById("skill-input");
    const button = document.getElementById("add-skill-btn");
    const list = document.getElementById("skills-list");
    const initialLength = list.children.length;

    input.value = "JavaScript";
    button.click();

    expect(list.children.length).toBe(initialLength + 1);
    expect(list.children[list.children.length - 1].textContent).toBe("JavaScript");
    expect(input.value).toBe("");
  });

  test("5. Prevents adding empty or whitespace-only skills (20 points)", () => {
    const input = document.getElementById("skill-input");
    const button = document.getElementById("add-skill-btn");
    const list = document.getElementById("skills-list");
    const initialLength = list.children.length;

    input.value = "     ";
    button.click();

    expect(list.children.length).toBe(initialLength);
  });
});
