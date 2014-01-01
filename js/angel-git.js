function addMouseHandler() {
    document.getElementById("mainSection").onmousemove = handleMouse;
    function handleMouse(event) {
        alert(event.clientY);
    }
}