window.menu = pc.app.getEntityFromIndex("f476d893-1c86-419b-a3f6-7062a0928b7c");

//menu.children[0].element.color = {r: 1, g: 1, b: 1, a: 1}
menu.children[0].element.margin = { x: -240, y: -150, z: -240, w: -150 };

window.findmatch = pc.app.getEntityFromIndex(
  "ed3526e2-16ff-4fa9-a9a5-2dd5908e842e"
);
findmatch.element.color = {
  r: 1,
  g: 0,
  b: 0,
  a: 1,
};
findmatch.button.data.hoverTint = { r: 82, g: 0, b: 96, a: 1 };

window.matchfield = pc.app.getEntityFromIndex(
  "c837c197-5cc0-419f-b207-f5b043a562b0"
);
matchfield.children[0].element.opacity = 0.8;
matchfield.children[0].element.color = { r: 0.34117, g: 0, b: 0.58039, a: 0.5 };
matchfield.children[1].children[0].element.color = {
  r: 0.34117,
  g: 0,
  b: 0.58039,
  a: 0.5,
};
matchfield.children[1].children[0].element.opacity = 0.8;
matchfield.children[1].children[0].children[1].children[0].element.color = {
  r: 0.34117,
  g: 0,
  b: 0.58039,
  a: 0.5,
};
matchfield.children[1].children[0].children[1].element.color = {
  r: 0.20784,
  g: 0,
  b: 0.43921,
  a: 1,
};

matchfield.children[1].children[0].children[4].element.color = {
  r: 0.20784,
  g: 0,
  b: 0.20784,
  a: 1,
};

matchfield.children[1].children[0].children[3].element.color = {
  r: 0.20784,
  g: 0,
  b: 0.83137,
  a: 1,
};

matchfield.children[1].children[4].element.color = {
  r: 0.50196,
  g: 0,
  b: 1,
  a: 1,
};
matchfield.children[1].children[5].element.color = {
  r: 0.50196,
  g: 0,
  b: 1,
  a: 1,
};
matchfield.children[1].children[6].element.color = {
  r: 0.34117,
  g: 0,
  b: 0.58039,
  a: 0.5,
};
matchfield.children[1].children[7].element.text = "Anon mod v1";
matchfield.children[1].children[7].element.color = {
  r: 1,
  g: 1,
  b: 1,
  a: 1,
};
matchfield.children[1].children[6].element.color = {
  r: 0.50196,
  g: 0,
  b: 1,
  a: 1,
};
matchfield.children[1].children[3].element.opacity = 0.9;
matchfield.children[1].children[3].element.color = {
  r: 0.48888,
  g: 1,
  b: 0.85882,
  a: 0.5,
};
matchfield.children[2].children[9].setLocalPosition(124.5, 214.786, 0);
matchfield.parent.children[0].children[0].element.color = {
  r: 0.34117,
  g: 0,
  b: 0.58039,
  a: 0.5,
};
matchfield.parent.children[0].children[0].element.opacity = 0.5;
matchfield.parent.children[0].children[1].element.color = {
  r: 0.34117,
  g: 0,
  b: 0.58039,
  a: 0.5,
};
matchfield.parent.children[0].children[1].element.opacity = 0.5;
matchfield.parent.children[0].children[1].children[2].element.color = {
  r: 0,
  g: 0,
  b: 0,
  a: 1,
};
matchfield.parent.children[0].children[1].children[2].children[0].element.color = {
  r: 0.34117,
  g: 0,
  b: 0.58039,
  a: 0.5,
};
matchfield.parent.parent.children[1].setLocalPosition(-10, 205, 0);
matchfield.parent.parent.children[3].element.color = {
  r: 0.34117,
  g: 0,
  b: 0.58039,
  a: 0.5,
};
matchfield.parent.parent.children[3].button.data.hoverTint = {
  r: 0.34117,
  g: 0,
  b: 0.88039,
  a: 0.5,
};
matchfield.parent.parent.children[4].element.color = {
  r: 0.34117,
  g: 0,
  b: 0.58039,
  a: 0.5,
};
matchfield.parent.parent.children[4].button.data.hoverTint = {
  r: 0.34117,
  g: 0,
  b: 0.88039,
  a: 0.5,
}; 
matchfield.parent.parent.children[4].element.opacity = 0.4;
matchfield.parent.parent.parent.children[2].setLocalPosition(-10, -30, 0);
matchfield.parent.parent.parent.children[4].setLocalPosition(0, -100, 0);
matchfield.parent.parent.parent.children[5].children[0].element.color = {
  r: 0.34117,
  g: 0,
  b: 0.58039,
  a: 0.5,
};
matchfield.parent.parent.parent.children[5].children[0].element.opacity = 0.5;
matchfield.parent.parent.parent.children[5].children[0].setLocalPosition(0, 100, 0);
matchfield.parent.parent.parent.children[6].enabled = false;
matchfield.parent.parent.parent.parent.children[9].setLocalPosition(-2.3, 1, 0);

window.menuUIDFind = pc.app.getEntityFromIndex(
  "06c5ec69-e469-4a9c-8d86-1f10ab8e0412"
);