import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {

    @Output() selected = new EventEmitter<string>();

    onSelect(option: string) {
        this.selected.emit(option);
    }

};