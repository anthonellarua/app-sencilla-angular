import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit{
  tareas: Array<string> =['Tarea1', 'Tarea2', 'Tarea3','Tarea4'];

  constructor() { }

  ngOnInit(): void {
  }
}