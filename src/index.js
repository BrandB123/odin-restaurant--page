import { HomeContentController } from './HomeContentController';
import { MenuContentController } from './MenuContentController';
import { AboutContentController } from './AboutContentController';
    
HomeContentController();

let homeBtn = document.querySelector("#home-btn");
let menuBtn = document.querySelector("#menu-btn");
let aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click", HomeContentController);
menuBtn.addEventListener("click", MenuContentController);
aboutBtn.addEventListener("click", AboutContentController);




