$(document).ready(function () {
  handleAll();
  CityLanguageScreen();
  $(".mainContainer").on("click", "#CityLanguageScreen", function () {
    Prayers();
  });
  $(".mainContainer").on("click", "#PrayersScreen", function () {
    remainingTime();
  });
  $(".mainContainer").on("click", "#remainingTime", function () {
    Caller();
  });
  $(".mainContainer").on("click", "#Caller", function () {
    Azkar();
  });
  $(".mainContainer").on("click", "#Azkar", function () {
    remainingTimeToPray();
  });
  $(".mainContainer").on("click", "#remainingTimeToPray", function () {
    reminderPerformingPrayer();
  });
  $(".mainContainer").on("click", "#reminderPerformingPrayer", function () {
    AzkarAfterPrayer();
  });
});
