export default function SelectAll(node: HTMLElement) {
  node.addEventListener('click', (e) => {
    if (e.target instanceof HTMLInputElement) {
      e.target.selectionStart = 0;
      e.target.selectionEnd = e.target.value.length;
    }
  });
}
