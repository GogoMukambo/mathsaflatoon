(function () {
  var COURSES = {
    "45": "index.html",
    "67": "index.html#67",
    "8": "index.html#8",
    "beginner": "index.html#beginner",
    "foundation": "index.html#foundation",
    "advanced": "index.html#advanced"
  };

  function ready() {
    try {
      var session = JSON.parse(localStorage.getItem("scienceStudySession") || "null");
      if (!session || !session.email) return false;
      var users = JSON.parse(localStorage.getItem("scienceStudyUsers") || "[]");
      var user = users.find(function (item) { return item.email === session.email; });
      if (!user || !user.firstName || !user.surname || !user.dob || !user.gender) return false;
      return Array.isArray(user.children) && user.children.length > 0;
    } catch (err) {
      return false;
    }
  }

  function destination(bandOrPath) {
    if (COURSES[bandOrPath]) return COURSES[bandOrPath];
    var allowed = Object.keys(COURSES).map(function (band) { return COURSES[band]; });
    return allowed.indexOf(bandOrPath) >= 0 ? bandOrPath : "";
  }

  function openCourse(bandOrPath) {
    var dest = destination(bandOrPath);
    if (!dest) return;
    window.location.href = dest;
  }

  window.MentalCourse = {
    ready: ready,
    openCourse: openCourse,
    destination: destination
  };
})();
