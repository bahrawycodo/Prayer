export function remainingTime() {
  function render() {
    $(".mainContainer").html(`
        <section id="remainingTime" class="general remainingTime">
        <div
          class="top position-relative"
          style="background: url(images/remainingBackground.png)"
        >
          <div class="content">
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
          </div>
        </div>
        <div class="bottom">
          <div class="layer"><img src="images/remainingMosque.png" /></div>
          <div class="container-fluid position-relative h-100">
            <div class="title">الوقت المتبقي حتي الآذان</div>
            <div class="content grid-2 h-100">
              <h5>الوقت المتبقي حتي أذان العشاء</h5>
              <div class="TimeCounter f-flex gap-1">
                <div class="Time">
                  <div class="timetop f-flex gap-1">
                    <h4 class="value">00</h4>
                    <span class="seperator">:</span>
                  </div>
                  <h6 class="Name">ثانية</h6>
                </div>
                <div class="Time">
                  <div class="timetop f-flex gap-1">
                    <h4 class="value">00</h4>
                    <span class="seperator">:</span>
                  </div>
                  <h6 class="Name">دقيقة</h6>
                </div>
                <div class="Time">
                  <div class="timetop f-flex gap-1">
                    <h4 class="value">00</h4>
                  </div>
                  <h6 class="Name">ساعة</h6>
                </div>
              </div>
            </div>
            <div class="footer">
              يرفع أذان العشاء في تمام الساعة <span>7:00</span> مساءاً حسب
              التوقيت المحلي لمدينة جدة
            </div>
          </div>
        </div>
      </section>
        `);
  }
  render();
}
