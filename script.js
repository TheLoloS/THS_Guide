//Global variables
const c = console.log;
var btns = document.querySelectorAll("div.anim_p, div.anim_l");
[...btns];
var content = document.querySelector("#content");
var menu = document.querySelector("#menu");
var body = document.querySelector("body");
var back = document.querySelector("#back");
var choose_con;
var fcl = [];

//vh and vw in JS
function vh(v) {
    var h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );
    return (v * h) / 100;
}

function vw(v) {
    var w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    );
    return (v * w) / 100;
}

//save first class names from menu
btns.forEach(function(Elements, key) {
    fcl[key] = Elements.className;
});

//function resolve scroll bug
const scrollt = (window.onbeforeunload = function() {
    window.scrollTo(0, 0);
});

//function resolve buttons hover problem
window.onload = function() {
    btns.forEach(function(Elements, key) {
        //fcl[key] = Elements.className;
        Elements.className = "btn hvr";
    });
};
const chbth = function() {
    btns.forEach(function(Elements, key) {
        Elements.className = "btn hvr";
    });
};
scrollt();
chbth();

//change class && start animation
btns.forEach(function(Element, key) {
    Element.addEventListener("click", function() {
        btns.forEach(function(e, k) {
            if (e == Element) {
                choose_con = e.attributes.id.value;
                if (e.attributes.name1.value == "p") {
                    e.className = "btn anim_p";
                } else {
                    e.className = "btn anim_l";
                }
            } else {
                e.className = "visible";
            }
        });

        if (choose_con == "btn_1") {
            btn_1();
        }
        if (choose_con == "btn_2") {
            btn_2();
        }
        if (choose_con == "btn_3") {
            btn_3();
        }
        if (choose_con == "btn_4") {
            btn_4();
        }
        if (choose_con == "btn_5") {
            btn_5();
        }
        if (choose_con == "btn_6") {
            btn_6();
        }
    });
});

//function take a few things to one amd does interval work
function btn_show() {
    menu.style.display = "none";
    content.className = "content_open";
    body.style.overflowY = "auto";
    back.className = "back_open";
    choose_con = "";
}

const menu_show = () => {
    scrollt();
    content.className = "content_hiden";
    body.style.overflowY = "hidden";
    back.className = "back_hiden";
};

function btn_1() {
    window.setTimeout(btn_show, 1600);
}

function btn_2() {
    window.setTimeout(btn_show, 1600);
}

function btn_3() {
    window.setTimeout(btn_show, 1600);
}

function btn_4() {
    window.setTimeout(btn_show, 1600);
}

function btn_5() {
    window.setTimeout(btn_show, 1600);
}

function btn_6() {
    window.setTimeout(btn_show, 1600);
}

back.addEventListener("click", () => {
    menu_show();
    btns.forEach(function(Elements, key) {
        Elements.className = fcl[key];
    });
    window.setTimeout(chbth, 1500);
    window.setTimeout(() => {
        menu.style.display = "grid";
    }, 1400);
});

function cookies_anim(a
    // getCookie("a1") == "true" && checkbox.checked == true
) {
    if (a == "false") {
        c("hhhhhhhh")
        anima = document.querySelector("#animation");
        anima.innerHTML = ""
        rnd_parts = Math.floor((Math.random() + 0.4) * 15);
        tab_parts = [];
        tab_parts_i_x = [];
        tab_parts_i_y = [];
        parts_a = ""
        return;
    }

    // Script from parciples declarate variables
    var anima = document.querySelector("#animation");
    var rnd_parts = Math.floor((Math.random() + 0.4) * 15);
    var tab_parts = [];
    var tab_parts_i_x = [];
    var tab_parts_i_y = [];

    //push to array elements to set array lenght
    for (i = 0; i < rnd_parts; i++) {
        tab_parts.push("");
        tab_parts_i_x.push();
        tab_parts_i_y.push();
    }

    const parts = ["diax", "redstone", "iron", "emerald", "gold"]; // set parts names
    tab_parts.forEach((e, k) => {
        tab_parts[k] = parts[Math.floor(Math.random() * 5)];
        tab_parts_i_x[k] = Math.floor(Math.random() * 2); //set vector 1
        tab_parts_i_y[k] = Math.floor(Math.random() * 2); //set vector 1
    });
    tab_parts.forEach((e, k) => {
        var o_p = document.createElement("div"); // Create a <button> element
        o_p.className = "part";
        o_p.style.backgroundImage = `url("${e + ".png"}")`;
        //o_p.innerHTML = `<img src="${e + '.png'}" alt=''>`; // Insert text
        anima.appendChild(o_p);
    });
    var parts_a = document.querySelectorAll(".part");
    [...parts_a];

    parts_a.forEach((e, k) => {
        //set rand position for elements {
        var w = window.innerWidth;
        var h = window.innerHeight;
        var a = Math.floor(Math.random() * (h - vh(8))) + "px";
        var b = Math.floor(Math.random() * (w - vw(8))) + "px";
        e.style.position = "fixed";
        e.style.top = a;
        e.style.left = b;
        // }

        var vector_delay = Math.floor((Math.random() + 0.5) * 20); //set random delay from animation (tick in intewal)
        setInterval(move_vector, 10); //set interval to function

        function move_vector() {
            //function to can add paramets to interval function

            move_vector_x(e, tab_parts_i_x, tab_parts_i_y, k);
        }
    });
    // animation function and try to set kolisiob detection of it
    function move_vector_x(e, rnd_vector_a, rnd_vector_b, k) {

        const r = function() {
            if (window.innerWidth > window.innerHeight) {
                return vw(4);
            }
            if (window.innerWidth < window.innerHeight) {
                return vw(11);
            }
        };

        var w = Math.floor(window.innerWidth - r());
        var h = Math.floor(window.innerHeight - vh(8));

        if (Number(e.style.top.slice(0, -2)) < 0) {
            rnd_vector_a[k] = 1;
        }
        if (Number(e.style.top.slice(0, -2)) >= h) {
            rnd_vector_a[k] = 0;
        }
        if (Number(e.style.left.slice(0, -2)) < 0) {
            rnd_vector_b[k] = 1;
        }
        if (Number(e.style.left.slice(0, -2)) > w) {
            rnd_vector_b[k] = 0;
        }

        if (rnd_vector_a[k] == 1) {
            e.style.top = Number(e.style.top.slice(0, -2)) + 2 + "px";
        } else if (rnd_vector_a[k] == 0) {
            e.style.top = Number(e.style.top.slice(0, -2)) - 2 + "px";
        }
        if (rnd_vector_b[k] == 1) {
            e.style.left = Number(e.style.left.slice(0, -2)) + 2 + "px";
        } else if (rnd_vector_b[k] == 0) {
            e.style.left = Number(e.style.left.slice(0, -2)) - 2 + "px";
        }
    }
}
//search engine od accesories

