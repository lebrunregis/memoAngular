import { Injectable } from '@angular/core';
import { Memo } from './memo';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  public addMemo(memo:Memo){
    memo.date = Date.now().toString()
    localStorage.setItem(memo.date,JSON.stringify(memo))
  }

  public  updateMemo(memo:Memo){
    localStorage.setItem(memo.date ||Date.now().toString() ,JSON.stringify(memo))
  }

  public  deleteMemo(date: string){
localStorage.removeItem(date)
  }
  
  public  async getMemos(): Promise<Memo[]> {
    let memos: Memo[] = []
    for (let i=0;i<localStorage.length;i++){
     let key = localStorage.key(i)
     if (key != undefined){
        let memo = localStorage.getItem(key)
        if (memo != undefined){
          memos.push(JSON.parse(memo))
        }
     }
    }
    return memos
  }
}
