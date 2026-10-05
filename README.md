# Karan Chakma — Editable Portfolio

Live site: https://karanchakma931-crypto.github.io/Karan-chakma-portfolio/

## Files
- `index.html` — **main file to edit your name, about text, skills, projects, education, certificate, languages and contact details.**
- `style.css` — colors, fonts, spacing, cards, layout and responsive/mobile design.
- `script.js` — mobile menu, scroll animation and automatic copyright year. You normally do not need to edit this file.

## Easiest way to edit
If you only want to change what the website says, edit **`index.html`**. You do not need to understand the whole code.

### 1. Change your name / title
Open `index.html` and search for:
- `Karan Chakma`
- `CSE Student & Aspiring Software Engineer`

Replace only the words you want to change.

### 2. Change About Me
Search for `Professional Summary`. The two `<p>...</p>` lines below it contain the About text.

### 3. Change Skills
Search for `What I’m Learning`. Each skill looks like this:
`<span>HTML</span>`

Change the word inside `<span>...</span>`. To add another skill, copy an existing `<span>...</span>` and edit the text.

### 4. Add or edit Projects
Search for `Selected Work`. Each project is inside:
`<article class="project"> ... </article>`

Copy the whole project block to add another project, then change the title, description and tags.

### 5. Change Education / Certificate
Search for `Academic Background` or `Learning & Recognition` and edit the text inside those sections.

### 6. Change Languages
Search for `Languages`. Change `Chakma`, `Bangla`, or `English` as needed.

### 7. Change Contact
Search for `Let's Connect`. Change the email, location and phone number there.

### 8. Change social links
In `index.html`, find the Facebook, GitHub and LinkedIn `<a href="...">` links and replace the URL inside `href="..."`.

## If you use GitHub Pages
1. Open your GitHub repository.
2. Open `index.html`.
3. Press the pencil/Edit button.
4. Change the text.
5. Press **Commit changes**.
6. Wait 1–5 minutes and refresh your website.

## Design changes
Open `style.css` only when you want to change colors, spacing, font sizes, card shapes, layout or mobile design.

### Important
- Do not delete the `<link rel="stylesheet" href="style.css">` line.
- Do not delete `<script src="script.js"></script>` unless you know what you are doing.
- If you are only changing words, **`index.html` is enough**.

This version is intentionally kept simple so you can edit it yourself without needing advanced web development knowledge.
