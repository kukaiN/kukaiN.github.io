<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="/demo.js"></script>

<script></script>

[link to new page](newpages.md)

<html>
  <head>
    <script>
    $(function(){
      $("#includedContent").load("b.html");
    });
    </script>
  </head>

  <body>
     <div id="includedContent"></div>
  </body>
</html>