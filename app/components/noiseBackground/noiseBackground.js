var noise = function () {
    var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
    console.log("hola");
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.onresize = resize;

    function noise(ctx) {
        const w = ctx.canvas.width;
        const h = ctx.canvas.height;
        const idata = ctx.createImageData(w, h);
        const buffer32 = new Uint32Array(idata.data.buffer);

        const len = buffer32.length;
        let i = 0;
        for(; i < len;)
        buffer32[i++] = ((255 * Math.random())|0) << 24;
        ctx.putImageData(idata, 0, 0);
    }

    var toggle = true;

    (function loop() {
        toggle = !toggle;
        if(toggle) {
            requestAnimationFrame(loop);
            return;
        }
        noise(ctx);
        requestAnimationFrame(loop);
    })();
}

setTimeout(() => {
    noise();
}, 300);
