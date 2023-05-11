class Complete {
  constructor(complete) {
    this.complete = complete;
  }

  check() {
    if (this.complete === true) {
      this.complete = false;
    } else {
      this.complete = true;
    }
  }
}

export default Complete;
