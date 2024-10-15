/**
 * Products demo app
 * @author Marcos Baez <baez@disi.unitn.it>
 */
$(document).ready(function () {
  
  var apiUrl = "http://localhost:3000/api";  
  
  Product.load({
    success : function(collection){    
      $.each(collection, function(i, product){
        $(".products").append("<li id='{id}'>{name}</li>".replace("{name}", product.name)
                                                         .replace("{id}", product.id));
      });
    },  
    error : function(){
      alert("Products could not be retrieved");
    }
  });  
  
  $("ul").on("click", "li", function(e){
    var id = $(e.currentTarget).attr("id");
    console.log(id);
    Product.delete(id, {
      success : function(){
        console.log("Deleted!");
        window.location.reload();
      }, 
      error : function(){
        alert("Error: Could not delete element (id:" + id + ")");      
      }
    })
  });
  
  $(".opt-add").click(function(){
    var data = {
      name : $("#pname")[0].value,
      description : $("#pdesc")[0].value
    };
    
    Product.create(data, {
      success : function(received){
        window.location.reload();
      }
    });
  });

      
});

var BASE_URL = "http://localhost:3000/api";

var Product = {
  
  load : function (cb){    
    $.getJSON(BASE_URL + "/products", cb.success).fail(cb.error);
  },
  
  create : function(data, cb){
    $.post(BASE_URL + "/products", data, cb.success, "json");      
  },
  
  delete : function(id, cb){
    $.ajax({
        url: BASE_URL + "/products/" + id,
        type: 'DELETE',
        success: cb.success,
        error: cb.error
    });    
    
  }
  
};


