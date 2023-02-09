const mail_ru1 = document.querySelector(".mail-ru1");
import { data } from "../data/about3.js";
data.map((item) => {
  mail_ru1.innerHTML += `
    <div class="mail-uz2">
    <div class="kichkina">
        <p>${item.p}</p>
    </div>
    <div class="img-mail">
        <img src="${item.img}"
            alt="">
    </div>
    <div class="mail-text">
        <div class="mail-li">
            <p>${item.span}</p>
        </div>
        <div class="mail-li2">
            <h4>Mandarin Clementine</h4>
        </div>
        <div class="ilmilol">
            <div class="mail-li3">
                <h3>$11</h3>
                <h4>12</h4>
            </div>
            <div class="mail-card">
                <div class="icon-mail">
                    <i class="fa-solid fa-cart-plus"></i>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
});
