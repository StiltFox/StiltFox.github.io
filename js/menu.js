var menu = 
`<div class="menu"> 
<div class="menu-button-container">
    <a class="stiltfox-button" href="/Index.html">Home</a>
    <a class="stiltfox-button" href="/pages/MissionStatement.html">About</a>
    <a class="stiltfox-button" href="/pages/Products.html">Products</a>
    <div style="margin-left:auto;"></div>
    <a class="stiltfox-button stiltfox-support-button">Support Stilt Fox&trade;</a>
</div>
</div>`;

document.getElementById("top-menu").insertAdjacentHTML("afterbegin", menu.toString());