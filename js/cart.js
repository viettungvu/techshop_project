// JavaScript Document
$(function () {
  var fadeTime = 300;


  /* Assign actions */
  $(".product-quantity input").change(function () {
    updateQuantity(this);
  });

  $(".product-removal button").click(function () {
    removeItem(this);
  });


  /* Recalculate cart */
  function recalculateCart() {
    var total = 0;

    /* Sum up row totals */
    $(".product").each(function () {
      total += parseFloat($(this).find("span.product-line-price").text());
    });

    /* Calculate totals */

   

    /* Update totals display */
    $(".totals-value").fadeOut(fadeTime, function () {
      $("#cart-total").html(total.toFixed(2));
      if (total == 0) {
        $(".checkout").fadeOut(fadeTime);
      } else {
        $(".checkout").fadeIn(fadeTime);
      }
      $(".totals-value").fadeIn(fadeTime);
    });
  }


  /* Update quantity */
  function updateQuantity(quantityInput) {
    /* Calculate line price */
    var productRow = $(quantityInput).parent().parent().parent();
    var price = parseFloat(productRow.find("span.product-price").text());
    var quantity = $(quantityInput).val();
    var linePrice = price * quantity;

    /* Update line price display and recalc cart totals */
    productRow.find("span.product-line-price").each(function () {
      $(this).fadeOut(fadeTime, function () {
        $(this).text(linePrice.toFixed(2));
        recalculateCart();
        $(this).fadeIn(fadeTime);
      });
    });
  }


  /* Remove item from cart */
  function removeItem(removeButton) {
    /* Remove row from DOM and recalc cart total */
    var productRow = $(removeButton).parent().parent().parent();
    productRow.slideUp(fadeTime, function () {
      productRow.remove();
      recalculateCart();
    });
  }
});
