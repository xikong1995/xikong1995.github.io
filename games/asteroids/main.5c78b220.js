(()=>{"use strict";var t={527:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.GAME_STATE_GAME_OVER=e.GAME_STATE_PLAYER_DIE=e.GAME_STATE_PLAY_LEVEL=e.GAME_STATE_PLAYER_START=e.GAME_STATE_NEW_LEVEL=e.GAME_STATE_NEW_GAME=e.GAME_STATE_TITLE=e.GAME_STATE_INIT=void 0,e.GAME_STATE_TITLE=1,e.GAME_STATE_INIT=2,e.GAME_STATE_NEW_GAME=3,e.GAME_STATE_NEW_LEVEL=4,e.GAME_STATE_PLAYER_START=5,e.GAME_STATE_PLAY_LEVEL=6,e.GAME_STATE_PLAYER_DIE=7,e.GAME_STATE_GAME_OVER=8},120:function(t,e,n){var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Background=void 0;var r=function(t){function e(e){var n=t.call(this)||this;return n.drawImg=e,n.sx=e.sx,n.sy=e.sy,n}return o(e,t),e.prototype.update=function(){this.sx+=.5,this.sx>=1200&&(this.sx=0)},e.prototype.render=function(t){t.save(),t.drawImage(this.drawImg.img,this.sx,this.sy,this.drawImg.width,this.drawImg.height,0,0,this.drawImg.width,this.drawImg.height),t.restore()},e}(n(546).Base);e.Background=r},546:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Base=void 0;var n=function(){function t(){this.radius=0,this.sx=0,this.sy=0,this.width=0,this.height=0,this.dx=0,this.dy=0,this.dw=0,this.dh=0,this.movingX=0,this.movingY=0,this.halfWidth=0,this.halfHeight=0,this.x=0,this.y=0,this.rotation=0}return t.prototype.update=function(t){},t.prototype.render=function(t){},t.prototype.outOfRect=function(t,e,n,i){return this.x<t||this.x>e||this.y<n||this.y>i},t.prototype.checkColl=function(t){return!(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2)>Math.pow(this.radius+t.radius,2))},t}();e.Base=n},661:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.DrawImage=void 0;e.DrawImage=function(t,e,n,i,o){void 0===i&&(i=0),void 0===o&&(o=0),this.img=t,this.width=e,this.height=n,this.sx=i,this.sy=o}},370:function(t,e,n){var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||i(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),o(n(546),e),o(n(907),e),o(n(434),e),o(n(314),e),o(n(609),e),o(n(835),e),o(n(120),e),o(n(661),e)},907:function(t,e,n){var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Missile=void 0;var r=n(904),a=function(t){function e(e){var n=t.call(this)||this;return n.life=0,n.lifeCtr=0,n.drawImg=e,n.sx=e.sx,n.sy=e.sy,n.radius=2,n.dw=e.width,n.dh=e.height,n}return o(e,t),e.prototype.update=function(t){var e=t.xMin,n=t.xMax,i=t.yMin,o=t.yMax;return this.x+=this.dx,this.y+=this.dy,this.x>n?this.x=e-this.dw/2:this.x<-this.dw/2&&(this.x=n+this.dw/2),this.y>o?this.y=i-this.dh/2:this.y<-this.dh/2&&(this.y=o+this.dh/2),++this.lifeCtr<=this.life},e.prototype.render=function(t){t.save(),t.translate(this.x+1,this.y+1),t.rotate((0,r.d2a)(this.rotation-270)),t.drawImage(this.drawImg.img,this.sx,this.sy,this.drawImg.width,this.drawImg.height,-this.dw/2,-this.dh/2,this.dw,this.dh),t.restore()},e}(n(546).Base);e.Missile=a},434:function(t,e,n){var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Particle=void 0;var r=function(t){function e(){var e=t.call(this)||this;return e.life=0,e.lifeCtr=0,e.life=Math.floor(30*Math.random()+30),e.dx=3*Math.random(),Math.random()<.5&&(e.dx*=-1),e.dy=3*Math.random(),Math.random()<.5&&(e.dy*=-1),e}return o(e,t),e.prototype.update=function(t){var e=t.xMin,n=t.xMax,i=t.yMin,o=t.yMax;return this.x+=this.dx,this.y+=this.dy,!this.outOfRect(e,n,i,o)&&++this.lifeCtr<=this.life},e.prototype.render=function(t){t.save(),t.translate(this.x,this.y),t.strokeStyle="#ffffff",t.beginPath(),t.moveTo(0,0),t.lineTo(1,1),t.stroke(),t.closePath(),t.restore()},e}(n(546).Base);e.Particle=r},314:function(t,e,n){var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Player=void 0;var r=n(904),a=function(t){function e(e){var n=t.call(this)||this;return n.missileSpeed=5,n.missileFrameDelay=10,n.missileFrameCount=0,n.maxVelocity=2,n.rotationalVelocity=4,n.thrustAcceleration=.03,n.thrust=!1,n.alpha=1,n.drawImg=e,n.sx=e.sx,n.sy=e.sy,n.radius=10,n.dh=n.dw=2*(n.radius+3),n}return o(e,t),e.prototype.update=function(t){var e=t.xMin,n=t.xMax,i=t.yMin,o=t.yMax;this.missileFrameCount+=1,this.x+=this.movingX,this.y+=this.movingY;var r=this.rotation-270;r>360?r-=360:r<0&&(r+=360),this.sy=Math.floor(r/4)*this.drawImg.height,this.x>n+this.dw/2?this.x=e-this.dw/2:this.x<e-this.dw/2&&(this.x=n+this.dw/2),this.y>o+this.dh/2?this.y=i-this.dh/2:this.y<i-this.dh/2&&(this.y=o+this.dh/2)},e.prototype.render=function(t){this.thrust&&(t.save(),t.translate(this.x,this.y),t.rotate((0,r.d2a)(this.rotation-270)),t.globalAlpha=.5+.5*Math.random(),t.globalCompositeOperation="lighter",t.fillStyle="rgb(25,125,255)",t.beginPath(),t.moveTo(-5,8),t.lineTo(5,8),t.lineTo(0,18+6*Math.random()),t.closePath(),t.fill(),t.restore()),t.save(),t.globalAlpha=this.alpha,t.translate(this.x,this.y),t.drawImage(this.drawImg.img,this.sx,this.sy,this.drawImg.width,this.drawImg.height,-this.dw/2,-this.dh/2,this.dw,this.dh),t.restore()},e}(n(546).Base);e.Player=a},609:function(t,e,n){var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Rock=e.ROCK_SMALL=e.ROCK_MEDIUM=e.ROCK_LARGE=void 0;var r=n(546);e.ROCK_LARGE=1,e.ROCK_MEDIUM=2,e.ROCK_SMALL=3;var a=function(t){function n(e,n){var i=t.call(this)||this;return i.rotationInc=1,i.drawImg=e,i.sx=e.sx,i.sy=e.sy,i.movingX=2*Math.random()+n.levelRockMaxSpeedAdjust,Math.random()>.5&&(i.movingX*=-1),i.movingY=2*Math.random()+n.levelRockMaxSpeedAdjust,Math.random()>.5&&(i.movingY*=-1),i}return o(n,t),n.prototype.setScale=function(t){this.scale=t,t===e.ROCK_LARGE?(this.scoreValue=50,this.radius=30):t===e.ROCK_MEDIUM?(this.scoreValue=75,this.radius=20):t===e.ROCK_SMALL&&(this.scoreValue=100,this.radius=16),this.dh=this.dw=2*(this.radius+3)},n.prototype.update=function(t){var e=t.xMin,n=t.xMax,i=t.yMin,o=t.yMax;this.x+=this.movingX,this.y+=this.movingY,this.rotation+=this.rotationInc,this.rotation>=360&&(this.rotation-=360),this.sy=Math.floor(this.rotation/2)*this.drawImg.height,this.x>n+this.dw/2?this.x=e-this.dw/2:this.x<e-this.dw/2&&(this.x=n+this.dw/2),this.y>o+this.dh/2?this.y=i-this.dh/2:this.y<i-this.dh/2&&(this.y=o+this.dh/2)},n.prototype.render=function(t){t.save(),t.translate(this.x,this.y),t.drawImage(this.drawImg.img,this.sx,this.sy,this.drawImg.width,this.drawImg.height,-this.dw/2,-this.dh/2,this.dw,this.dh),t.restore()},n}(r.Base);e.Rock=a},835:function(t,e,n){var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Saucer=void 0;var r=n(546),a=n(904),s=function(t){function e(e,n){var i=t.call(this)||this;return i.scoreValue=300,i.rotationInc=4,i.fireRate=0,i.missileSpeed=0,i.fireDelay=0,i.fireDelayCount=0,i.drawImg=e,i.sx=e.sx,i.sy=e.sy,i.radius=15,i.dh=i.dw=2*(i.radius+3),i.fireRate=n.levelSaucerFireRate,i.fireDelay=n.levelSaucerFireDelay,i.missileSpeed=n.levelSaucerMissileSpeed,i.movingX=n.levelSaucerSpeed,Math.random()>.5&&(i.movingX*=-1),i.movingY=2*Math.random(),Math.random()>.5&&(i.movingY*=-1),i.x=Math.random()>.5?n.xMax+i.dw/2:-i.dw/2,i.y=(0,a.rnd)(0,n.yMax),i}return o(e,t),e.prototype.update=function(t){var e=t.xMin,n=t.xMax,i=t.yMin,o=t.yMax;this.fireDelayCount+=1,Math.floor(100*Math.random())<=this.fireRate&&this.fireDelayCount>this.fireDelay&&(this.fireDelayCount=0),this.x+=this.movingX,this.y+=this.movingY,this.rotation+=this.rotationInc,this.rotation>=360&&(this.rotation-=360),this.sy=Math.floor(this.rotation/4)*this.drawImg.height;var r=!1;return(this.movingX>e&&this.x>n+this.dw/2||this.movingX<e&&this.x<e-this.dw/2)&&(r=!0),(this.y>o+this.dh/2||this.y<i-this.dh/2)&&(this.movingY*=-1),!r},e.prototype.render=function(t){t.save(),t.translate(this.x,this.y),t.drawImage(this.drawImg.img,this.sx,this.sy,this.drawImg.width,this.drawImg.height,-this.dw/2,-this.dh/2,this.dw,this.dh),t.restore()},e}(r.Base);e.Saucer=s},23:function(t,e,n){var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||i(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),o(n(901),e),o(n(772),e)},901:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Prerenderer=void 0;var n=function(){function t(){this.images={},this.renderers=[],this.addRenderer((function(t){t.width=18,t.height=22;var e=t.getContext("2d");e.shadowBlur=8,e.translate(.5*t.width,.5*t.height),e.shadowColor=e.fillStyle="rgb(50,255,50)",i(e,1,5),e.fill(),e.shadowColor=e.fillStyle="rgb(120,255,120)",i(e,2,6),e.fill();var n=new Image;return n.src=t.toDataURL("image/png"),n}),"bullet"),this.addRenderer((function(t){t.width=t.height=24;var e=t.getContext("2d");e.shadowBlur=8,e.shadowColor=e.fillStyle="rgb(200,200,250)",e.translate(.5*t.width,.5*t.height),e.beginPath(),e.arc(0,0,3,0,2*Math.PI,!0),e.closePath(),e.fill(),function(t,e){t.beginPath(),t.moveTo(8,0);for(var n=0;n<7;n++)t.rotate(Math.PI/4),n%2==0?t.lineTo(3.0557224131732768,0):t.lineTo(8,0);t.closePath()}(e),e.fill();var n=new Image;return n.src=t.toDataURL("image/png"),n}),"enemybullet")}return t.prototype.addRenderer=function(t,e){this.renderers[e]=t},t.prototype.execute=function(){var t=document.createElement("canvas");for(var e in this.renderers)this.images[e]=this.renderers[e].call(this,t)},t}();function i(t,e,n){t.beginPath(),t.moveTo(0,n),t.lineTo(e,0),t.lineTo(0,-n),t.lineTo(-e,0),t.closePath()}e.Prerenderer=n},772:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SoundLoad=void 0;var n=function(){function t(){this.sounds={},this.audioContext="function"==typeof AudioContext?new AudioContext:null,this.audioContext&&(this.audioGain=this.audioContext.createGain(),this.audioGain.gain.value=.05,this.audioComp=this.audioContext.createDynamicsCompressor(),this.audioGain.connect(this.audioComp),this.audioComp.connect(this.audioContext.destination))}return t.prototype.hasAudio=function(){return null!==this.audioContext},t.prototype.loadSound=function(t,e){if(this.hasAudio()){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer";var i=this;n.onload=function(){i.audioContext.decodeAudioData(n.response,(function(t){i.sounds[e]=t}))},n.send()}},t.prototype.playSound=function(t){if(this.hasAudio()&&this.sounds[t]){var e=this.audioContext.createBufferSource();e.buffer=this.sounds[t],e.connect(this.audioGain),e.start(0)}},t}();e.SoundLoad=n},687:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.loadImages=void 0,e.loadImages=function(t,e){for(var n=0,i=0;i<t.length;i++){var o=t[i],r=o.img,a=o.url;r.src=a,r.onload=function(){++n>=t.length&&e()}}}},904:function(t,e,n){var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||i(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),o(n(949),e),o(n(687),e)},949:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.rnd=e.a2d=e.d2a=void 0,e.d2a=function(t){return t/180*Math.PI},e.a2d=function(t){return t/Math.PI*180},e.rnd=function(t,e){return Math.floor(Math.random()*(e-t+1))+t}},315:(t,e,n)=>{n.d(e,{Z:()=>u});var i=n(645),o=n.n(i),r=n(667),a=n.n(r),s=new URL(n(343),n.b),l=o()((function(t){return t[1]})),h=a()(s);l.push([t.id,"* {\n    padding: 0;\n    margin: 0;\n}\n\nhtml,\nbody {\n    width: 100%;\n    height: 100%;\n}\n\n.fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    filter: opacity(0.9);\n    z-index: -1;\n}\n\n.fixed::after {\n    content: '';\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url("+h+");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.canvas-wrapper {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0);\n}\n\n#canvas {\n    position: relative;\n}\n\n#canvas-bg {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n",""]);const u=l},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},468:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});var i=n(379),o=n.n(i),r=n(795),a=n.n(r),s=n(569),l=n.n(s),h=n(565),u=n.n(h),c=n(216),d=n.n(c),f=n(589),p=n.n(f),y=n(315),v={};v.styleTagTransform=p(),v.setAttributes=u(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=d(),o()(y.Z,v);const m=y.Z&&y.Z.locals?y.Z.locals:void 0},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},a=[],s=0;s<t.length;s++){var l=t[s],h=i.base?l[0]+i.base:l[0],u=r[h]||0,c="".concat(h," ").concat(u);r[h]=u+1;var d=n(c),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==d?(e[d].references++,e[d].updater(f)):e.push({identifier:c,updater:o(f,i),references:1}),a.push(c)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var r=i(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var s=n(r[a]);e[s].references--}for(var l=i(t,o),h=0;h<r.length;h++){var u=n(r[h]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=l}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i=n.css,o=n.media,r=n.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},343:(t,e,n)=>{t.exports=n.p+"images/asteroid_bg.jpg"}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.p="./",n.b=document.baseURI||self.location.href,(()=>{n(468);var t=n(527),e=n(370),i=n(23),o=n(904);function r(){var n=document.getElementById("canvas-bg"),r=document.getElementById("canvas");if(n&&n.getContext&&r&&r.getContext){var a=n.getContext("2d"),s=r.getContext("2d");if(a&&s){var l,h,u,c,d=r.width,f=r.height,p={xMin:0,xMax:d,yMin:0,yMax:f,levelRockMaxSpeedAdjust:1,levelRockNumber:1,levelSaucerMax:1,levelSaucerOccurrenceRate:25,levelSaucerSpeed:1,levelSaucerFireDelay:300,levelSaucerFireRate:30,levelSaucerMissileSpeed:1},y=null,v=!1,m=!1,g=0,_=0,x=30,M=0,S=[],E=[],w=[],A=[],T=[],b=[],O=new Image,I=new Image,C=new Image,P=[];P[0]=new Image,P[1]=new Image,P[2]=new Image,P[3]=new Image,document.addEventListener("keydown",(function(t){b[t.keyCode]=!0})),document.addEventListener("keyup",(function(t){b[t.keyCode]=!1})),O.src="./images/bg.jpg",O.onload=function(){l=new e.Background(new e.DrawImage(O,d,f)),R(t.GAME_STATE_TITLE),requestAnimationFrame(at)}}}function R(e){switch(e){case t.GAME_STATE_TITLE:y=L;break;case t.GAME_STATE_INIT:y=j;break;case t.GAME_STATE_NEW_GAME:y=G;break;case t.GAME_STATE_NEW_LEVEL:y=k;break;case t.GAME_STATE_PLAYER_START:y=D;break;case t.GAME_STATE_PLAY_LEVEL:y=B;break;case t.GAME_STATE_PLAYER_DIE:y=F;break;case t.GAME_STATE_GAME_OVER:y=V}}function L(){if(v)b[32]&&(R(t.GAME_STATE_INIT),v=!1);else{U(),s.textBaseline="top",s.fillStyle="#0099FF",s.font="40px sans-serif";var e="Base Asteroids";s.fillText(e,d/2-10*e.length,150),s.fillStyle="#ffffff",s.font="20px sans-serif";var n="Press Space To Play";s.fillText(n,d/2-5*n.length,300),v=!0}}function j(){(0,o.loadImages)([{img:I,url:"./images/player.png"},{img:C,url:"./images/enemyship1.png"},{img:P[0],url:"./images/asteroid1.png"},{img:P[1],url:"./images/asteroid2.png"},{img:P[2],url:"./images/asteroid3.png"},{img:P[3],url:"./images/asteroid4.png"}],(function(){R(t.GAME_STATE_NEW_GAME)})),(u=new i.SoundLoad).loadSound("./sounds/laser.mp3","laser"),u.loadSound("./sounds/enemybomb.mp3","enemyLaser"),u.loadSound("./sounds/bigboom.mp3","bigboom"),u.loadSound("./sounds/explosion1.mp3","asteroidBoom1"),u.loadSound("./sounds/explosion2.mp3","asteroidBoom2"),u.loadSound("./sounds/explosion3.mp3","asteroidBoom3"),u.loadSound("./sounds/explosion4.mp3","asteroidBoom4"),(c=new i.Prerenderer).execute()}function G(){_=0,g=0,x=30,M=0,h=new e.Player(new e.DrawImage(I,64,64)),U(),q(),R(t.GAME_STATE_NEW_LEVEL)}function k(){E=[],w=[],S=[],A=[],T=[],_+=1,p.levelRockNumber=_+3,p.levelRockMaxSpeedAdjust=.25*_,p.levelRockMaxSpeedAdjust>3&&(p.levelRockMaxSpeedAdjust=3),p.levelSaucerMax=1+Math.floor(_/10),p.levelSaucerMax>5&&(p.levelSaucerMax=5),p.levelSaucerOccurrenceRate=10+3*_,p.levelSaucerOccurrenceRate>35&&(p.levelSaucerOccurrenceRate=35),p.levelSaucerSpeed=1+.5*_,p.levelSaucerSpeed>5&&(p.levelSaucerSpeed=5),p.levelSaucerFireDelay=120-10*_,p.levelSaucerFireDelay<20&&(p.levelSaucerFireDelay=20),p.levelSaucerFireRate=20+3*_,p.levelSaucerFireRate<50&&(p.levelSaucerFireRate=50),p.levelSaucerMissileSpeed=1+.2*_,p.levelSaucerMissileSpeed>4&&(p.levelSaucerMissileSpeed=4);for(var n=0;n<p.levelRockNumber;n++){var i=(0,o.rnd)(0,3),r=new e.Rock(new e.DrawImage(P[i],64,64),p);r.setScale(e.ROCK_LARGE),r.x=Math.floor(50*Math.random()),r.y=Math.floor(50*Math.random()),E.push(r)}et(),R(t.GAME_STATE_PLAYER_START)}function D(){U(),h.alpha<1?h.alpha+=.01:(h.alpha=1,R(t.GAME_STATE_PLAY_LEVEL)),Y(),W(),K(),X(),Z(),J(),Q(),$(),q()}function B(){!function(){if(b[38]){var t=(0,o.d2a)(h.rotation),n=Math.cos(t),i=Math.sin(t),r=h.movingX+h.thrustAcceleration*n,a=h.movingY+h.thrustAcceleration*i;Math.sqrt(r*r+r*r)<h.maxVelocity&&(h.movingX=r,h.movingY=a),h.thrust=!0}else h.thrust=!1;var s;b[37]&&(h.rotation-=h.rotationalVelocity,h.rotation<0&&(h.rotation+=360)),b[39]&&(h.rotation+=h.rotationalVelocity,h.rotation>360&&(h.rotation-=360)),b[32]&&h.missileFrameCount>h.missileFrameDelay&&((s=new e.Missile(new e.DrawImage(c.images.bullet,18,22))).rotation=h.rotation,s.x=h.x+h.halfWidth,s.y=h.y+h.halfHeight,s.dx=h.missileSpeed*Math.cos((0,o.d2a)(h.rotation)),s.dy=h.missileSpeed*Math.sin((0,o.d2a)(h.rotation)),s.life=90,s.lifeCtr=0,S.push(s),u.playSound("laser"),h.missileFrameCount=0)}(),Y(),N(),W(),K(),X(),H(),U(),Z(),z(),J(),Q(),$(),tt(),q(),function(){for(var t=function(t){var n=E[t];S=S.filter((function(t){return!n.checkColl(t)||(n.hit=!0,u.playSound("asteroidBoom"+(0,o.rnd)(1,4)),it(n.x+n.halfWidth,n.y+n.halfHeight,10),n.scale<e.ROCK_SMALL&&ot(n.scale+1,n.x,n.y),rt(n.scoreValue),!1)})),n.hit||(w=w.filter((function(t){return!n.checkColl(t)||(n.hit=!0,u.playSound("asteroidBoom"+(0,o.rnd)(1,4)),it(n.x+n.halfWidth,n.y+n.halfHeight,10),u.playSound("asteroidBoom1"),it(t.x+t.halfWidth,t.y+t.halfHeight,10),n.scale<e.ROCK_SMALL&&ot(n.scale+1,n.x,n.y),!1)}))),n.hit||(A=A.filter((function(t){return!n.checkColl(t)||(n.hit=!0,u.playSound("asteroidBoom"+(0,o.rnd)(1,4)),it(n.x+n.halfWidth,n.y+n.halfHeight,10),n.scale<e.ROCK_SMALL&&ot(n.scale+1,n.x,n.y),!1)}))),!n.hit&&n.checkColl(h)&&(n.hit=!0,u.playSound("asteroidBoom"+(0,o.rnd)(1,4)),it(n.x+n.halfWidth,n.y+n.halfHeight,10),n.scale<e.ROCK_SMALL&&ot(n.scale+1,n.x,n.y),rt(n.scoreValue),u.playSound("bigboom"),nt())},n=0;n<E.length;n++)t(n);E=E.filter((function(t){return!t.hit}));var i=function(t){var e=w[t];S=S.filter((function(t){return!e.checkColl(t)||(e.hit=!0,u.playSound("asteroidBoom1"),it(e.x+e.halfWidth,e.y+e.halfHeight,10),rt(e.scoreValue),!1)})),!e.hit&&e.checkColl(h)&&(e.hit=!0,u.playSound("asteroidBoom1"),it(e.x+e.halfWidth,e.y+e.halfHeight,10),rt(e.scoreValue),u.playSound("bigboom"),nt())};for(n=0;n<w.length;n++)i(n);for(w=w.filter((function(t){return!t.hit})),n=0;n<A.length;n++){var r=A[n];if(r.checkColl(h)){r.hit=!0,u.playSound("bigboom"),nt();break}}A=A.filter((function(t){return!t.hit}))}(),Math.floor(g/1e4)>M&&(x+=1,M+=1),0===E.length&&R(t.GAME_STATE_NEW_LEVEL)}function F(){T.length>0||S.length>0?(U(),N(),W(),K(),X(),H(),z(),J(),Q(),$(),tt(),q()):(x-=1)<1?R(t.GAME_STATE_GAME_OVER):(et(),R(t.GAME_STATE_PLAYER_START))}function V(){if(m)b[32]&&(R(t.GAME_STATE_TITLE),m=!1);else{U(),q(),s.fillStyle="#FF9900",s.font="40px sans-serif";var e="Game Over!";s.fillText(e,d/2-10*e.length,150),s.fillStyle="#ffffff",s.font="20px sans-serif";var n="Press Space To Play";s.fillText(n,d/2-5*n.length,300),R(t.GAME_STATE_INIT),m=!0}}function Y(){h.update(p)}function N(){S=S.filter((function(t){return t.update(p)}))}function W(){E.forEach((function(t){t.update(p)}))}function K(){if(w.length<p.levelSaucerMax&&Math.floor(100*Math.random())<=p.levelSaucerOccurrenceRate){var t=new e.Saucer(new e.DrawImage(C,64,64),p);w.push(t)}w=w.filter((function(t){return Math.floor(100*Math.random())<=t.fireRate&&t.fireDelayCount>t.fireDelay&&(function(t){var n=new e.Missile(new e.DrawImage(c.images.enemybullet,24,24));n.x=t.x+t.halfWidth,n.y=t.y+t.halfHeight;var i=h.x-t.x,o=h.y-t.y,r=Math.atan2(o,i);n.dx=t.missileSpeed*Math.cos(r),n.dy=t.missileSpeed*Math.sin(r),n.life=240,n.lifeCtr=0,A.push(n)}(t),u.playSound("enemyLaser"),t.fireDelayCount=0),t.update(p)}))}function X(){A=A.filter((function(t){return t.update(p)}))}function H(){T=T.filter((function(t){return t.update(p)}))}function U(){s.clearRect(0,0,d,f)}function q(){s.fillStyle="#ffffff",s.fillText("得分 "+g,50,20),s.fillText("第 "+_+" 关",d/2-35,20),s.fillText("生命值 X "+x,d-150,20)}function Z(){h.render(s)}function z(){S.forEach((function(t){return t.render(s)}))}function J(){E.forEach((function(t){t.render(s)}))}function Q(){w.forEach((function(t){t.render(s)}))}function $(){A.forEach((function(t){return t.render(s)}))}function tt(){T.forEach((function(t){return t.render(s)}))}function et(){h.rotation=270,h.x=.5*p.xMax,h.y=.5*p.yMax,h.movingX=0,h.movingY=0,h.alpha=0,h.thrust=!1,h.missileFrameCount=h.missileFrameDelay}function nt(){it(h.x+h.halfWidth,h.y+h.halfWidth,50),R(t.GAME_STATE_PLAYER_DIE)}function it(t,n,i){for(var o=0;o<i;o++){var r=new e.Particle;r.x=t,r.y=n,T.push(r)}}function ot(t,n,i){for(var o=0;o<2;o++){var r=void 0;(t===e.ROCK_MEDIUM||t===e.ROCK_SMALL)&&(r=new e.Rock(new e.DrawImage(P[0],64,64),p)),r.setScale(t),r.x=n,r.y=i,E.push(r)}}function rt(t){g+=t}function at(){l&&(l.update(),l.render(a)),y(),requestAnimationFrame(at)}}window.addEventListener("load",(function(){r()}))})()})();