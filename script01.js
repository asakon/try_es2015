// var の場合
// for内部でのsetTimeout　等が予想に反する動作になる。
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
    // 3が３回出力される。
    // ループのためにiが巻き上げられてしまうため・・・
  });
}

// let の場合 
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  });
}