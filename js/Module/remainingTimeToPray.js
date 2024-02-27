export function remainingTimeToPray() {
  function generate() {
    $(".mainContainer")
      .html(`     <section class="remainingTimeToPray" id="remainingTimeToPray">
        <div class="top">
          <div class="container">
            <div class="title">الوقت المتبقي حتي الإقامة</div>
            <div class="timerContainer" id="timerContainer"></div>
          </div>
        </div>
        <div class="footer">
          <div class="container position-relative">
            <p>
              إن أحدكم إذا توضأ فأحسن وأتى المسجد لايريد إلا الصلاة لم يخط خطوة
              إلا رفعه الله بها درجة وحط عنه خطيئة حتى يدخل المسجد
            </p>
            <img src="images/remainingTimeToPrayMosque.png" />
          </div>
        </div>
      </section>`);
  }
  function render() {
    generate();
    Timer("timerContainer", 0.5 * 60);
  }
  render();
}
