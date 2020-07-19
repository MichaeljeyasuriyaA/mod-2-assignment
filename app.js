(function() {
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyer = this;
    toBuyer.buyItems = ShoppingListCheckOffService.getBuyItems();
    toBuyer.buy = function (itemIndex) {
      ShoppingListCheckOffService.buy(itemIndex);
    };
  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtchecker = this;
     boughtchecker.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }


  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var boughtItems=[];
    var tobuyItems =  [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "soft drinks",
        quantity: "3"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      }
    ];



    service.buy= function (itemIndex) {
      var item=tobuyItems[itemIndex];

      boughtItems.push(item);
      tobuyItems.splice(itemIndex, 1);
    };

    service.getBuyItems= function () {
      return tobuyItems;
    };
    service.getBoughtItems = function () {
      return boughtItems;
    };
  }
}());
