
function applyUglification() {
	var items = document.getElementsByTagName("*");
	for (var i = items.length; i--;) {
		var node = items[i];
		if (node) {
			uglify(node);
		}
	}
}

function uglify(element) {
	changeFontSize(element);
	changeFontFamily(element);
	changePadding(element);
	changeMargin(element);
	changeBackgroundColor(element);
	changeColor(element);
}

function applyChangesPx(ratio, propertyValueName, styleName, element) {
	var style = window.getComputedStyle(element);
    if (style) {
    	if (style.getPropertyValue(propertyValueName)) {
	    	var current = parseInt(style.getPropertyValue(propertyValueName));
	    	var newVal = Math.floor((Math.random() * current) + (current / ratio));
    		element.style[styleName] = newVal.toString() + "px";
    	}
	}
}

function changeFontSize(element) {
	applyChangesPx(2, "font-size", "fontSize", element);
}

function changeFontFamily(element) {
	var fontFamilies = ['courier', 'times', 'arial', 'courier new', 'verdana', 'georgia', 'palatino'];

	var style = window.getComputedStyle(element);
    if (style && style.getPropertyValue("font-family")) {
    	element.style.fontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    }
}

function changePadding(element) {
	applyChangesPx(1, "padding-left", "paddingLeft", element);
	applyChangesPx(1, "padding-right", "paddingRight", element);
	applyChangesPx(1, "padding-top", "paddingTop", element);
	applyChangesPx(1, "padding-bottom", "paddingBottom", element);
}

function changeMargin(element) {
	applyChangesPx(1, "margin-left", "marginLeft", element);
	applyChangesPx(1, "margin-right", "marginRight", element);
	applyChangesPx(1, "margin-top", "marginTop", element);
	applyChangesPx(1, "margin-bottom", "marginBottom", element);
}

function randomPart() {
	return Math.floor(Math.random() * 256).toString();
}

function changeBackgroundColor(element) {
	var style = window.getComputedStyle(element);
    if (style && style.getPropertyValue("background-color")) {
    	var newColor = "rgb(" + randomPart() + ", " + randomPart() + ", " + randomPart() + ")";
    	element.style.backgroundColor = newColor;
    }
}

function changeColor(element) {
	var style = window.getComputedStyle(element);
    if (style && style.getPropertyValue("color")) {
    	var newColor = "rgb(" + randomPart() + ", " + randomPart() + ", " + randomPart() + ")";
    	element.style.color = newColor;
    }
}


applyUglification();