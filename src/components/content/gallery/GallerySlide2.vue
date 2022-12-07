<template>
    <div class="slide">
        <img src="../../../assets/pixel7pro-promo.png" alt="Apple iPhone 14 Pro Deep Purple">
        <div class="info">
            <h2>Best of Google</h2>
            <h3>Pixel 7 Series</h3>
            <p>From <span class="price">$599</span></p>
            <span class="buy">Buy now</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>


h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1.2rem;
}
p {
    font-size: 1rem;
    font-weight: 300;
}
.price {
    font-size: 1.2rem;
    font-weight: 500;
}

.buy {
    font-size: 1.2rem;
    font-weight: 400;
    background-color: #e4ffff;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin-top: 1rem;
}

.slide {
    border-radius: 20px;
    // width: 250px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-image: linear-gradient(90deg, rgba(173, 203, 203, 1) 0%, rgba(208, 251, 251, 1) 100%);
    // box-shadow: 4px 24px 60px rgb(208, 251, 251);
    overflow: hidden;
    img {
        align-self: flex-end;
        width: 200px;
        height: 300px;
        // zoom: 50%;
        object-fit: cover;
        transform-origin: bottom;
        transform: translate(-20px, 90px);
    }
}

.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}

@media only screen and (max-width: 532px) {
    .slide {
        gap: 0.5rem;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;
        padding-right: 0.5rem;
        img {
            width: 150px;
            height: 200px;
            // margin-top: 1rem;
            // zoom: 60%;
            transform: translate(0px, 20px);
            // transform-origin: top;
            zoom: 100%;
            // margin-right: 200px;
            // filter: blur(5px);

        }
        .info {
            // position: absolute;
            // color: #fff;
            // width: 80%;
            flex: 1;
            // h3 {
            //     width: 150px;
            // }
        }
        .buy {
            display: none;
        }
    }
    
}
</style>