import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import * as joint from 'jointjs';

declare var jointPlus: any;

@Component({
  selector: 'app-joint-js-poc',
  imports: [],
  templateUrl: './joint-js-poc.component.html',
  styleUrl: './joint-js-poc.component.scss'
})

export class JointJsPocComponent implements AfterViewInit {
  @ViewChild('diagramContainer', { static: false }) diagramContainer!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.initializeDiagram();
  }

  initializeDiagram(): void {
    // const graph = new joint.dia.Graph();

    // const paper = new joint.dia.Paper({
    //   el: this.diagramContainer.nativeElement,
    //   model: graph,
    //   width: 800,
    //   height: 500,
    //   gridSize: 10,
    //   drawGrid: true,
    //   background: { color: '#f8f9fa' }
    // });

    // // Create a basic rectangle shape
    // const rect1 = new joint.shapes.standard.Rectangle();
    // rect1.position(100, 100);
    // rect1.resize(100, 40);
    // rect1.attr({
    //   body: { fill: 'blue' },
    //   label: { text: 'JointJS', fill: 'white' }
    // });
    // rect1.addTo(graph);

    // const rect2 = new joint.shapes.standard.Rectangle();
    // rect2.position(100, 100);
    // rect2.resize(100, 40);
    // rect2.attr({
    //   body: { fill: 'blue' },
    //   label: { text: 'JointJS', fill: 'white' }
    // });
    // rect2.addTo(graph);

    // const link = new joint.shapes.standard.Link();
    // link.source(rect1);
    // link.target(rect2);
    // link.addTo(graph);
    // link.appendLabel({
    //   attrs: {
    //     text: {
    //       text: 'to the'
    //     }
    //   }
    // });
    // link.router('orthogonal');
    // link.connector('straight', { cornerType: 'line' });


    console.log(jointPlus);
    // const stencil = new jointPlus.ui.Stencil({
    //   paper: paper,
    //   width: 170,
    //   height: '100%',
    //   layout: true,
    //   dropAnimation: true
    // });
    // stencil.render();
    // document.getElementById('stencil')?.appendChild(stencil.el);
  }
}