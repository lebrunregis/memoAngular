import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Memo } from 'src/app/service/memo';
import { MemoService } from 'src/app/service/memo.service';


@Component({
  selector: 'app-create-memo',
  templateUrl: './create-memo.component.html',
  styleUrls: ['./create-memo.component.css'],
  providers: [MessageService]
})
export class CreateMemoComponent implements OnInit {

  ngForm: FormGroup | undefined;
  memo: Memo = new Memo();

  constructor(
    private _memoService: MemoService,
    private _messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.ngForm = new FormGroup({
      title: new FormControl(this.memo.title, [
        Validators.required,
        Validators.minLength(10)
      ]),
      url: new FormControl(this.memo.url, [
        Validators.pattern(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)
      ]),
      details: new FormControl(this.memo.details),
    });
  }

  newMemo() {
    this._memoService.addMemo(this.memo);
    this._messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Memo added' });
  }

}
