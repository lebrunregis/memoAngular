import { Component } from '@angular/core';
import { Memo } from 'src/app/service/memo';
import { MemoService } from 'src/app/service/memo.service';

@Component({
  selector: 'app-create-memo',
  templateUrl: './create-memo.component.html',
  styleUrls: ['./create-memo.component.css']
})
export class CreateMemoComponent {
  constructor(
  private memoService: MemoService
  ) { }

newMemo() {
this.memoService.addMemo(this.memo)
}
memo : Memo = new Memo()
}
