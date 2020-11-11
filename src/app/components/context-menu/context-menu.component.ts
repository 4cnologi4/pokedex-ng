import { Component, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";

import { Pokemon } from "../../models/pokemon.interface";

@Component({
  selector: "context-menu",
  templateUrl: "context-menu.component.html"
})
export class ContextMenuExample {
  items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
  ];

  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: "0px", y: "0px" };

  onContextMenu(event: MouseEvent, item: Item) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { item: item };
    this.contextMenu.menu.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }

  onContextMenuAction1(pokemon: Pokemon) {
    alert(`Click on Action 1 for ${pokemon.name}`);
  }

  onContextMenuAction2(pokemon: Pokemon) {
    alert(`Click on Action 2 for ${pokemon.name}`);
  }
}

export interface Item {
  id: number;
  name: string;
}
