$(".btn").click(function() {
	$("#errorPanel").hide();
	

    var saleAmount = parseFloat($("#saleAmount").val());
    var amountReceived = parseFloat($("#amountReceived").val());




    if (saleAmount <= 0 || isNaN(saleAmount) || amountReceived <= 0 || isNaN(saleAmount) || (amountReceived < saleAmount)) {

    	$(".panel-body").text("Please enter positive values and be sure amount received is greater or equal to the sale price.");
    	$("#errorPanel").show();
    } else {


        var change = amountReceived - saleAmount;
        var dollars = Math.floor(change);
        var coins = Math.round((change - dollars) * 100);
        var quarters = Math.floor(coins / 25);
        var coinsAfterQuarters = coins % 25;
        var dimes = Math.floor(coinsAfterQuarters / 10);
        var coinsAfterDimes = coinsAfterQuarters % 10;
        var nickels = Math.floor(coinsAfterDimes / 5);
        var pennies = coinsAfterDimes % 5;



        $("#dollarsPanel").text(dollars);
        $("#quartersPanel").text(quarters);
        $("#dimesPanel").text(dimes);
        $("#nickelsPanel").text(nickels);
        $("#penniesPanel").text(pennies);

    }






})
