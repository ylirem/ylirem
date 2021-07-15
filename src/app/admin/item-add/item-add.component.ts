import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form)
    console.log(form.value)
    if (form.valid) {
      this.itemService.items.push(form.value);
    }
  }
}
