import { qs } from "../helpers.js";
import View from "./View.js";

export default class SearchFormView extends View {
    constructor() {
        super(qs("#search-form-view"));

        this.resetElemnts = qs("[type=reset]", this.element);
        this.showResetButton(false);
    }

    showResetButton(visiable = true) {
        this.resetElemnts.style.display = visiable ? "block" : "none";
    }
}