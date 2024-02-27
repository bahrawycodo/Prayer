export function Prayers() {
  function render() {
    $(".mainContainer").html(`
        <section class="PrayersScreen general" id="PrayersScreen">
        <div class="top">
          <div class="layer">
            <img src="images/mosque2.png" alt="" />
          </div>
          <div class="container h-100">
  
            <div class="grid-2 h-100">
            
              <div class="content d-flex">
              <div class="d-flex">
              <div
                class="customSelect small"
                id="city"
                data-awesome="fa-regular fa-location-dot"
                data-title="المدينة"
              >
              </div>
              </div>

              <div class="subcontent position-relative">
                <div class="main-text">
                  <span>.. الوقت الآن ..</span>
                  <h5>7:00<span class="mx-1">PM</span></h5>
                </div>
                <h6>
                  <span>الثلاثاء</span> 28 جمادي الآخرة 1445 هـ<br />10 ديسمبر
                  2024 م
                </h6>
              </div>
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
  function getPrayers() {
    $(".prayers").html(`  
    
                      <div class="prayer">
               <svg 
                
                viewBox="0 0 287.71 317.508"
              >
                <defs xmlns="http://www.w3.org/2000/svg">
                  <linearGradient
                    id="prayer-shape-gradient"
                    x1="0.5"
                    y1="0.815"
                    x2="0.5"
                    y2="0.185"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="var(--color-stop)" />
                    <stop offset="0.001" stop-color="var(--color-stop)" />
                    <stop
                      offset="1"
                      stop-color="var(--color-bot)"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
                <path
                  id="Rounded_Rectangle_"
                  data-name="Rounded Rectangle "
                  d="M2905.387,1172.168l54.246-56.7a19.374,19.374,0,0,1,27.393-.605l56.7,54.245a19.374,19.374,0,0,1,.605,27.393l-54.246,56.7a19.373,19.373,0,0,1-27.392.605l-56.7-54.245A19.374,19.374,0,0,1,2905.387,1172.168Z"
                  transform="translate(-2831.97 -1109.492)"
                  fill="var(--main-color)"
                />
                <g
                  id="Rounded_Rectangle_1"
                  data-name="Rounded Rectangle 1"
                  transform="translate(-2831.97 -1109.492)"
                >
                  <g
                    id="Rounded_Rectangle_1-2"
                    data-name="Rounded Rectangle 1"
                    transform="translate(2831.97 1139.29)"
                    stroke-linejoin="round"
                    stroke-width="10"
                    stroke="var(--main-color)"
                    fill="var(--main-color)"
                  >
                    <rect
                      width="287.71"
                      height="287.71"
                      rx="50"
                      stroke="none"
                    />
                    <rect
                      x="5"
                      y="5"
                      width="277.71"
                      height="277.71"
                      rx="45"
                      fill="none"
                    />
                  </g>
                  <path
                    id="Gradient_Overlay"
                    data-name="Gradient Overlay"
                    d="M2881.97,1139.29h187.71a50,50,0,0,1,50,50V1377a50,50,0,0,1-50,50H2881.97a50,50,0,0,1-50-50V1189.29A50,50,0,0,1,2881.97,1139.29Z"
                    opacity="0.3"
                    fill="url(#prayer-shape-gradient)"
                  />
                </g>
              </svg>
              <div class="content">
                <i class="fa-solid fa-moon"></i>
                <h6>أذان العشاء</h6>
                <h5>7:00<span>PM</span></h5>
              </div>
            </div>`);

    // $.get("demo_test.asp", function (data, status) {
    //   $(".prayers").html(`
    //           ${
    //             data.prayers && data.prayers.length
    //               ? data.cities
    //                   .map(
    //                     (prayer) =>
    //                       `         <div class="prayer">
    //                      <svg

    //                       viewBox="0 0 287.71 317.508"
    //                     >
    //                       <defs xmlns="http://www.w3.org/2000/svg">
    //                         <linearGradient
    //                           id="prayer-shape-gradient"
    //                           x1="0.5"
    //                           y1="0.815"
    //                           x2="0.5"
    //                           y2="0.185"
    //                           gradientUnits="objectBoundingBox"
    //                         >
    //                           <stop offset="0" stop-color="var(--color-stop)" />
    //                           <stop offset="0.001" stop-color="var(--color-stop)" />
    //                           <stop
    //                             offset="1"
    //                             stop-color="var(--color-bot)"
    //                             stop-opacity="0"
    //                           />
    //                         </linearGradient>
    //                       </defs>
    //                       <path
    //                         id="Rounded_Rectangle_"
    //                         data-name="Rounded Rectangle "
    //                         d="M2905.387,1172.168l54.246-56.7a19.374,19.374,0,0,1,27.393-.605l56.7,54.245a19.374,19.374,0,0,1,.605,27.393l-54.246,56.7a19.373,19.373,0,0,1-27.392.605l-56.7-54.245A19.374,19.374,0,0,1,2905.387,1172.168Z"
    //                         transform="translate(-2831.97 -1109.492)"
    //                         fill="var(--main-color)"
    //                       />
    //                       <g
    //                         id="Rounded_Rectangle_1"
    //                         data-name="Rounded Rectangle 1"
    //                         transform="translate(-2831.97 -1109.492)"
    //                       >
    //                         <g
    //                           id="Rounded_Rectangle_1-2"
    //                           data-name="Rounded Rectangle 1"
    //                           transform="translate(2831.97 1139.29)"
    //                           stroke-linejoin="round"
    //                           stroke-width="10"
    //                           stroke="var(--main-color)"
    //                           fill="var(--main-color)"
    //                         >
    //                           <rect
    //                             width="287.71"
    //                             height="287.71"
    //                             rx="50"
    //                             stroke="none"
    //                           />
    //                           <rect
    //                             x="5"
    //                             y="5"
    //                             width="277.71"
    //                             height="277.71"
    //                             rx="45"
    //                             fill="none"
    //                           />
    //                         </g>
    //                         <path
    //                           id="Gradient_Overlay"
    //                           data-name="Gradient Overlay"
    //                           d="M2881.97,1139.29h187.71a50,50,0,0,1,50,50V1377a50,50,0,0,1-50,50H2881.97a50,50,0,0,1-50-50V1189.29A50,50,0,0,1,2881.97,1139.29Z"
    //                           opacity="0.3"
    //                           fill="url(#prayer-shape-gradient)"
    //                         />
    //                       </g>
    //                     </svg>
    //                     <div class="content">
    //                       <i class="fa-solid fa-moon"></i>
    //                       <h6>أذان العشاء</h6>
    //                       <h5>7:00<span class="mx-1">PM</span></h5>
    //                     </div>
    //                   </div>`
    //                   )
    //                   .join("")
    //               : ""
    //           }
    //         `);
    // });
  }
  function handle() {
    render();
    getPrayers();
    getCities();
  }
  handle();
}
