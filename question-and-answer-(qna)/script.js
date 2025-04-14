const buttons = document.querySelectorAll('.btn');
const answers = [
  {
    answer:
      'Yes, we accept all major credit cards including Visa, MasterCard, and American Express.',
  },
  {
    answer:
      'Yes, we securely process all major credit cards through our trusted payment partners.',
  },
  {
    answer:
      'Absolutely! All popular credit cards are welcome when you shop with us.',
  },
];

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const currentSubContainer = btn.closest('.sub-container');
    const isAlreadyOpen =
      currentSubContainer.querySelector('.answer-container');
    document.querySelectorAll('.sub-container').forEach((container) => {
      const openAnswer = container.querySelector('.answer-container');
      const underline = container.querySelector('.underline');
      if (openAnswer) openAnswer.remove();
      if (underline) underline.remove();
      if (!btn.classList.contains('animation')) {
        btn.classList.add('animation');
      } else {
        btn.classList.remove('animation');
      }
    });

    if (!isAlreadyOpen) {
      const underline = document.createElement('div');
      underline.classList.add('underline');
      currentSubContainer.appendChild(underline);

      const answerContainer = document.createElement('div');
      answerContainer.classList.add('answer', 'answer-container');

      const answerPara = document.createElement('p');
      answerPara.textContent = answers[index].answer;

      answerContainer.appendChild(answerPara);
      currentSubContainer.appendChild(answerContainer);
    }
  });
});
