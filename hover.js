var footnoteLinks = document.getElementsByClassName('espn-footnote-link');
for (var i = 0; i < footnoteLinks.length; i++) {
    footNoteSpan = footnoteLinks[i].nextSibling
    footNoteText = footNoteSpan.childNodes[0].innerHTML;

    footnoteLinks[i].parentNode.removeChild(footNoteSpan);

    hoverSpan = document.createElement('span');
    hoverSpan.setAttribute('class', 'tooltiptext');
    hoverSpan.innerHTML = footNoteText; //.slice(0, -1);

    footnoteLinks[i].appendChild(hoverSpan);
}