!function () {
  var view = document.querySelector('nav.menu')
  var controller ={
    view: null,
    initAnimation: function(){
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    scrollToElement: function(element){        
          let top = element.offsetTop               
          let targetTop = top - 80
          let currentTop = window.scrollY
          let s = targetTop - currentTop
          var coords = { y: currentTop };
          var t = Math.abs((s / 100) * 200)
          if (t > 700) {
            t = 700
          }
          var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
              window.scrollTo(0, coords.y)
            })  
            .start();
    },
    bindEvents: function(){
      let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = (x) => {
          x.preventDefault()  //调用函数传入的参数的方法阻止默认动作（阻止点击跳转到锚点）
          let a = x.currentTarget //获取用户点击的a标签
          let href = a.getAttribute('href')   //获取a标签的href#siteAbout
          let element = document.querySelector(href) 
          this.scrollToElement(element)
        }
      }
    },
    init: function(view){
      this.view = view
      this.initAnimation()
      this.bindEvents()  
    },
  }
  controller.init(view)
}.call()
