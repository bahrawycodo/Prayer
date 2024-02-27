export function Caller() {
  function render() {
    $(".mainContainer").html(`      <section id="Caller" class="Caller general">
        <div class="layer" style="background: url(images/CallerBack.png)"></div>
        <div class="top">
          <div class="container grid-2 h-100">
            <div class="right position-relative">
              <span class="position-absolute">حي علي الصلاة</span>
              <img src="images/CallerMosque.png" />
              <span class="position-absolute">حي علي الفلاح</span>
            </div>
            <div class="left">
              <h2>حان الآن موعد</h2>
              <div class="CallerName">أذان الفجر</div>
              <div class="main-text gap-1">
                <div class="right mx-1">
                  <span>الوقت الآن</span>
                  <span>PM</span>
                </div>

                <h5>7:00</h5>
              </div>
              <h6 class="d-flex">
                <span class="mx-1">الثلاثاء</span> 28 جمادي الآخرة 1445 هـ<br />10
                ديسمبر 2024 م
              </h6>
              <div
                class="customSelect small dark"
                id="city"
                data-awesome="fa-regular fa-location-dot"
                data-title="المدينة"
              >
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="container">
            <div class="prayers">
         
            </div>
          </div>
        </div>
      </section>`);
  }
  function getCities() {
    $.get("demo_test.asp", function (data, status) {
      $("#city").html(`   <select>
        ${
          data.cities && data.cities.length
            ? data.cities
                .map(
                  (city) => `<option value="${city.id}">${city.name}</option>`
                )
                .join("")
            : ""
        }
      </select>`);
      customSelect("city");
    });
  }
  function handle() {
    render();
    getCities();
  }
  handle();
}
