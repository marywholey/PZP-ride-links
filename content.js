const peloBaseLink = "https://members.onepeloton.com/classes/cycling?modal=classDetailsModal&classId="

const observer = new MutationObserver(function(mutations) {  
  for (const mutation of mutations) {
    if (mutation.addedNodes.length > 0) {
      const rides = mutation.addedNodes[0].getElementsByClassName("b-contain");
      for (const ride of rides) {
        const peloId = ride.firstElementChild.value;
        if (peloId) {
          const peloLink = peloBaseLink + peloId;
          const a = document.createElement('a');
          a.appendChild(document.createTextNode("(link)"));
          a.href = peloLink;
          a.target = "_blank";
          ride.nextElementSibling.insertAdjacentElement('beforebegin', a)
        }
      }
    } 
  }
});

const challenges = document.getElementsByClassName("challenge-box");

for (const challenge of challenges) {
    observer.observe(challenge, {childList: true});
}

