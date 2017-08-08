import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-user-itemp',
    templateUrl: './user-itemp.component.html',
    styleUrls: ['./user-itemp.component.css']
})
export class UserItempComponent implements OnInit {
    @Input() name: string;

    constructor() { }

    ngOnInit() {
    }

}
