<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Functions</h1>
<h2>The Arrow Function</h2>

<p>This example shows an Arrow Function without the brackets or the return keyword.</p>

<p id="demo"></p>

<script>
let hello = "";

hello = () => "Hello World!";

document.getElementById("demo").innerHTML = hello();
</script>

</body>
</html>
