# FAQ Content Management

This folder contains the FAQ content in an easy-to-edit Markdown format.

## How to Edit FAQ Content

### File Location
The FAQ content is in: `faq.md`

### Format Guide

#### Sections
Create a new section with `##` (double hash):

```markdown
## שם הסקשן
```

#### Questions
Create a new question with `###` (triple hash):

```markdown
### מה השאלה?
```

#### Answers
Write the answer as regular text after the question. You can use multiple paragraphs by leaving blank lines:

```markdown
### מה השאלה?

זוהי תשובה לשאלה.

זו פסקה נוספת בתשובה.
```

#### Links
Add links using the markdown format `[text](url)`:

```markdown
[קוד המקור ב-GitHub](https://github.com/Vestika/portfolio)
```

Links will automatically appear as clickable buttons below the answer.

#### Text Formatting
The following formatting options are supported in answers:
- **Bold**: `**טקסט מודגש**` or `__טקסט מודגש__`
- *Italic*: `*טקסט נטוי*` or `_טקסט נטוי_`
- ~~Strikethrough~~: `~~טקסט עם קו חוצה~~`

Note: `__text__` creates bold (double underscore), while `_text_` creates italic (single underscore).

#### Lists
Create bullet lists using hyphens or bullets:

```markdown
- פריט ראשון
- פריט שני
- פריט שלישי
```

Or with bullets:

```markdown
• פריט ראשון
• פריט שני
• פריט שלישי
```

**Nested Lists:**
Use 2 spaces for each nesting level. You can include blank lines for readability:

```markdown
- פריט ראשי
  - פריט משני 1
  - פריט משני 2
    - פריט שלישי
- פריט ראשי נוסף
  - עוד פריט משני
```

Or with blank lines:

```markdown
- פריט ראשי

  - פריט משני 1
  - פריט משני 2

- פריט ראשי נוסף
```

This creates:
- Main item (disc bullet)
  - Sub-item (circle bullet)
    - Sub-sub-item (square bullet)

### Example

```markdown
## כללי

### מה זה Vestika?

Vestika היא מערכת ניהול נכסים פיננסיים.

המערכת מתאימה למשתמשים ש**מנהלים** מספר חשבונות:
- חשבונות בנק
- תיקי השקעות
- נכסי נדל"ן

[קוד המקור ב-GitHub](https://github.com/Vestika/portfolio)

### למה זה בחינם?

זה מוצר שבנינו עבור שימוש *עצמי*.
```

## Workflow for Team Review

### 1. Copy to Google Docs
1. Open `faq.md`
2. Copy all the content (Cmd+A, Cmd+C)
3. Paste into a new Google Doc
4. Share with your team for review

### 2. Edit in Google Docs
Your team can:
- Add/remove sections
- Add/remove questions
- Edit answers
- Add/modify links
- Add comments and suggestions

### 3. Copy Back to Project
1. Copy the edited content from Google Docs
2. Paste it back into `faq.md` (replacing all content)
3. The website will automatically rebuild with the new content!

## Important Notes

- **Sections** must start with `##` (two hashes)
- **Questions** must start with `###` (three hashes)
- **Links** must follow the format `[text](url)`
- Keep blank lines between paragraphs for proper formatting
- The file must be saved as UTF-8 to support Hebrew text
- IDs for sections and questions are automatically generated from the titles

## Testing Your Changes

After editing `faq.md`, you can test the changes by:
1. Running the development server: `npm run dev`
2. Opening the website in your browser
3. Checking that all sections, questions, and links appear correctly

If something doesn't look right, check that:
- Section headers have exactly 2 hashes (`##`)
- Question headers have exactly 3 hashes (`###`)
- Links follow the `[text](url)` format
- There's a blank line between the question and answer

