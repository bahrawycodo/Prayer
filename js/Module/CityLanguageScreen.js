export function CityLanguageScreen() {
  function render(mosqueImg = "images/mosque.png") {
    $(".mainContainer").html(`    <section
        id="CityLanguageScreen"
        class="CityLanguageScreen general"
        style="
          background: url(${mosqueImg});
        "
      >
        <div
          class="content d-flex justify-content-center align-items-center flex-direction-column gap-4"
          style="
            background: url(images/CityLanguageScreen.png);
          "
        >
          <div
            class="customSelect"
            id="city"
            data-awesome="fa-regular fa-location-dot"
            data-title="المدينة"
          >
           
          </div>
          <div
            class="customSelect"
            id="language"
            data-awesome="fa-solid fa-language"
            data-title="اللغة"
          >
         
          </div>
          <button type="button" class="btn btn-custom" id="save">حفــظ</button>
        </div>
      </section>
      `);
  }
  function getCities() {
    $("#city").html(`
    <select>
    <option value="jaddah">جدة</option>
    <option value="alryadh">الرياض</option>
    </select>
    `);
    // $.get("demo_test.asp", function (data, status) {
    //   $("#city").html(`   <select>
    //     ${
    //       data.cities && data.cities.length
    //         ? data.cities
    //             .map(
    //               (city) => `<option value="${city.id}">${city.name}</option>`
    //             )
    //             .join("")
    //         : ""
    //     }
    //   </select>`);
    // });
    customSelect("city");
  }
  function getLanguages() {
    $("#language").html(`
    <select>
    <option value="ar">العربية</option>
    <option value="en">english</option>
    </select>
    `);
    // $.get("demo_test.asp", function (data, status) {
    //   $("#language").html(`   <select>
    //     ${
    //       data.languages && data.languages.length
    //         ? data.languages
    //             .map(
    //               (language) =>
    //                 `<option value="${language.id}">${language.name}</option>`
    //             )
    //             .join("")
    //         : ""
    //     }
    //   </select>`);
    // });
    customSelect("language");
  }
  function handle() {
    render();
    getCities();
    getLanguages();
  }
  handle();
  $(".mainContainer").on("click", "#save", function () {
    let cityId = getCustomSelectVal("city"),
      languageId = getCustomSelectVal("language");
  });
}
