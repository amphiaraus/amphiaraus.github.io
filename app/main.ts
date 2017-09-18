import {Component, OnInit} from '@angular/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES, OnActivate} from '@angular/router';

import {HomeCmp} from './components/home/home.comp';

@Component({
    selector: 'amphiaraus',
    providers: [],
    templateUrl: 'app/main.html',
    styleUrls: ['app/main.css'],
    directives: [ROUTER_DIRECTIVES],
    pipes: []
})

export class AmphiarausApp implements OnInit {

    ngOnInit() {
        $('.description').typed({
            strings: [
                'web deev..', 'Android Engineer ;)'
            ],
            backDelay: 300,
            typeSpeed: 30
        });
        console.log("@amphiaraus initialized...");
    }

}
