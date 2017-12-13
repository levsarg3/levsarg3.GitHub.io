//Get data from "acme.json" file
function getNav() {
    //Grab data from .json file
    $.ajax({
        url: "/acme/js/acme.json",
        dataType: "json",
        success: function (data) {
            console.log(data);

            var name = data[jsonProduct].name;
            var path = data[jsonProduct].path;
            var description = data[jsonProduct].description;
            var manufacturer = data[jsonProduct].manufacturer;
            var price = data[jsonProduct].price;


        }
    })
}


// Intercept the menu link clicks
$("#acme-nav").on("click", "a", function (evt) {
    evt.preventDefault();

    var jsonProduct = $(this).text();
    console.log(jsonProduct);
    $.ajax({
        url: "/acme/js/acme.json"
        , dataType: "json"
        , success: function (data) {
            console.log(data);
            var name = data[jsonProduct].name;
            var path = data[jsonProduct].path;
            var description = data[jsonProduct].description;
            var manufacturer = data[jsonProduct].manufacturer;
            var price = data[jsonProduct].price;
            var reviews = data[jsonProduct].reviews;
        };

    });
});



