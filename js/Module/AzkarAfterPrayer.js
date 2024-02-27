export function AzkarAfterPrayer() {
  function generate() {
    $(".mainContainer")
      .html(`      <section id="AzkarAfterPrayer" class="AzkarAfterPrayer general">
        <div
          class="top"
          style="background-image: url(images/azkarAfterPrayer.png)"
        ></div>
        <div class="line"></div>
        <div class="bottom">
          <div class="container">
            <div class="title">أذكار بعد السلام من الصلاة المفروضة</div>
            <ul class="azkarList">
              <li>
                أستغفر الله, أستغفر الله , أستغفر الله.<br />
                اللهم أنت السلام . ومنك السلام , تباركت يا ذا الجلال والإكرام .
              </li>
              <li>
                لا إله إلا الله وحده لا شريك له , له الملك وله الحمد , وهو علي
                كل شىء قدير , اللهم لا مانع لما أعطيت , ولا معطي لما منعت ,
                <br />
                ولا ينفع ذا الجد منك الجد .
              </li>
              <li>
                لا إله إلا الله , وحده لا شريك له , له الملك وله الحمد , وهو علي
                كل شىء قدير , لا حول ولا قوة إلا بالله , ل إله إلا الله , ولا
                نعبد إلا إياه , له النعمة <br />
                وله الفضل وله الثناء الحسن , لا إله إلا الله مخلصين له الدين ولو
                كره الكافرون .
              </li>
              <li>سبحان الله , والحمدلله , والله أكبر.</li>
            </ul>
            <ul class="points">
              <li></li>
              <li></li>
              <li class="active"></li>
            </ul>
          </div>
        </div>
      </section>`);
  }
  function render() {
    generate();
  }
  render();
}
