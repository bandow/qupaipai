(function flexible (window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }

  function setRemUnit () {
    var designWidth=750,   //设计宽度
        rem = docEl.clientWidth,
        d=designWidth/100;

    if(rem>designWidth){
      rem =designWidth;
    }   
    if (!rem) return;
    docEl.style.fontSize = rem/d+"px";
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))


document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法.
function subSomething() { 
 if(document.readyState == "complete"){ //当页面加载状态为完全结束时进入 
    $(".wrapper").css("opacity",1);
    console.log(1);
  }else{
    console.log(0);
  }
}