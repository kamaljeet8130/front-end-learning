const organizationDetails = [
  {
    category: 'History',
    content:
      'Founded in 2010, our organization started as a small team of passionate individuals determined to solve real-world problems using technology. Over the years, we’ve grown into a global enterprise, serving clients in over 30 countries and impacting millions of lives through innovative solutions and user-centric products.',
  },
  {
    category: 'Vision',
    content:
      'Our vision is to create a world where technology empowers every individual and organization to achieve more. We aim to lead the digital transformation wave by delivering sustainable, scalable, and secure tech solutions that enhance productivity, connectivity, and quality of life.',
  },
  {
    category: 'Goal',
    content:
      'Our primary goal is to continuously innovate while maintaining a user-first approach. We strive to be industry leaders in delivering reliable and cutting-edge software and services, fostering a culture of learning, inclusivity, and continuous improvement within our team and community.',
  },
];
const tabContent = document.querySelector('#tab-content');
const tabBtn = Array.from(document.querySelectorAll('.tab-btn'));
const savedCategory =
  localStorage.getItem('lastClickedCategory') ||
  tabBtn[0].getAttribute('data-category');

const categoryData = organizationDetails.find(
  (item) => item.category === savedCategory
);

if (categoryData) {
  tabContent.textContent = categoryData.content;
  tabBtn.forEach((tab) => {
    tab.classList.toggle(
      'active-tab',
      tab.getAttribute('data-category') === savedCategory
    );
  });
}

tabBtn.forEach((tab) => {
  tab.addEventListener('click', () => {
    const clickedCategory = tab.getAttribute('data-category');
    localStorage.setItem('lastClickedCategory', clickedCategory);
    tabBtn.forEach((t) => t.classList.remove('active-tab'));
    tab.classList.add('active-tab');
    const categoryData = organizationDetails.find(
      (item) => item.category === clickedCategory
    );
    if (categoryData) {
      tabContent.textContent = categoryData.content;
    } else {
      tabContent.textContent = 'No matching content found.';
    }
  });
});
