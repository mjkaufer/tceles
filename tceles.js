function tceles(domElement){
	//given a DOM element, return array of JS methods to select the DOM element
	//for use in web scraping

	//different ways to get a certain dom element, given the element
		//simply take parents of element and remember them
			//take parents until you find an element with an id or the body tag, then use that
		//find a 'smart' way to search by classname
			//harder; we'll do the above algorithm first
	var currentElement = domElement
	var childIndices = []

	while(!areWeThereYet(currentElement)){

		childIndices.unshift(findDomElementIndex(currentElement))

		currentElement = currentElement.parentNode

	}

	var result = ""

	if(currentElement.id != "")
		result += "document.getElementById('" + currentElement.id + "')"
	else
		result += "document.body"

	for(var i = 0; i < childIndices.length; i++)
		result += ".childNodes[" + childIndices[i] + "]"

	return result

}

function areWeThereYet(domElement){
	//returns boolean whether or not we can stop traversing up the tree
	return domElement.localName == "body" || domElement.id != ""
}

function findDomElementIndex(domElement){
	var el = domElement
	var elementIndex = 0
	while(el.previousSibling){
		el = el.previousSibling
		elementIndex++
	}

	return elementIndex
}