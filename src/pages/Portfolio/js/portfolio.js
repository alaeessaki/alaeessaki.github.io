
function getId(id) {
    $.getJSON("js/data.json", function (data) {
        var mtitle = document.getElementById("mtitle")
        var mimg = document.getElementById("mimg")
        var mdesc = document.getElementById("mdesc")
        var mtech = document.getElementById("mtech")
        var mlink = document.getElementById("mlink")

        mtitle.innerHTML = data[id - 1].title
        mimg.src = data[id - 1].img
        mdesc.innerHTML = data[id - 1].description
        mtech.innerHTML = data[id - 1].sub_title;
        mlink.href = data[id - 1].githubLink;
    });

}


$.getJSON("js/data.json", function (data) {

    var wrapper = document.getElementById("cardList");
    var myHTML = '';

    for (var i = 0; i < data.length; i++) {
        myHTML += '<div class="card" style="width: 28rem; margin:2rem 4rem; margin-bottom: 12rem;" onclick="getId(' + data[i].id + ')"  data-toggle="modal" data-target="#exampleModal">' +
            '<img src="' + data[i].img + '" class="card-img-top" alt="...">' +
            ' <div class="card-body">' +
            '<div class="descr"><h3 class="card-text title" onclick="getId(' + data[i].id + ')">' + data[i].title + '</h3>' +
            '<p class="subtitle" onclick="getId(' + data[i].id + ')">' + data[i].sub_title + '</p></div>' +
            ' </div>' +
            ' </div>';
    }

    wrapper.innerHTML = myHTML

});