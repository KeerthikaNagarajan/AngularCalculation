import { Component } from "@angular/core";

@Component({
    selector:'Parallelogram-Area',
    templateUrl:'./parallel.component.html'
})

export class ParallelogramComponent{
    breadth:number;
    height:number;
    area:number;
    constructor(){
        this.breadth = 0
        this.height = 0
        this.area = this.breadth*this.height;
    }

    onCalculatearea()
    {
        this.area = this.breadth*this.height;
    }
}