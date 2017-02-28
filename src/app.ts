import * as sweetalert from 'sweetalert';

export class App {

  /**
   * Collection of answers thanks to:
   * https://en.wikipedia.org/wiki/Magic_8-Ball#Possible_answers
   */
  private answers = [
    { type: 'positive', answer: 'It is certain' },
    { type: 'positive', answer: 'It is decidedly so' },
    { type: 'positive', answer: 'Without a doubt' },
    { type: 'positive', answer: 'Yes definitely' },
    { type: 'positive', answer: 'You may rely on it' },
    { type: 'positive', answer: 'As I see it, yes' },
    { type: 'positive', answer: 'Most likely' },
    { type: 'positive', answer: 'Outlook good' },
    { type: 'positive', answer: 'Yes' },
    { type: 'positive', answer: 'Signs point to yes' },
    { type: 'unconclusive', answer: 'Reply hazy try again' },
    { type: 'unconclusive', answer: 'Ask again later' },
    { type: 'unconclusive', answer: 'Better not tell you now' },
    { type: 'unconclusive', answer: 'Cannot predict now' },
    { type: 'unconclusive', answer: 'Concentrate and ask again' },
    { type: 'negative', answer: 'Don\'t count on it' },
    { type: 'negative', answer: 'My reply is no' },
    { type: 'negative', answer: 'My sources say no' },
    { type: 'negative', answer: 'Outlook not so good' },
    { type: 'negative', answer: 'Very doubtful' }
  ];

  public ask(): void {
    var random_answer = this.answers[Math.floor(Math.random() * this.answers.length)];

    switch (random_answer.type) {
      case 'positive':
        swal(random_answer.answer, '', 'success');
        break;
        case 'negative':
        swal(random_answer.answer, '', 'error');
        break;
        case 'unconclusive':
        swal(random_answer.answer, '', 'warning');
        break;
    }
  }

}