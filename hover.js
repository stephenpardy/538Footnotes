var footnoteLinks = document.getElementsByClassName('footnote-link');
for (var i = 0; i < footnoteLinks.length; i++) {
    linkName = footnoteLinks[i].hash.slice(1);
    footNoteContent = document.getElementById(linkName);
    footNoteSpan = footNoteContent.getElementsByTagName('span')[0];
    footNoteText = footNoteSpan.innerText;

    hoverSpan = document.createElement('span');
    hoverSpan.setAttribute('class', 'tooltiptext');
    hoverSpan.innerText = footNoteText.slice(0, -1);

    footnoteLinks[i].appendChild(hoverSpan);
}