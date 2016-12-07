/**
 * Created by iVolume on 06.12.2016.
 */

import { Component } from '@angular/core';

@Component({
    selector: 'reddit',
    styleUrls: ['./app/reddit/reddit.css'],
    template: `
        <form class="ui large form segment">
            <h3 class="ui header">Добавить ещё одну ссылку</h3>
            <fieldset class="field">
                <label for="title">Заголовок:</label>
                <input type="text" name="title" #newtitle/>
            </fieldset>
            <fieldset class="field">
                <label for="link">Ссылка:</label>
                <input type="text" name="link" #newlink/>
            </fieldset>
            <fieldset class="field">
                <label for="wish">Пожелания:</label>
                <input type="text" name="wish"/>
            </fieldset>
            <button class="ui positive right floated button" (click)="addArticle($event, newtitle, newlink)">
                Отправить
            </button>
        </form>
        `
})
export class RedditAppComponent {
    addArticle(event: any, newtitle: HTMLInputElement, newlink: HTMLInputElement){
        event.preventDefault();

        let titleVal = newtitle.value,
            linkVal = newlink.value;

        if( titleVal || linkVal != ''){
            console.log(titleVal, linkVal);
        } else console.log(this);



    }
}