var table = document.querySelector("#akc");
var table_parts_node = table.querySelectorAll("tr");
var table_parts = [...table_parts_node];
table_parts.splice(0, 1);
var btn_sort = document.querySelector(".button");

btn_sort.addEventListener("click", () => {
    var take_array = [];
    var sc_array = [];
    var str = "";
    var p = document.querySelector("#search_akc");
    p.style.visibility = "visible";
    var j = document.querySelector("#search_akc > tbody");
    j.innerHTML = '';
    //btn_sort.disabled = true;
    if (document.forms["search_form"]["txt"].value !== "") {
        table_parts.forEach((e, k) => {
            var b = document.forms["search_form"]["txt"].value;
            if (Number(e.attributes.lvl.value <= Number(b))) {
                take_array.push(e);
            }
        });
        // for for add elements to array to show search akces and sort them
        for (var i = take_array.length - 1; i >= 0; i--) {
            if (str.indexOf(take_array[i].lastElementChild.innerHTML) == -1) {
                sc_array.push(take_array[i]);
                str += take_array[i].lastElementChild.innerHTML;
            } else {
                continue;
            }
        }
        sc_array.splice(4);
        j = document.querySelector("#search_akc > tbody")
        var el1 = document.createElement("tr")
        var el2 = document.createElement("td")
        el2.className = "aqua shadow"
        el2.setAttribute("colspan", "3")
        el2.innerHTML = `Wybrane Akcesoria na lvl ${document.forms["search_form"]["txt"].value}: `
        el1.appendChild(el2)
        j.appendChild(el1)
        sc_array.forEach((e, k) => {
            j.innerHTML += e.innerHTML;
        });
        var y = document.querySelectorAll("#search_akc > tbody > tr");
        [...y]
        y.forEach((e, k) => {
            if (!isNaN(Number(e.firstElementChild.innerText))) {
                e.firstElementChild.remove()
            } else {}
        })

    }
});

//script for select changes on page and changes content on bookchmark "akcesoria"

var type_mode_array = [document.querySelector("#akc"), document.querySelector("#rings"),
    document.querySelector("#have"), document.querySelector("#bon"), document.querySelector("#energia"),
    document.querySelector("#amulet"), document.querySelector("#rzadkie")
];
var select = document.querySelector("#mode");
select.addEventListener("change", (event) => {
    var p = document.querySelector("#search_akc");
    p.style.visibility = "hidden";
    document.querySelector("#search_akc > tbody").innerHTML = ""
    type_mode_array.forEach((e, k) => {
        if (e.attributes.ctm.value == event.target.value) {
            e.style.display = ""
        } else {
            e.style.display = "none"

            if (event.target.value !== "list") {
                document.querySelector("#sub_akc").style.display = "none";
            } else if (event.target.value == "list") {
                document.querySelector("#sub_akc").style.display = "unset";
            }
        }
    })

})

//animation on hover of back to menu button

// var btn_back = document.querySelector("#back");
// btn_back.addEventListener("onmouseover", () => {
//     btn_back.style.backgroundImage = `url("btn.gif")`;
// })
// btn_back.addEventListener("onmouseout", () => {
//     btn_back.style.backgroundImage = `url("btn2.gif")`
// })