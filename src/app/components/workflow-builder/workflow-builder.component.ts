import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import Drawflow from 'drawflow';

@Component({
  selector: 'app-workflow-builder',
  imports: [CommonModule],
  templateUrl: './workflow-builder.component.html',
  styleUrl: './workflow-builder.component.scss'
})

export class WorkflowBuilderComponent implements OnInit {
  @ViewChild('drawflowContainer', { static: true }) drawflowContainer!: ElementRef;
  @ViewChild('contextMenu', { static: true }) contextMenu!: ElementRef;

  private editor: any;
  contextMenuVisible = false;
  contextMenuStyle = { top: '0px', left: '0px' };
  selectedNodeId: number | null = null;

  ngOnInit() {
    this.initializeDrawflow();
  }

  initializeDrawflow() {
    this.editor = new Drawflow(this.drawflowContainer.nativeElement);
    this.editor.start();

    // Start Node
    this.editor.addNode(
      'Start', //name
      0, //inputs
      1, //outputs
      100, //position x
      200, //position y
      'start-node', //class
      {}, //data
      '<div class="node-content">Start</div>' //html
    );

    // Decision Node
    this.editor.addNode(
      'Decision',
      1,
      2,
      300,
      200,
      'decision-node',
      {},
      '<div class="node-content">Decision</div>'
    );

    // API Call Node
    this.editor.addNode(
      'API Call',
      1,
      1,
      500,
      200,
      'api-call-node',
      {},
      '<div class="node-content">API Call</div>'
    );

    // End Node
    this.editor.addNode(
      'End',
      2,
      0,
      700,
      200,
      'end-node',
      {},
      '<div class="node-content">End</div>'
    );
  }

  // showContextMenu(event: MouseEvent, nodeId: number) {
  //   this.contextMenuVisible = true;
  //   this.contextMenuStyle = {
  //     top: `${event.clientY}px`,
  //     left: `${event.clientX}px`
  //   };
  //   this.selectedNodeId = nodeId;
  // }

  // deleteNode() {
  //   if (this.selectedNodeId !== null) {
  //     this.editor.removeNodeId(this.selectedNodeId);
  //   }
  //   this.contextMenuVisible = false;
  // }

  // @HostListener('document:click')
  // hideContextMenu() {
  //   this.contextMenuVisible = false;
  // }

  exportWorkflow() {
    const jsonData = this.editor.export();
    console.log('Workflow JSON:', jsonData);
  }

  addNewStep() {
    this.editor.addNode(
      'New Node',
      1,
      0,
      700,
      200,
      'new-node',
      {},
      '<div class="node-content">New Node</div>'
    );
  }
}