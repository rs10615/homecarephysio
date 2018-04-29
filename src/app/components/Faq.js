import React from 'react';

class Faq extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            FaqItems: [{
                question: 'Why should I take home physiotherapy services?',
                answer: 'If you are unable to come in physiotherapy clinics and some diseases aggravated by travelling (low back pain, neck pain etc.).  365 Physio Home Care provides the services at your suitable place and your preferred time.  '
            },
            {
                question: 'Do I need a referral from a Doctor?',
                answer: 'You do not require a doctor’s referral to see a physiotherapist. They do not need directions from any other medical professional to practice. However, when they are working as part of multidisciplinary team for the patient. Exchange of information between two professional is always encouraged. Physiotherapists are independent health care professionals who are registered in Delhi Council for Physiotherapy and Occupational Therapy (Ministry of Health Govt. of India)'
            },
            {
                question: 'Is taking pain-killers harmful?',
                answer: ' If someone is taking pain killers without understanding the cause of pain, it is like hitting the target with closed eyes. Pain killers will reduce your pain for a while but it is not treating the source of pain.'
            },
            {
                question: 'What types of exercises are good for me?',
                answer: 'Exercises prescription is based on goals and present status of the individual. Visit us once we will prepare an individualized program for you.'
            }],
            expanded: false
        };
        this.state.FaqItems = this.resetFaq(this.state.FaqItems);

    }
    resetFaq(items) {
        return items.map((item, index) => {
            item.expanded = false;
            return item;
        })
    }
    onQuestionClick(currentFaq) {
        let items = Object.assign([], this.state.FaqItems);
        let expanded = !currentFaq.expanded;
        items = this.resetFaq(items);
        currentFaq.expanded = expanded;
        this.setState({ FaqItems: items });
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <center>
                            <h3>FAQ</h3>
                            <p><i><b>Click here question to find out your answer</b></i></p>
                        </center>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="accordion">
                        <div className="accordion-section">
                            {
                                this.state.FaqItems.map(function (faq, index) {
                                    return <div key={index}>
                                        <h6 className={faq.expanded ? "accordion-title active" : "accordion-title"} onClick={this.onQuestionClick.bind(this, faq)}><b>Question <i className="fa fa-angle-double-right" aria-hidden="true"></i></b>
                                            &nbsp;{faq.question}
                                        </h6>
                                        {
                                            faq.expanded ?
                                                <div className="accordion-content defualt-hidden">
                                                    <p><b>Answer: <i className="fa fa-angle-double-right" aria-hidden="true"></i></b>:
                                                        &nbsp;{faq.answer}
                                                    </p>
                                                </div> : null
                                        }

                                    </div>
                                }, this)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Faq;