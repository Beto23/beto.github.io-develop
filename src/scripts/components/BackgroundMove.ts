import { TweenLite } from 'gsap';
import * as $ from "jquery";

class BackgroundMove {
    el : HTMLElement;

    constructor(el: HTMLElement, backgroundUrl: string, classElemetn?: string) {
        this.el = el;
        this.appendContainer(backgroundUrl);
        this.init();
    }

    appendContainer(bgUrl: string, classElemetn: string = 'bg--move' ) : void {
        $(this.el).append(`<div 
            id="bg--move"
            class=${classElemetn}
            style="background-image: url(${bgUrl})"></div>`);
    }

    init = (): void => {
        const elBg : JQuery<HTMLElement> = $('#bg--move');
        $(window).on('mousemove click', (e: any) => {

            let relX = e.clientX - elBg.offset().left;
            let relY = e.clientY - elBg.offset().top;

            let translateX = (relX - elBg.width()/2) / elBg.width() * -20;
            let translateY = (relY - elBg.height()/2) / elBg.height() * -20

            TweenLite.to(elBg, .5, {
                x: translateX,
                y: translateY
            });
        });
    }

}

export default BackgroundMove;