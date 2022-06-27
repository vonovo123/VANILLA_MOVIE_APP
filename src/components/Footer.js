import Component from "./Component";
import Logo from "./Logo";
import "~/scss/footer.scss";
export default class Footer extends Component {
  constructor($parent) {
    super($parent, "footer", { className: ["footer"] });
    this.child = [new Logo(this.$)];
  }
  render() {
    this.child.forEach((child) => child.render());
    const $aTag = document.createElement("a");
    $aTag.target = "_blank";
    this.$.append($aTag);
  }
}
