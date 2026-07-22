# Assignment: Interactive Profile Card

Welcome! In this assignment, you will build a dynamic, interactive user profile card using HTML, CSS, and JavaScript. 

---

## Task Requirements

### 1. HTML Structure & Setup
Ensure your `index.html` file contains the following elements with these **exact IDs**:
* An outer container `<div>` with `id="profile-card"` wrapping the entire component.
* A button with `id="toggle-theme-btn"` to switch themes.
* An unordered list `<ul>` with `id="skills-list"` containing default skill items inside `<li>` tags.
* An input field with `id="skill-input"` where users can type a new skill.
* A button with `id="add-skill-btn"` to submit the typed skill.
* Properly link `style.css` in the `<head>` and `script.js` before the closing `</body>` tag.

---

### 2. Styling (CSS)
* Create rules in `style.css` to visually format the profile card.
* Define a class named `.dark-theme` that modifies the background color and text color of the profile card when applied.

---

### 3. Interactivity (JavaScript)
Implement the following logic inside `script.js`:
1. **Toggle Theme**:
   * Add a click event listener to `#toggle-theme-btn`.
   * When clicked, toggle the `.dark-theme` class on the `#profile-card` element.
2. **Add Skills**:
   * Add a click event listener to `#add-skill-btn`.
   * Retrieve the text entered in `#skill-input`.
   * If the input contains non-whitespace text:
     * Create a new `<li>` element containing the text.
     * Append it to the `#skills-list`.
     * Clear the text inside `#skill-input`.
   * **Important:** Do not add empty elements or items containing only whitespace.

---

## Scoring Breakdown (100 Points Total)

* **20 pts**: Correct HTML IDs present.
* **10 pts**: External stylesheet linked properly.
* **35 pts**: Theme toggle functionality works correctly.
* **25 pts**: New skill items added and input cleared.
* **10 pts**: Empty/whitespace-only input ignored.

---

## How to Submit
Commit and push your changes (`index.html`, `style.css`, `script.js`) to your GitHub repository before the deadline. The auto-grader will run automatically upon pushing.
