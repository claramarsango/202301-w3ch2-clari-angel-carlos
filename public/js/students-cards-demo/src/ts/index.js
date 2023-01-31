import MainHeader from "./components/Header/Header.js";
import StudentCard from "./components/StudentCard/StudentCard.js";
const appContainer = document.querySelector(".app");
const header = new MainHeader(appContainer, "Welcome to my components demo");
header.render();
const zhenzhi = new StudentCard(appContainer, "Zhenzhi", 0);
zhenzhi.render();
console.log(header);
