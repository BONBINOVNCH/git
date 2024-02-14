"use strict";
import "@babel/polyfill";
import "./index.html";
import "./index.scss";
import fog_1 from './img/fog_1.png';
import { mult, sum } from './modules/calc';

const imgWrap = document.querySelector(".img")
const img = new Image()
img.src = fog_1;
img.width = 700
img.height = 700
imgWrap.append(img)

// q = 5

// const person ={
//     name:"Max",
//     age:25,
//     great: function() {
//         console.log("Grreeee")
//     }
// }

const a = {};

const person = new Object({
  name: "Max",
  age: 25,
  great: function () {
    console.log("Grreeee");
  },
});

console.log(person.constructor());

Object.prototype.sayHello = function () {
  console.log("hi");
};

person.sayHello();
a.sayHello();

const lena = Object.create(person);

console.log(lena.name);
console.log(lena.toString());
lena.sayHello();
lena.name = "ELen";
console.log(lena.name);
console.log(lena);

// const str = 'string'

const str = new String("string");

console.log(str);
console.log(str.length);
str.sayHello();

class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("my-element");
  }
}

customElements.define("my-element", MyElement);

let myelement = document.createElement("my-element");

document.body.prepend(myelement);

// class TimeFormatted extends HTMLElement { // (1)

//     connectedCallback() {
//       let date = new Date(this.getAttribute('datetime') || Date.now());

//       this.innerHTML = new Intl.DateTimeFormat("ua", {
//         year: this.getAttribute('year') || undefined,
//         month: this.getAttribute('month') || undefined,
//         day: this.getAttribute('day') || undefined,
//         hour: this.getAttribute('hour') || undefined,
//         minute: this.getAttribute('minute') || undefined,
//         second: this.getAttribute('second') || undefined,
//         timeZoneName: this.getAttribute('time-zone-name') || undefined,
//       }).format(date);
//     }

//   }

//   customElements.define("time-formatted", TimeFormatted); // (2)

class TimeFormatted extends HTMLElement {
  render() {
    // (1)
    let date = new Date(this.getAttribute("datetime") || Date.now());

    this.innerHTML = new Intl.DateTimeFormat("default", {
      year: this.getAttribute("year") || undefined,
      month: this.getAttribute("month") || undefined,
      day: this.getAttribute("day") || undefined,
      hour: this.getAttribute("hour") || undefined,
      minute: this.getAttribute("minute") || undefined,
      second: this.getAttribute("second") || undefined,
      timeZoneName: this.getAttribute("time-zone-name") || undefined,
    }).format(date);
  }

  connectedCallback() {
    // (2)
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  static get observedAttributes() {
    // (3)
    return ["datetime", "year", "month", "day", "hour", "minute", "second", "time-zone-name"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // (4)
    this.render();
  }
}

customElements.define("time-formatted", TimeFormatted);

setInterval(() => elem.setAttribute("datetime", new Date()), 1000);

customElements.define(
  "user-info",
  class extends HTMLElement {
    connectedCallback() {
      setTimeout(() => console.log(this.innerHTML));
    }
  }
);

class HelloButton extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener("click", function (event) {
      console.log("click");
    });
  }

  connectedCallback() {
    console.log("Button");
  }
}

customElements.define("my-button", HelloButton, { extends: "button" });

customElements.define(
  "show-hello",
  class extends HTMLElement {
    connectedCallback() {
      const shadow = this.attachShadow({ mode: "open" });
      shadow.innerHTML = `<p>
      Hello, ${this.getAttribute("name")}
    </p>`;
    }
  }
);

let myButton = document.querySelector("show-hello");

console.log(myButton.shadowRoot.host);

let arr = [
  { name: "Max" },
  45,
  "ghbdsn",
  [1, 2, 3],
  function () {
    return 34;
  },
];

console.log(arr);

// let removedArr = arr.splice(1,0,"max")

// console.log(arr)
// console.log(removedArr)

// let arr2 = arr.slice()

// console.log(arr2)
// console.log(arr)

// let arr2 = arr.concat("L)x")

// console.log(arr2)
// console.log(arr)

// console.log(arr.indexOf(45,1))
// console.log(arr.includes(45))

let arrOb = [
  { name: "max", age: 34 },
  { name: "dan", age: 3 },
  { name: "nan", age: 4 },
];

// let result = arrOb.find(function(item, index, array) {
//   return item.age === 34
// })

// console.log(result)

// let result2 = arrOb.findIndex(function(item, index, array) {
//   return item.age === 34
// })

// console.log(result2)

// let result = arrOb.filter(function (item, index, array) {
//   return index == name
// })

// console.log(result)

let arrSor1 = ["er", "trtr", "rrrrr"];
console.log(arrSor1.sort());

