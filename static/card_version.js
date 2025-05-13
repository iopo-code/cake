globalThis.changeVersion = (card_version) => {
  // 直接设置 card_version 并跳转到 "/card"
  localStorage.setItem('card_version', card_version);
  location.href = "/card";
}
