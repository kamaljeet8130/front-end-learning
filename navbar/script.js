const sections = document.querySelector('.sections');
const btn = document.querySelector('.btn');

let isSections = true;
function toggleNavbar() {
  if (isSections) {
    sections.classList.remove('hidden');
    console.log(`inside if : ${isSections}`);
    isSections = false;
  } else {
    sections.classList.add('hidden');
    console.log(`inside else : ${isSections}`);
    isSections = true;
  }
}
btn.addEventListener('click', toggleNavbar);
