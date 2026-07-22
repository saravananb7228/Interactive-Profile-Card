const fs = require('fs');
const path = require('path');

beforeEach(() => {
  // Clear the DOM
  document.documentElement.innerHTML = '';

  // Load HTML into JSDOM
  const html = fs.readFileSync(
    path.resolve(__dirname, '../index.html'),
    'utf8'
  );
  document.documentElement.innerHTML = html;

  // Remove any previously injected scripts
  document.querySelectorAll('script').forEach(script => script.remove());

  // Load and execute script.js
  const scriptCode = fs.readFileSync(
    path.resolve(__dirname, '../script.js'),
    'utf8'
  );

  const scriptEl = document.createElement('script');
  scriptEl.textContent = scriptCode;
  document.body.appendChild(scriptEl);
});

describe('Web Dev Assignment - Auto Evaluation', () => {

  // HTML TESTS
  test('1. HTML includes all required element IDs (20 points)', () => {
    expect(document.getElementById('profile-card')).not.toBeNull();
    expect(document.getElementById('toggle-theme-btn')).not.toBeNull();
    expect(document.getElementById('skills-list')).not.toBeNull();
    expect(document.getElementById('skill-input')).not.toBeNull();
    expect(document.getElementById('add-skill-btn')).not.toBeNull();
  });

  test('2. CSS stylesheet is correctly linked in head (10 points)', () => {
    const link = document.querySelector('link[rel="stylesheet"]');
    expect(link).not.toBeNull();
    expect(link.getAttribute('href')).toBe('style.css');
  });

  // JS TESTS
  test('3. Clicking #toggle-theme-btn toggles .dark-theme on #profile-card (35 points)', () => {
    const card = document.getElementById('profile-card');
    const btn = document.getElementById('toggle-theme-btn');

    expect(card.classList.contains('dark-theme')).toBe(false);

    btn.click();
    expect(card.classList.contains('dark-theme')).toBe(true);

    btn.click();
    expect(card.classList.contains('dark-theme')).toBe(false);
  });

  test('4. Adding a valid skill appends a <li> element and clears input (25 points)', () => {
    const input = document.getElementById('skill-input');
    const addBtn = document.getElementById('add-skill-btn');
    const list = document.getElementById('skills-list');

    const initialLength = list.children.length;

    input.value = 'CSS Grid';
    addBtn.click();

    expect(list.children.length).toBe(initialLength + 1);
    expect(list.lastElementChild.textContent.trim()).toBe('CSS Grid');
    expect(input.value).toBe('');
  });

  test('5. Prevents adding empty or whitespace-only skills (10 points)', () => {
    const input = document.getElementById('skill-input');
    const addBtn = document.getElementById('add-skill-btn');
    const list = document.getElementById('skills-list');

    const initialLength = list.children.length;

    input.value = '   ';
    addBtn.click();

    expect(list.children.length).toBe(initialLength);
  });

});
