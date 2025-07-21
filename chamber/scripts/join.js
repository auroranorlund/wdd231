//Get timestamp for form
let now = new Date();
console.log(now);
let timestamp = document.querySelector('#timestamp');
timestamp.setAttribute("value", `${now}`);

//Card Dialog
const details = document.querySelector("#level-details");
const npButton = document.querySelector("#np-button");
const bronzeButton = document.querySelector("#bronze-button");
const silverButton = document.querySelector("#silver-button");
const goldButton = document.querySelector("#gold-button");

npButton.addEventListener('click', () =>
{
    details.innerHTML = ``;
    details.innerHTML = `
    <div class="details-header">
    <h2>Non-Profit Membership</h2>
    <button id="close">X</button>
    </div>
    <p>Annual Fee: $0</p>
    <p><i>Only available to non-profit organizations</i></p>
    <p>Benefits: Access to member-exclusive events, exclusive non-profit skill training sessions, discounts on advertising opportunities</p>
    `
    details.showModal();

    let close = document.querySelector("#close");
    close.addEventListener("click", () => {
        details.close();
    });
});

bronzeButton.addEventListener('click', () =>
{
    details.innerHTML = ``;
    details.innerHTML = `
    <div class="details-header">
    <h2>Bronze Membership</h2>
    <button id="close">X</button>
    </div>
    <p>Annual Fee: $10</p>
    <p>Benefits: Access to member-exclusive events, discounts on skill training sessions, discounts on advertising opportunities</p>
    `
    details.showModal();

    let close = document.querySelector("#close");
    close.addEventListener("click", () => {
        details.close();
    });
});

silverButton.addEventListener('click', () =>
{
    details.innerHTML = ``;
    details.innerHTML = `
    <div class="details-header">
    <h2>Silver Membership</h2>
    <button id="close">X</button>
    </div>
    <p>Annual Fee: $50</p>
    <p>Benefits: Access to member-exclusive events, free monthly skill training sessions, discounts on advertising opportunities, spotlight feature on Chamber homepage</p>
    `
    details.showModal();

    let close = document.querySelector("#close");
    close.addEventListener("click", () => {
        details.close();
    });
});

goldButton.addEventListener('click', () =>
{
    details.innerHTML = ``;
    details.innerHTML = `
    <div class="details-header">
    <h2>Gold Membership</h2>
    </div>
    <button id="close">X</button>
    <p>Annual Fee: $10,000</p>
    <p>Benefits: Access to member-exclusive events, free monthly skill training sessions, discounts on advertising opportunities, spotlight feature on Chamber homepage, access to exclusive gold member events, bragging rights</p>
    `
    details.showModal();

    let close = document.querySelector("#close");
    close.addEventListener("click", () => {
        details.close();
    });
});