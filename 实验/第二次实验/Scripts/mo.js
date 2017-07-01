function xianshitupian() {
    document.getElementById("tupian").style.display = "block";
    document.getElementById("xinwen").style.display = "none";
    document.getElementById("junshi").style.display = "none";
    document.getElementById("span_tupian").style.background = "none";
    document.getElementById("span_xinwen").style.backgroundColor = "Silver";
    document.getElementById("span_junshi").style.backgroundColor = "Silver";
    document.getElementById("span_tupian").style.borderBottom = "none";
    document.getElementById("span_xinwen").style.borderBottom = "1px solid #CFCFCF";
    document.getElementById("span_junshi").style.borderBottom = "1px solid #CFCFCF";
}

function xianshixinwen() {
    document.getElementById("xinwen").style.display = "block";
    document.getElementById("tupian").style.display = "none";
    document.getElementById("junshi").style.display = "none";
    document.getElementById("span_xinwen").style.background = "none";
    document.getElementById("span_tupian").style.backgroundColor = "Silver";
    document.getElementById("span_junshi").style.backgroundColor = "Silver";
    document.getElementById("span_xinwen").style.borderBottom = "none";
    document.getElementById("span_tupian").style.borderBottom = "1px solid #CFCFCF";
    document.getElementById("span_junshi").style.borderBottom = "1px solid #CFCFCF";
}

function xianshijunshi() {
    document.getElementById("junshi").style.display = "block";
    document.getElementById("tupian").style.display = "none";
    document.getElementById("xinwen").style.display = "none";

    document.getElementById("span_junshi").style.background = "none";
    document.getElementById("span_tupian").style.backgroundColor = "Silver"; 
    document.getElementById("span_xinwen").style.backgroundColor = "Silver";
    document.getElementById("span_junshi").style.borderBottom = "none";
    document.getElementById("span_tupian").style.borderBottom = "1px solid #CFCFCF";
    document.getElementById("span_xinwen").style.borderBottom = "1px solid #CFCFCF";
}