import * as _ from 'lodash-es';

export class McqOptions {
  constructor(public body: string) {
  }
}
export interface McqData {
  question: string;
  options: Array<McqOptions>;
  answer?: string;
  learningOutcome?: string;
  complexityLevel?: string;
  maxScore?: number;
}
export interface McqConfig {
  templateId?: string;
  numberOfOptions?: number;
  maximumOptions?:number;
}

export class McqForm {
  public question: string;
  public options: Array<McqOptions>;
  public templateId: string;
  public answer: string;
  public learningOutcome;
  public complexityLevel;
  public maxScore;
  public numberOfOptions;
  public maximumOptions;
  constructor({question, options, answer, learningOutcome, complexityLevel, maxScore}: McqData, {templateId, numberOfOptions, maximumOptions}: McqConfig) {
    this.question = question;
    this.options = options || [];
    this.templateId = templateId;
    this.answer = answer;
    this.learningOutcome = learningOutcome;
    this.complexityLevel = complexityLevel;
    this.maxScore = maxScore;
    this.numberOfOptions = numberOfOptions || 2;
    this.maximumOptions = maximumOptions || 4
    if (!this.options || !this.options.length) {
      _.times(this.numberOfOptions, index => this.options.push(new McqOptions('')));
    }
  }
  addOptions() {
    this.options.push(new McqOptions(''));
  }
  deleteOption(position) {
    this.options.splice(position, 1);
  }

}

