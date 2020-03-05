export const EXAMPLE_FUNCTIONS = {
  "Simple Loop": {
    function_body: `
      function simple_demo(x){
    s = 0;
    n = 1;
    while (x > 0){
        s = s+n;
        n = n+2;
        x = x-1;
    }
}
      `,
  },
  "Nested Loop": {
    function_body: `
function nested_demo(T){
    m = 0;
    n = 0;
    s = 0;
    x = T;
    while(x!=y){
        x =x- 1;
        n =m+2;
        m = m+1;
        while (m!=0){
            s = s+1;
            m = m-1;
        }
        m = n;
   }
}
     `,

  },
  "Logarithmic Invariant": {
    function_body: `
     function log_demo(A,B){
    x = A;
    y = B;
    z = 1;
    while (y>0) {
        if (odd(y)){
            y = y-1;
            z = x*z;
        }
        else {
            x = x*x;
            y = y/2;
        }
    }
}
     `,

  },
  "Exponential Invariant": {
    function_body: `
function exponent_demo(A){
    x = 1;
    y = A;
    z = 1;
    while (y>0) {
        if (z == 0){
            y = y-1;
            z = x;
        }
        else {
            x = x+1;
            z = z-1;
        }
    }
}
     `,

  }

};