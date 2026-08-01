function log(target: Function) {
  console.log("hallo");
  console.log(target);
}

@log
class User {}
