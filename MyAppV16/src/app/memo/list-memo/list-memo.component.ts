import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent, MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { VirtualScrollerLazyLoadEvent } from 'primeng/virtualscroller';
import { Memo } from 'src/app/service/memo';
import { MemoService } from 'src/app/service/memo.service';

@Component({
  selector: 'app-list-memo',
  templateUrl: './list-memo.component.html',
  styleUrls: ['./list-memo.component.css']
})
export class ListMemoComponent  implements OnInit, OnDestroy {

update(memo:Memo) {
this._router.navigate(["memo/"+"edit/"+ memo.date])
}

delete(memo:Memo){
this._memoService.deleteMemo(memo.date!)
}

memos: Memo[] = [];
hasMemos: boolean = false;
virtualMemos:  Memo[]= [];

constructor(private _memoService: MemoService, private _router: Router) {
   
}

updateMemos(){
    this._memoService.getMemos().then((memos: Memo[]) => {
      this.memos = memos;
      this.hasMemos = this.memos.length >0 
      this.virtualMemos = Array.from({ length: this.memos.length }); 
  });
}

openLink(url: string){
  window.open(url, "_blank");
}

ngOnInit() {
  this.updateMemos()
  this._memoService.contentsChanged.subscribe(this.updateMemos);
}

ngOnDestroy(){
 //this._memoService.contentsChanged.unsubscribe();
}

loadMemoLazy(event: VirtualScrollerLazyLoadEvent) {
   setTimeout(() => {
    let loadedMemos = this.memos.slice(event.first, event.first! + event.rows!);

   this.virtualMemos = loadedMemos

    if(event.forceUpdate){
      event.forceUpdate();
    }
    
}, 1000);
}

}
