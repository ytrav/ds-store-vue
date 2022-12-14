<template>
    <div class="home">
        <div class="categories-carousel">
            <div class="categories">
                <h2>Categories</h2>
                <div class="list">
                    <router-link class="item" v-for="item in $store.state.items" :key="item" :to="item.path">
                        <span>{{ item.name }}</span>
                        <mdicon name="chevron-right" size="20" />
                    </router-link>
                </div>
            </div>
            <div class="carousel">
                <div class="gallery">
                    <router-link to="/">
                        <Transition name="gallery" mode="out-in">
                            <component :is="gallerySlide"></component>
                        </Transition>
                    </router-link>
                </div>
                <div class="slider">
                    <div class="slide-button"></div>
                    <div class="slide-button"></div>
                    <div class="slide-button"></div>
                </div>
            </div>
        </div>
        <div class="best-deals">
            <h2>Best Deals</h2>
            <div class="deals-flex">
                <router-link :to="deal.route" class="deal" v-for="deal in $store.state.deals" :key="deal">
                    <img :src="deal.imagePath" :alt="deal.productName">
                    <span class="deal-name">{{ deal.productName }}</span>
                    <span>${{ deal.price }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import GallerySlide1 from './gallery/GallerySlide1.vue';
import GallerySlide2 from './gallery/GallerySlide2.vue';

export default {
    name: 'AppHome',
    components: {
        GallerySlide1,
        GallerySlide2,
    },
    data() {
        return {
            gallerySlide: 'GallerySlide1',

        }
    },
    methods: {
    },
    mounted() {
        setInterval(() => {
            if (this.gallerySlide === 'GallerySlide1') {
                this.gallerySlide = 'GallerySlide2';
            } else {
                this.gallerySlide = 'GallerySlide1';
            }
        }, 10000);
    },
}
</script>

<style lang="scss" scoped>
$gradient: linear-gradient(90deg, rgba(173, 203, 203, 1) 0%, rgba(208, 251, 251, 1) 100%);

.gallery-enter-active {
    transition: all 1s ease-out;
}

.gallery-leave-active {
    transition: all 0.5s ease-in;
}
.gallery-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}

.gallery-enter-from {
    opacity: 0;
    transform: translateX(100px);
}

.home {
    max-width: 1200px;
    width: 100%;
    padding: 32px;
}

h2 {
    font-weight: 300;
}

.categories-carousel {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 100px;
    justify-items: center;
    margin-bottom: 50px;
}

.categories {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 300px;
    margin-top: 20px;

    .list {
        display: flex;
        flex-direction: column;
        gap: 7px;

        .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-radius: 8px;
            cursor: pointer;
            transition: box-shadow 0.2s ease-out;

            &:hover {
                background-image: linear-gradient(90deg, rgba(173, 203, 203, 1) 0%, rgba(208, 251, 251, 1) 100%);
                box-shadow: 4px 24px 60px rgb(208,251,251);
            }
        }
    }


    a {
        text-decoration: none;
        color: #000;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1.2rem;
    }

    

}

.deals-flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 20px;
        margin-top: 10px;

        .deal {
            // flex: 1;
            flex-grow: 1;
            flex-shrink: 0;
            // flex-basis: 25%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            gap: 5px;
            width: 100%;
            max-width: 200px;
            padding: 10px;
            border-radius: 8px;
            height: 200px;
            cursor: pointer;
            transition: box-shadow 0.2s ease-out;
                background-image: linear-gradient(90deg, #adcbcb 0%, rgba(208, 251, 251, 1) 100%);
                box-shadow: 4px 24px 60px #d0fbfb;
                transition: box-shadow 0.2s ease-out;

            .deal-name {
                max-width: 100%;
                height: 25px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            &:hover {
                background-image: linear-gradient(90deg, #C1D7D7 0%, #ECFDFD 100%);
                box-shadow: 4px 24px 80px #d0fbfb;
            }

            img {
                width: 100%;
                max-width: 150px;
                height: 100%;
                max-height: 130px;
                object-fit: contain;
                align-self: center;
            }
        }
    }

.gallery {
    width: 500px;
    height: 85%;
    max-height: 300px;
    flex: 1;
    cursor: pointer;
}
.slider {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    // margin-top: 10px;
    height: 15%;
}
.slide-button {
    width: 35px;
    height: 7px;
    border-radius: 10px;
    background-color: rgb(213, 213, 213);
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.1s ease-out;

    &:hover {
        background-color: rgb(150, 150, 150);
    }
}

@media only screen and (max-width: 964px) {
    .categories-carousel {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: flex-start;
        gap: 50px;
        .categories {
            max-width: 100%;
        }
        .carousel, .gallery {
            width: 100%;
        }
        .gallery {
            max-height: 500px;
        }
        .carousel {
            overflow-x: hidden;
        }

        .slider {
            margin-top: 20px;
        }
    }
}

@media (hover: none) {
    .categories .list .item {
        background-color: #e9e9e9;
        padding: 15px;
    }
}

@media only screen and (max-width: 600px) {
    .deals-flex {
        // flex-direction: column;
        align-items: center;
        // gap: 20px;
        .deal {
            // max-width: 100%;
            height: 200px;
            max-width: 45%;
            // flex: 2;
        }
    }
}

// @media only screen and (max-width: 444px) {
//     .deals-flex {
//         gap: 5px;
//         justify-content: center;
//         .deal {
//             // max-width: 100%;
//         }
//     }
// }
@media only screen and (max-width: 389px) {
    .deals-flex {
        gap: 10px;
        justify-content: center;
        .deal {
            max-width: 100%;
            min-width: 100%;
        }
    }
}

</style>