import { Component, Input, OnInit } from "@angular/core";
import { Hero } from "../../types/Hero";
import { HEROES } from "./data";

@Component({
    selector: "app-heroes",
    templateUrl: "./heroes.component.html",
    styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[] = HEROES;

    constructor() {
    }

    ngOnInit(): void {
    }

}
