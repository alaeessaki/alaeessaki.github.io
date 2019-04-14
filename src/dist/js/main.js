function getId(id) {
    var element = id.getAttribute("data-id")
    $.getJSON("src/pages/Portfolio/js/data.json", function (data) {
        var mtitle = document.getElementById("mtitle")
        var mimg = document.getElementById("mimg")
        var mdesc = document.getElementById("mdesc")
        var mtech = document.getElementById("mtech")
        var mlink = document.getElementById("mlink")


        mtitle.innerHTML = data[element - 1].title
        mimg.src = "src/" + data[element - 1].img.substring(6, data[element - 1].length)
        mdesc.innerHTML = data[element - 1].description
        mtech.innerHTML = data[element - 1].sub_title;
        mlink.href = data[element - 1].githubLink;

        if (data[element - 1].githubLink == "#") {
            mlink.setAttribute("data-toggle", "modal");
            mlink.setAttribute("data-target", "#testModal");
        }
        else{
            mlink.removeAttribute("data-toggle");
            mlink.removeAttribute("data-target");
        }
    });
}