let funSort = function (a, b) {
  // if (a > b) return 1
  // if (a == b) return 0
  // if (a < b) return -1
  console.log(`${a} ${b}`);
  return a - b;
};

let arrSor2 = [5, 45, 1];
console.log(arrSor2.sort(funSort));

console.log(arrSor2.reverse());

let mapP = arrSor1.map(function (item, index, array) {
  return item + "lol";
});

console.log(mapP);

console.log(arrSor1.join("!"));
console.log(String(arrSor1));

if (Array.isArray(arrOb)) {
  console.log("Масив");
} else {
  console.log("Не Масив");
}

for (let i = 0; i < arrSor1.length; i++) {
  console.log(arrSor1[i]);
}

arrSor1.forEach(function (item, index, array) {
  item = item + "lol";
  console.log(item);
});

let value = arrSor1.reduceRight(function (previos, item, index, array) {
  return (previos = previos + item.length);
});

console.log(value);

console.log(arrSor1);

let arrDZ = ["Ван", "Ишт"];

arrDZ.push("Оля");
console.log(arrDZ);

for (let i = 0; i <= arrDZ.length; i++) {
  console.log(arrDZ[i]);
  if (arrDZ[i] == "Ван") {
    arrDZ[i] = "Пет";
  }
}
console.log(arrDZ);

let sli = arrDZ.splice(0, 1);
console.log(sli);
console.log(arrDZ);

arrDZ.unshift("Маш", "Паш");

console.log(arrDZ);

class MyElement2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let q = this.getAttribute("name");
    setTimeout(() => (q = "MAAAA"));
  }

  static get observedAttributes() {
    return ["name"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`${name} з ${oldValue} в ${newValue}`);
  }
}

customElements.define("my-element-2", MyElement2);

const section = document.querySelector("section");

const t = document.querySelector("#element-li");
const span = t.content.querySelector("span");

span.textContent = "Що не будь";
let li = t.content.cloneNode(true);
section.append(li);

span.textContent = "Що не будь2";
li = t.content.cloneNode(true);
section.append(li);

span.textContent = "Що не будь3";
li = t.content.cloneNode(true);
section.append(li);

customElements.define(
  "user-card",
  class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
      <div>Имя:
        <slot name="username">Нема</slot>
      </div>
      <div>Дата рождения:
        <slot name="birthday">Нема</slot>
      </div>
      <slot></slot>
      <style>
        ::slotted(div) {color:red}
      </style>
    `;
    }
  }
);

console.log(document.querySelectorAll("user-card div").length);

customElements.define(
  "custom-menu",
  class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
    <style> .menu.closed{color:red} </style>
    <div class="menu">
    <slot name="title">Нема</slot>
  
  <ul>
  <slot name="item">Нема</slot>
</ul>
</div>
    `;
      this.shadowRoot.lastElementChild.addEventListener("slotchange", (e) => {
        console.log("sloftchange: " + e.target.name);

        let slot = e.target;
        if (slot.name == "item") {
          this.items = slot.assignedElements().map((elem) => elem.textContent);
          console.log("Items: " + this.items);
        }
      });

      this.shadowRoot.querySelector('slot[name="title"]').onclick = () => {
        // открыть/закрыть меню
        this.shadowRoot.querySelector(".menu").classList.toggle("closed");
      };
    }
  }
);

setTimeout(() => {
  menu.insertAdjacentHTML("beforeEnd", '<li slot="item">Леденцы</li>');
}, 1000);

setTimeout(() => {
  menu.querySelector('[slot="title"]').innerHTML = "Новое меню";
}, 2000);

customElements.define(
  "custom-dialog",
  class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: "open" }).append(tmpl.content.cloneNode(true));
    }
  }
);

customElements.define(
  "user-card2",
  class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `<div>
    <b>Имя:</b> <slot name="username"></slot>
  </div>`;
      this.shadowRoot.firstElementChild.onclick = (e) =>
        console.log("Внутренний целевой элемент: " + e.target.tagName);
    }
  }
);

userCard.onclick = (e) => console.log("Внешний целевой элемент: " + e.target.tagName);

userCard.onclick = (e) => console.log(e.composedPath());

but.addEventListener("hi", function (event) {
  console.log(event.detail.name);
  console.log(event.target.tagName);
});

let event = new CustomEvent("hi", { detail: { name: 787 } });
but.dispatchEvent(event);

let click = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  clientX: 100,
  clientY: 100,
});

function hide() {
  let event = new CustomEvent("hide", { cancelable: true });
  if (!rabbit.dispatchEvent(event)) {
    alert("Відмінено");
  } else {
    rabbit.hidden = true;
  }
}

rabbit.addEventListener("hide", function (event) {
  if (confirm("Відмінити дію?")) {
    event.preventDefault();
  }
});


console.log(mult(1,1))
console.log(sum(2,2))