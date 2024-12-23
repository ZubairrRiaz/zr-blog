---
text: Click here
author: By Zubair
date: 02/12/2024
title: HTML Guide
description: This is a HTML Guide for beginners

---



#### This guide will help you understand how to create a simple HTML blog and explain the essential HTML tags you will use. You'll also find code examples that demonstrate their usage.

## Table of Contents
 1. [Basic HTML Structure](#basic-html-structure)
 2. [HTML Tags for Blog](#html-tags-for-blog)
 1. [DOCTYPE and `<html>` Tag](#doctype-and-html-tag)
 2. [The `<head>` Tag](#the-head-tag)
 3. [The `<body>` Tag](#the-body-tag)
 4. [The `<header>` Tag](#the-header-tag)
 5. [The `<footer>` Tag](#the-footer-tag)
 6. [The `<main>` Tag](#the-main-tag)
 7. [The `<article>` Tag](#the-article-tag)
 8. [The `<section>` Tag](#the-section-tag)
 9. [The `<h1>`, `<h2>`, `<h3>` Tags](#the-h1-h2-h3-tags)
 10. [The `<p>` Tag](#the-p-tag)
 11. [The `<a>` Tag](#the-a-tag)
 12. [The `<img>` Tag](#the-img-tag)
 13. [The `<ul>`, `<ol>`, `<li>` Tags](#the-ul-ol-li-tags)
 14. [The `<div>` Tag](#the-div-tag)
 15. [The `<br>` Tag](#the-br-tag)
 16. [The `<hr>` Tag](#the-hr-tag)
 17. [Text Formatting Tags: `<b>`, `<i>`, `<strong>`, `<em>`](#text-formatting-tags-b-i-strong-em)
 18. [The `<sup>` and `<sub>` Tags](#the-sup-and-sub-tags)
 19. [HTML Form Elements](#html-form-elements)
3. [Conclusion](#conclusion)

---

## Basic HTML Structure

Every HTML document follows a basic structure. Here's an example of how the layout looks:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog</title>
</head>
<body>
    <header>
        <h1>Welcome to My Blog</h1>
    </header>
    <main>
        <article>
            <h2>First Post</h2>
            <p>This is my first blog post!</p>
        </article>
    </main>
    <footer>
        <p>© 2024 My Blog. All rights reserved.</p>
    </footer>
</body>
</html>
```

---

## HTML Tags
DOCTYPE and <html> Tag
The <!DOCTYPE html> declaration tells the browser that this is an HTML5 document. The <html> tag wraps the entire document and usually contains the lang attribute to specify the language.

```<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Head content goes here -->
    </head>
    <body>
        <!-- Body content goes here -->
    </body>
</html>

```

---

## The <head> Tag
The <head> tag contains metadata about the document, such as the title, character encoding, and links to external resources like CSS files. It does not display content directly.

```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog</title>
</head>

```

---

## The <body> Tag
The <body> tag contains the visible content of the page, such as text, images, links, and other media.

```
<body>
    <header>
        <h1>Welcome to My Blog</h1>
    </header>
    <main>
        <article>
            <h2>My First Blog Post</h2>
            <p>This is my first post in my new blog!</p>
        </article>
    </main>
</body>

```

---
## The <header> Tag
The <header> tag defines a header for the document or a section. It typically contains a logo, navigation menu, or introductory content.

```
<header>
    <h1>My Blog</h1>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>

```
---

## The <footer> Tag
The <footer> tag is used to define the footer of the document. It usually contains copyright information, contact details, or external links

```
<footer>
    <p>© 2024 My Blog. All rights reserved.</p>
</footer>

```

---

## The <main> Tag
The <main> tag is used to define the main content of the page. There should only be one <main> element in a document.
```
<main>
    <article>
        <h2>First Post</h2>
        <p>This is my first post content!</p>
    </article>
</main>

```

---

## The <article> Tag
The <article> tag is used for independent content that could be distributed or reused, such as blog posts or news articles.
```
<article>
    <h2>Blog Post Title</h2>
    <p>This is the content of the blog post.</p>
</article>

```
---

## The <section> Tag
The <section> tag is used to group content into sections, often with a heading. It’s useful for dividing content into meaningful blocks.

```
<section>
    <h2>About Me</h2>
    <p>This section talks about me and my experiences.</p>
</section>

```

---

## The <h1>, <h2>, <h3> Tags

```
<h1>Welcome to My Blog</h1>
<h2>Recent Posts</h2>
<h3>How I Built My Blog</h3>

```
---

## The <p> Tag
The <p> tag is used to define paragraphs. It wraps blocks of text to display as paragraphs.

```
<p>This is a paragraph of text on my blog.</p>

```

---

## The <a> Tag
The <a> tag is used to create hyperlinks to other web pages or resources.

```
<a href="https://www.example.com">Visit my website</a>

```

---

## The <hr> Tag
The <hr> tag creates a horizontal rule (a line) to separate sections of content.
```
<p>Here is a section of content.</p>
<hr>
<p>And here is another section of content, separated by a line.</p>

```

---

## The <br> Tag
The <br> tag is used to insert a line break, causing the content following it to appear on the next line.

```
<p>This is the first line.<br>This is the second line after a line break.</p>

```

---

## Text Formatting Tags: <b>, <i>, <strong>, <em>
The <b> tag is used to bold text.
The <i> tag is used to italicize text.
The <strong> tag emphasizes text, usually by making it bold.
The <em> tag emphasizes text, usually by italicizing it.

```
<p>This is <b>bold</b> text.</p>
<p>This is <i>italic</i> text.</p>
<p>This is <strong>strong</strong> text.</p>
<p>This is <em>emphasized</em> text.</p>

```
---

## The <sup> and <sub> Tags
The <sup> tag is used to display text as superscript (e.g., for exponents).
The <sub> tag is used to display text as subscript (e.g., for chemical formulas).

```
<p>Water is H<sub>2</sub>O.</p>
<p>3<sup>2</sup> = 9</p>

```
---

## The <img> Tag
The <img> tag is used to add images to the page. The src attribute defines the image's source, and the alt attribute provides alternative text for the image.

```
<img src="blog-image.jpg" alt="An image representing my blog post" />

```

---

## The <ul>, <ol>, <li> Tags
The <ul> tag is used for an unordered list, while <ol> is for an ordered list. Both lists contain <li> (list item) elements.

```
<ul>
    <li>First item</li>
    <li>Second item</li>
</ul>

<ol>
    <li>First item</li>
    <li>Second item</li>
</ol>

```
---

## The <div> Tag
The <div> tag is a generic container used for grouping content. It doesn’t have any semantic meaning, but it’s useful for styling or scripting purposes.

```
<div class="post">
    <h2>Blog Post Title</h2>
    <p>This is the content of the post.</p>
</div>

```

---

## HTML Form Elements
Forms are used to collect user input. Here are some of the key form elements:

* **<form>:** Defines the form.
* **<input>:** Defines an input field.
* **<label>:** Defines a label for an input element.
* **<textarea>:** Defines a multiline text input field.
* **<button>:** Defines a clickable button.
* **<select>:** Defines a dropdown list.
* **<option>:** Defines options in a dropdown.

```
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" required></textarea>
    
    <button type="submit">Submit</button>
</form>

```

---

## Conclusion
This guide covered the basic structure of an HTML document and how to use common HTML tags for building a Website. You should now have a solid understanding of how to use tags like <header>, <footer>, <article>, and more to structure your Website.

## Happy coding!
