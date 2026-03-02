
const leftMenu = d.gebi('leftmenu');
// menu=['home','dashboard','profile']''

leftMenu.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (li && leftMenu.contains(li)) {
        const targetPath = li.getAttribute('data-info');
        navigate(`${targetPath}`);
    }
});



    loadSVGLibraries(['/al/svg/data.json']);
    addIcon('custom-star', "M 12 2 L 15 9 L 22 9 L 16 14 L 18 21 L 12 17 L 6 21 L 8 14 L 2 9 L 9 9 Z");
    addIcon('double-box', {
        viewBox: "0 0 24 24",
        layers: [
            { path: "M 2 2 L 10 2 L 10 10 L 2 10 Z", pos: "0,0", fill: "#3498db" },
            { path: "M 2 2 L 10 2 L 10 10 L 2 10 Z", pos: "12,12", main: true }
        ]
    });



 window.addEventListener('popstate', () => {
     // Panggil kembali render page saat URL berubah
     const currentPath = window.location.search; // misal: ?lms/web/page/profile/ID
     ui.renderPage(currentPath);
 });
