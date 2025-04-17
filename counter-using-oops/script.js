function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `please Check "${selection}" selector, no such element exists`
    );
  }
}
