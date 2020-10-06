# this is a HTML, CSS, JS, SQL, MD page

[go back](../../)


Table of Contents:
  - [HTML](#htmlMain)
    - FontsAwsome
    - webp
    - iso image for icon
  - [CSS](#css)
    - darkmode
    - toggling
  - [JS](#js)
    - [Jquery](#jquery)
      - differences between Jquery 2 vs Jquery 3:
        - [on load event](#onload)
      - [differences between types of Jquery](#diffJquery)
    - [Bootstrap](#bootstrap)
  - [SQL](#sql)
  - [Using HTML for HP and MD for other pages](#mdtips)
  - [Accessability](#access)
  - [React.js](#react)


---
<a id = "htmlMain"></a>

## HTML - Hypertext Markup Langauge
Terminologies:
- DOM, Document Object Model, a model with set of instructions used to create a tree of objects.  DOM is a standard of getting the document and defines the properties of the objects on a webpage.

---
<a id = "css"></a>

## CSS - Cascading Style Sheets


Selectors for class is the "." and "#" for ids.



---
<a id = "cpp14"></a>

## On load(), differences

"""js
$(document).load(handler)
"""
the code above was depreciated and is now .on("load", handler)

and document.ready works differently:
https://forum.jquery.com/topic/document-ready-and-window-on-load-in-jquery-3-4-1

<a id = "JqueryType"></a>

## differences between types of Jquery

| extension | meaning | intended use |
|---|---|---|
| jquery.js | regular, uncompressed jquery | for documentation/developers |
|jquery.min.js | content-wise nothing different with jQuery.js, but white space and variable names are trimed to make the file size smaller | for actual website |
| jquery.slim.js | doesnt have ajax and other cool features | for devs |
| jquery.slim.min.js | trimed version of jquery.slim.js | for websites |



---
<a id = "mdtips"></a>

# Markdown tips for conjoined use with HTML

For linking different pages:

  from markdown to markdown:
    \[abbreviated link \](markdown)
  from HTML to markdown page:
    *the absolute path doesn't include the .md extension if you want jqkuell to render it
    <a href="https://absolute_path_to_markdown_page"> abbreviated link<a/>
  from markdown to HTML: (with or without the .md extension)
  \[ abbreviated link \](filename)




---
<a id = "react"></a>

## React.js

React is a front-end library for creating dynamic and interactive applications.  React was originally developed by Facebook, and now is open sourced into what is known as React.

Two parts to React: 1.) declarative 2.) components

Used for pages with dynamic aspects

### Virtual DOM:
React stores a copy of the DOM, call it DOM', and when a dynamic aspect of the page is triggered, React will apply the changes to DOM'.  When DOM' is updated, React will cut out and cleaverly paste the new changes. The reason this is cost/performance efficient is because we only change one aspect of the page and when the DOM is updated to match DOM', React will remove processes that tries to re-render un-changed components. The intent behind the second DOM can be traced back to instagram, when loading new images and caching them to the memory, Originally the DOM needs to

### React.native:
react.native is the same as react but with mobile support

rendering wise, React is faster than Jquery.