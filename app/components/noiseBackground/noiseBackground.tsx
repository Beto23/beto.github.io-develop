import * as React from "react";

class NoiseBackground extends React.Component {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private toggle: boolean;

    constructor(props) {
        super(props);
    }

    public componentDidMount() {
        this.setElements();
        this.resize();
        setTimeout(() => {
            this.loopTest();
        }, 100);
    }

    public render() {
        return <canvas id="canvas" />;
    }

    private setElements() {
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        window.onresize = this.resize;
        this.toggle = true;
    }

    private resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    private noise() {
        const w = this.ctx.canvas.width;
        const h = this.ctx.canvas.height;
        const idata = this.ctx.createImageData(w, h);
        const buffer32 = new Uint32Array(idata.data.buffer);

        const len = buffer32.length;
        let i = 0;
        for(; i < len;)
        buffer32[i++] = ((255 * Math.random())|0) << 24;
        this.ctx.putImageData(idata, 0, 0);
    }

    private loopTest() {
        console.log(this.toggle);
        this.toggle = !this.toggle;
        if (this.toggle) {
            requestAnimationFrame(this.loopTest);
            return;
        }
        this.noise();
        requestAnimationFrame(this.loopTest);
    }
}

export default NoiseBackground;
