export function reminderPerformingPrayer() {
  function generate() {
    $(".mainContainer").html(`    <section
        id="reminderPerformingPrayer"
        class="reminderPerformingPrayer d-flex"
      >
        <div
          class="right"
          style="
            background-image: url(images/reminderPerformingPrayerMosque.png);
          "
        >
          <img
            class="mainMosque"
            src="images/reminderPerformingPrayerMainMosque.png"
          />
        </div>
        <div class="left">
          <div class="container">
            <div class="title">الوقت المتبقي حتي الإقامة</div>
            <div class="content">
              <p>حان الآن موعد إقامة</p>
              <h6>صلاة العصــر</h6>
              <p>حسب التوقيــت المحــلى <br />لمدينــة جــدة</p>
            </div>
          </div>

          <p class="footer position-relative container">صلى قبل أن يصلى عليك</p>
        </div>
      </section>`);
  }
  function render() {
    generate();
  }
  render();
}
