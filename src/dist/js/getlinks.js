$.getJSON("src/pages/Portfolio/js/data.json", function (data) {
    var psource = document.querySelectorAll(".psource");
    var i = 0;
    while (i < data.length) {
        psource[i].href = data[i].githubLink;
        if(data[i].githubLink =="#"){
            psource[i].setAttribute("data-toggle", "modal");
            psource[i].setAttribute("data-target", "#testModal");
        }
        i++;
        
    }
});
