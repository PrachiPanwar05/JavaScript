<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Numbers</h1>
<h2>Create a BigInt</h2>

<p id="demo"></p>

<script>
let x = 123456789012345678901234567890n;
let y = BigInt("123456789012345678901234567890");
document.getElementById("demo").innerHTML = x + "<br>" + y;
</script>

</body>
</html>


