// code.js

window.addEventListener("load", function() {

    var nodes = document.querySelectorAll(".overlay");

    for (var i = 0; i < nodes.length; i++) {
        var words = nodes[i].innerText;
        var html = "";
        for (var j = 0; j < words.length; j++) {

            if (words[j] == " ")
                html += words[j];
            else html += "<span>" + words[j] + "</span>";
            // console.log(html);
        }

        nodes[i].innerHTML = html;
        //console.log("hello");
    }
});