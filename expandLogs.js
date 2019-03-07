let expandButtons;
do {
  expandButtons = Array.from(document.querySelectorAll(".jsexpands"));
  expandButtons.forEach(element => element.click());
} while (expandButtons.length > 0);
