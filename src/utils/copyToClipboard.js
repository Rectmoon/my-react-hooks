const copyToClipboard = (text) => {
  const el = document.createElement("textarea");
  const iOS = window.navigator.userAgent.match(/ipad|iphone/i);
  const yPosition = window.pageYOffset || document.documentElement.scrollTop;

  el.contentEditable = true; // for iOS >= 10
  el.readOnly = false; // for iOS >= 10
  el.value = text;

  Object.assign(el.style, {
    position: "absolute",
    top: `${yPosition}px`,
    margin: 0,
    padding: 0,
    border: 0
  });

  document.body.appendChild(el);

  if (iOS) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    el.setSelectionRange(0, 999999);
  } else {
    el.select();
  }

  let successful = false;
  try {
    successful = document.execCommand("copy");
  } catch (error) {
    try {
      window.clipboardData.setData("text", text);
      successful = true;
    } catch (err) {
      console.error("unable to copy using clipboardData: ", err);
    }
  }
  document.body.removeChild(el);

  return successful;
};

export default copyToClipboard;
