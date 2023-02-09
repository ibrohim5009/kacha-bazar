const sensetiyItem = document.querySelector('.sensetiy-item');

import { data } from "../boshqa.html/data.js";
data.map((item)=>{
    sensetiyItem.innerHTML +=`
    <div class="our-sensa" id="${item.id}">
    <div class="padmin">
        <div class="padmin-img">
            <img src="${item.img}"
                alt="">
        </div>
        <div class="padmin-text">
            <h3>Orla Dwyer</h3>
            <p>Chief Executive</p>
        </div>
    </div>
</div>`
})