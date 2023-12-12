import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { VirtualScrollerLazyLoadEvent } from 'primeng/virtualscroller';
import { Memo } from 'src/app/service/memo';
import { MemoService } from 'src/app/service/memo.service';

@Component({
  selector: 'app-list-memo',
  templateUrl: './list-memo.component.html',
  styleUrls: ['./list-memo.component.css']
})
export class ListMemoComponent  implements OnInit {

memos!: Memo[];
virtualMemos!:  Memo[];
loadedMemos!: Memo[];

constructor(private memoService: MemoService) {}

ngOnInit() {
  this.memoService.getMemos().then((memos: Memo[]) => {
      this.memos = memos;
  });
  this.virtualMemos = Array.from({ length: 10000 });
}

loadMemoLazy(event: LazyLoadEvent) {
  let first = event.first ||0;
  let rows = event.first || 0;
            let loadedMemos = this.memos.slice(first, first + rows);

      //Array.prototype.splice.apply(this.virtualMemos, [...[first, rows], ...loadedMemos]);

      //event.forceUpdate();
}

}
