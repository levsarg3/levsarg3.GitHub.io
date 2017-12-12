//Get data from "acme.json" file
function getNav() {
    //Grab data from .json file
    $.ajax({
        url: "/acme/js/acme.json"
        , dataType: "json"
        , success: function (data){
            console.log(data);


        }
    })
}


$("#acme-nav").on("click", "a", function (evt) {
    evt.preventDefault();
    // With the text value get the needed value from the acme.json file
    var jsonProduct = $(this).text(); // Franklin, etc...
    console.log(jsonProduct);
    $.ajax({
        url: "/acme/js/acme.json"
        , dataType: "json"
        , success: function (data) {
            console.log(data);
            console.log(data[jsonCity]);
            var zip = data[jsonCity].zip;
            console.log(zip);
            getData(zip);
        }
    });
});
