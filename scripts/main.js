function buildProduct(item){    var product, displayName;    displayName = item.name.substr(0, 69) + ' ...';    product = '<a target="_parent" href="http:' + item.detailUrl + '" title="' + item.name + '">\                    <span class="picture">\                        <img src="http:' + item.imageName + '" title="' + item.name + '" alt=" ">\                    </span>\                    <span class="content">\                        <span class="title">' + displayName + '</span>\                        <span class="price">';                        if(item.oldPrice != null){                            product += '<span class="conditions">De: ' + item.oldPrice + '</span>';                        }                            product += '<span class="price">Por: <strong>' + item.price + '</strong></span>\                        </span>\                        <span class="price">\                            <span class="price_conditions"><strong>' + item.productInfo.paymentConditions + '</strong><br />sem juros</span>\                        </span>\                    </span>\                </a>';    return product;}function X(products){    var reference, recommendations;    reference = '<div class="item-base-wrapper">' + buildProduct(products.data.reference.item) + '</div>';    recommendations = '';        for(var i = 0; i < products.data.recommendation.length; i++){        recommendations += '<li>' + buildProduct(products.data.recommendation[i]) + '</li>';    }    document.getElementById('reference').innerHTML = reference;    document.getElementById('recommendations').innerHTML = recommendations;}function animateCarrousel(recommendations, from, to){    recommendations.style.left = from + "px";    if(from > to){                 setTimeout(function(){            animateCarrousel(recommendations, from - 1, to);        }, 0)     } else if(from < to){        setTimeout(function(){            animateCarrousel(recommendations, from + 1, to);        }, 0)     }}document.addEventListener('DOMContentLoaded', function(e){    var script, controlLeft, controlRight, recommendations;    recommendations = document.getElementById('recommendations');    controlLeft = document.getElementById('control-left');    controlRight = document.getElementById('control-right');    if(recommendations.style.left == 0){        controlLeft.className += ' control-left-disable';    }    controlLeft.addEventListener('click', function(e){        if(controlLeft.className.indexOf('control-left-disable') == -1){            animateCarrousel(recommendations, recommendations.offsetLeft, (recommendations.offsetLeft + document.getElementById('body').offsetWidth));            controlRight.className = controlRight.className.replace('control-right-disable', '');            controlLeft.className = 'control control-left control-left-disable';        }        e.preventDefault();    }, false);    controlRight.addEventListener('click', function(e){        if(controlRight.className.indexOf('control-right-disable') == -1){            animateCarrousel(recommendations, recommendations.offsetLeft, (recommendations.offsetLeft - document.getElementById('body').offsetWidth));            controlLeft.className = controlLeft.className.replace('control-left-disable', '');            controlRight.className = 'control control-right control-right-disable';        }        e.preventDefault();    }, false);    script = document.createElement('script');    script.src = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X';    script.async = true;    document.body.appendChild(script);}, false);