import { Component, Input, OnInit } from "@angular/core";
import { Hero } from "../../types/Hero";

@Component({
    selector: "[app-heroes-list-item]",
    templateUrl: "./heroes-list-item.component.html",
    styleUrls: ["./heroes-list-item.component.scss"]
})
export class HeroesListItemComponent implements OnInit {
    @Input() hero: Hero = {
        id: -1,
        name: "This component requires an hero as input"
    };

    constructor() {
    }

    ngOnInit(): void {
    }

}
