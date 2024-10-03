document.addEventListener("DOMContentLoaded", () => {
    let gal = fetch("https://picsum.photos/v2/list?limit=5")
        .then(res => res.json())
        .then(collection => new Gallery(collection, 3000));
})

class Gallery {
    constructor(collection, delay = null) {
        this.collection = collection;
        this.LAST_INDEX = collection.length - 1;
        this.DELAY = delay;
        this.setX(0);

        document.getElementById("gal-btn-prev")
            .addEventListener("click", () => this.moveLeft());

        document.getElementById("gal-btn-next")
            .addEventListener("click", () => this.moveRight());

    }

    setX(x) {
        this.x = x;
        this.prev = x > 0 ? x - 1 : this.LAST_INDEX;
        this.next = x < this.LAST_INDEX ? x + 1 : 0;
        this.repaint();
    }

    repaint() {
        const currentImg = this.collection[this.x];
        const prevImg = this.collection[this.prev];
        const nextImg = this.collection[this.next];
        const currentFrame = document.getElementById("this-pic");

        document.getElementById("prev-pic").src = prevImg.download_url;
        currentFrame.src = currentImg.download_url;
        document.getElementById("next-pic").src = nextImg.download_url;

        currentFrame.alt = `A photo by ${currentImg.author}.`

        if (this.interval)
            clearInterval(this.interval);
        if (this.DELAY)
            this.interval = setInterval(() => this.moveRight(), this.DELAY);
    }



    moveRight() {
        this.setX(this.next);
    }

    moveLeft() {
        this.setX(this.prev);
    }

}
