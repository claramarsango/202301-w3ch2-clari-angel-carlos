import Component from "../../Component.js";

class StudentCard extends Component {
  constructor(
    parentElement: HTMLElement,
    private studentName: string,
    private studentFrustration: number
  ) {
    super(parentElement, "article", "student");
  }

  render() {
    super.render();

    this.domElement.innerHTML = `
      <h2 class="student__title">${this.studentName}</h2>
      <p className="student__frustration">${this.studentFrustration}</p>
    `;
  }
}

export default StudentCard;
