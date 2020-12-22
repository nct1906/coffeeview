const styles = `
<style>
.container {
  width: 60vw;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2vh;
}

.img {
  flex: 1;
}

img {
  width: 15vw;
}

.info {
  flex: 3;
  padding: 1vh 1vw;
}

.review {
  margin-top: 2vh;
}
</style>`

class ResultCard extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <div class="img">
        <img
          src="https://images.foody.vn/res/g69/688220/prof/s/foody-mobile-21463229_17672929133-461-636409132441098086.jpg"
          alt="Image of Starbucks"
        />
      </div>
      <div class="info">
        <h3>Starbucks CharmVit</h3>
        <div class="rating"><b>3.4</b> (192)</div>
        <div class="address">
          Charm Vit Tower A, 117 Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội
          100000, Vietnam
        </div>
        <div class="review">
          <em
            >"It's Starbucks as usual but in a lousy environment. Recommend for
            take away only."
          </em>
        </div>
      </div>
    </div>`
  }
}

window.customElements.define("result-card", ResultCard)
