$(document).ready(function() {  
        var vdefault = $('#keyword01').val();  
  
    $('#keyword01').focus(function() {  
            //获得焦点时，如果值为默认值，则设置为空  
            if ($(this).val() == vdefault) {  
                $(this).val("");  
            }  
        });  
    $('#keyword01').blur(function() {  
            //失去焦点时，如果值为空，则设置为默认值  
            if ($(this).val()== "") {  
                $(this).val(vdefault); ;  
            }  
        });  
}); 






function showcomic() {
    document.getElementById("comic").style.display = "block";
    document.getElementById("scene").style.display = "none";
    document.getElementById("movie").style.display = "none";
}

function showscene() {
    document.getElementById("scene").style.display = "block";
    document.getElementById("comic").style.display = "none";
    document.getElementById("movie").style.display = "none";
}

function showmovie() {
    document.getElementById("movie").style.display = "block";
    document.getElementById("comic").style.display = "none";
    document.getElementById("scene").style.display = "none";
}