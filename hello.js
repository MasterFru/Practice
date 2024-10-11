console.log("Hello Git!");
console.log("Hello GitHub!");

// I AM IN THE PROCESS  OF IMPLEMENTING AN IMPORTANT FEATURE// I AM IN THE PROCESS OF IMPLEMENTING AN IMPORTANT FEATURE
let importantFeature = {
  isImplemented: false,
  implementationProgress: 50,
  implement: function() {
    this.isImplemented = true;
    console.log("Important feature implemented.");
  }
};

if (!importantFeature.isImplemented) {
  console.log("Implementing important feature...");
  importantFeature.implement();
} else {
  console.log("Important feature already implemented.");
}