let arr = [["a", ["b"]], { b: "bear", c: "cat" }, "cab"];

arr[0]; // => [ 'a', [ 'b' ] ]
arr[0][1][0]; // => 'b'
arr[1]; // => { b: 'bear', c: 'cat' }
arr[1]["b"]; // => 'bear'
arr[1].b[1]; // => 'e'
arr[2][1]; // => 'a'
