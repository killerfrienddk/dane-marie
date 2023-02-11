import Vue from 'vue'

import {config, library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome';

config.autoAddCss = false;

/*import {faAngleUp as farAngleUp} from "@fortawesome/pro-regular-svg-icons/faAngleUp";
import {faXmark as farXmark} from "@fortawesome/pro-regular-svg-icons/faXmark";
import {faEraser as farEraser} from "@fortawesome/pro-regular-svg-icons/faEraser";
import {faRotateRight as farRotateRight} from "@fortawesome/pro-regular-svg-icons/faRotateRight";
import {faSearch as farSearch} from "@fortawesome/pro-regular-svg-icons/faSearch";
import {faChevronDoubleLeft as farChevronDoubleLeft} from "@fortawesome/pro-regular-svg-icons/faChevronDoubleLeft";
import {faChevronDoubleRight as farChevronDoubleRight} from "@fortawesome/pro-regular-svg-icons/faChevronDoubleRight";
import {faSpinnerThird as farSpinnerThird} from "@fortawesome/pro-regular-svg-icons/faSpinnerThird";*/

/*

library.add(farAngleUp, farXmark, farEraser, farRotateRight, farSearch, farChevronDoubleLeft, farChevronDoubleRight, farSpinnerThird);
*/

/*import {faChevronLeft as fasChevronLeft} from "@fortawesome/pro-solid-svg-icons/faChevronLeft";
import {faChevronRight as fasChevronRight} from "@fortawesome/pro-solid-svg-icons/faChevronRight";

library.add(fasChevronLeft, fasChevronRight);*/

/*import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";

library.add(faTwitter)*/

/*import {faPlus as falPlus} from "@fortawesome/pro-light-svg-icons/faPlus";
import {faExclamationCircle as falExclamationCircle} from "@fortawesome/pro-light-svg-icons/faExclamationCircle";
import {faCheckCircle as falCheckCircle} from "@fortawesome/pro-light-svg-icons/faCheckCircle";
import {faFilter as falFilter} from "@fortawesome/pro-light-svg-icons/faFilter";
import {faTools as falTools} from "@fortawesome/pro-light-svg-icons/faTools";


library.add(falPlus, falExclamationCircle, falCheckCircle, falFilter, falTools);*/

import {faFacebookF} from "@fortawesome/free-brands-svg-icons/faFacebookF";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";

library.add(faInstagram, faFacebookF);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);
