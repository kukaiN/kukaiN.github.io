# this is a HTML, CSS, JS, SQL page

[go back](../../)


Table of Contents:
- HTML
- CSS
- JS
  - Jquery
    - differences between Jquery 2 vs Jquery 3:
      - [on load event](#onload)
    - differences between types of Jquery
- SQL






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

