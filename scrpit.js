const req = new XMLHttpRequest();
req.open("get", "./resume.json");
req.send();
req.onload = function () {
  console.log(this.response);
};
