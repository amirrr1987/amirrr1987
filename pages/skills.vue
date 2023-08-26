<template>
  <div class="">
    <div class="amir grid grid-cols-3 gap-16">
      <figure class="effect-zoe" v-for="project in store.projects">
        <img
          class="w-full h-96 object-cover"
          src="/img/my.hacoupian.png"
          alt="img25"
        />
        <figcaption>
          <h2>{{ project.title }}</h2>
          <p class="flex justify-end gap-x-2">
            <a href="#"><Icon name="tabler:heart" size="24" /></a>
            <a href="#"><Icon name="tabler:eye" size="24" /></a>
          </p>
          <p class="description">{{ project.description }}</p>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "~/stores";

const store = useDataStore();
</script>

<style lang="scss">



/* Common style */
.grid figure {
	position: relative;
	float: left;
	overflow: hidden;
	margin: 10px 1%;
	min-width: 320px;
	max-width: 480px;
	max-height: 360px;
	width: 100%;
	background: #3085a3;
	text-align: center;
	cursor: pointer;
}

.grid figure img {
	position: relative;
	display: block;
	min-height: 100%;
	max-width: 100%;
	opacity: 0.8;
}

.grid figure figcaption {
	padding: 2em;
	color: #fff;
	text-transform: uppercase;
	font-size: 1.25em;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
	pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

/* Anchor will cover the whole item by default */
.grid figure figcaption > a {
	z-index: 1000;
	text-indent: 200%;
	white-space: nowrap;
	font-size: 0;
	opacity: 0;
}

.grid figure h2 {
	word-spacing: -0.15em;
	font-weight: 300;
}

.grid figure h2 span {
	font-weight: 800;
}

.grid figure h2,
.grid figure p {
	margin: 0;
}

.grid figure p {
	letter-spacing: 1px;
	font-size: 68.5%;
}


/*---------------*/
/***** Zoe *****/
/*---------------*/

figure.effect-zoe figcaption {
	top: auto;
	bottom: 0;
	padding: 1em;
	height: 3.75em;
	background: #fff;
	color: #3c4a50;
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
	-webkit-transform: translate3d(0,100%,0);
	transform: translate3d(0,100%,0);
}

figure.effect-zoe h2 {
	float: left;
}

figure.effect-zoe p.icon-links a {
	float: right;
	color: #3c4a50;
	font-size: 1.4em;
}

figure.effect-zoe:hover p.icon-links a:hover,
figure.effect-zoe:hover p.icon-links a:focus {
	color: #252d31;
}

figure.effect-zoe p.description {
    position: absolute;
    left: 0;
    right: 0;
    height: 359px;
    background: #414143;
    color: #fff;
    text-transform: none;
    font-size: 80%;
    opacity: 0;
    -webkit-backface-visibility: hidden;
    transition: opacity 0.35s;
    -webkit-backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100px);
}

figure.effect-zoe h2,
figure.effect-zoe p.icon-links a {
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
	-webkit-transform: translate3d(0,200%,0);
	transform: translate3d(0,200%,0);
}

figure.effect-zoe p.icon-links a span::before {
	display: inline-block;
	padding: 8px 10px;
	font-family: 'feathericons';
	speak: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.icon-eye::before {
	content: '\e000';
}

.icon-paper-clip::before {
	content: '\e001';
}

.icon-heart::before {
	content: '\e024';
}

figure.effect-zoe h2 {
	display: inline-block;
}

figure.effect-zoe:hover p.description {
	opacity: 1;
   transform: translateY(-404px);
}

figure.effect-zoe:hover figcaption,
figure.effect-zoe:hover h2,
figure.effect-zoe:hover p.icon-links a {
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

figure.effect-zoe:hover h2 {
	-webkit-transition-delay: 0.05s;
	transition-delay: 0.05s;
}

figure.effect-zoe:hover p.icon-links a:nth-child(3) {
	-webkit-transition-delay: 0.1s;
	transition-delay: 0.1s;
}

figure.effect-zoe:hover p.icon-links a:nth-child(2) {
	-webkit-transition-delay: 0.15s;
	transition-delay: 0.15s;
}

figure.effect-zoe:hover p.icon-links a:first-child {
	-webkit-transition-delay: 0.2s;
	transition-delay: 0.2s;
}
</style>
