import Component from "../../Component.js";
class MainHeader extends Component {
    constructor(parentElement, title) {
        super(parentElement, "header", "header");
        this.title = title;
    }
    render() {
        super.render();
        this.domElement.innerHTML = `
      <h1>${this.title}</h1> 
      <nav className="main-navigation">
        <ul>
          <li><a href="">coso 1</a></li>
          <li><a href="">coso 2</a></li>
          <li><a href="">coso 3</a></li>
        </ul>
      </nav>     
    `;
    }
}
export default MainHeader;
