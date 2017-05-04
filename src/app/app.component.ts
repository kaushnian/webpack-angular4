import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>Hello {{name}}, I love you!</h1>'
})

export class AppComponent { 
    name = 'Eugene';
};