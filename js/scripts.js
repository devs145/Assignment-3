
var meow = document.getElementById("catsound")
$("#Cat").on("click", function () {
    meow.play();
})

var doggie = document.getElementById("dogsound")

var cat = false;
var dog = false;
var plant = false;

$("#Doggo").on("click", function () {
    doggie.play();
})

$("#toggleCat").on("click", function() {
    cat = !cat;
    console.log(cat);
    $("#Cat").toggle();

    if (cat) {
        $(this).text("check_circle")
    }
    else {
       $(this).text("add_circle")
    }

})

$("#toggleDog").on("click", function() {
    dog = !dog
    $("#Doggo").toggle();

    if (dog) {
        $(this).text("check_circle")
    }
    else {
       $(this).text("add_circle")
    }
})

$("#togglePlant").on("click", function() {
    plant = !plant
    $("#Plant").toggle();
    
    if (plant) {
        $(this).text("check_circle")
    }
    else {
       $(this).text("add_circle")
    }
})

$("#catname").on("keypress", function(e) {
    if(e.key == "Enter") {
        var catname = $(this).val()
        console.log(catname)
        $(this).remove();
        $("#myname").text(catname)
    }
})
$("#catcolor").on("change", function () {
    console.log("change")
    var newcolor = $(this).val()
    console.log(newcolor)
    $("#Cat .st8").css("fill", newcolor)
})

$("#dogcolor").on("change", function () {
    console.log("change")
    var newcolor = $(this).val()
    console.log(newcolor)
    $("#Doggo .st8").css("fill", newcolor)
})