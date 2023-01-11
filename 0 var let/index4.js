function varAndLetScoping() {
    var x = 1;
  
    if (true) {
      let x = 2;
      console.log(x); // print 2
    }
  
    console.log(x); // print 1
  }

varAndLetScoping();