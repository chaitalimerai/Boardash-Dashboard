
//Callapse Menu Script
function callapseSidebar(id) {
    let callapseMenu = document.getElementById(id);

    if (callapseMenu.style.display === "flex") {
        callapseMenu.style.display = "none";
    } else {
        callapseMenu.style.display = "flex";
    }
}
