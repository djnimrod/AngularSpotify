import {Component, Input, Output, EventEmitter } from '@angular/core';
    

@Component({
    selector: 'custom-hello',
    templateUrl: './hello.component.html',
    styleUrls: [
        './hello.component.css'
    ] 
})

export class HelloComponent{
    @Input() name: string;
    @Output() sayHello:EventEmitter<string>= new EventEmitter<string>();

    public nameList: Array<string>=[];
    public inputName:string = '';

    constructor(){}

    onNameClick(){
        this.sayHello.emit('Hello');
    }

    addName(){
        this.nameList.push(this.inputName);
        this.inputName='';
        console.log(this.nameList);
        
    }
    


}
