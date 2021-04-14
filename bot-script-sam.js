var botui = new BotUI('help-bot');

function icon(iconName) {
    return '<i class="botui-icon botui-message-content-icon fa fa-' + iconName + '"></i>'
  }

function shifumi()
{
    botui.action.button({
        delay: 1000,
        action: [
            {
                icon: 'university',
                text: 'About us',
                value: 'about'
            },
            {
                icon: 'navicon',
                text: 'Programmes',
                value: 'program'
            },
            {
                icon: 'users',
                text: 'Admission Procedure',
                value: 'admission'
            },
            {
                icon: 'calendar',
                text: 'Events',
                value: 'event'
            },
            {
                icon: 'clock-o',
                text: 'Timings',
                value: 'time'
            },
            {
                icon: 'phone',
                text: 'Contact',
                value: 'contact'
            },
            {
                icon: 'briefcase',
                text: 'Placements',
                value: 'place'
            },

        ]
    }).then(function (res) {
        var message;

        if (res.value === "about") {
            message = 'The Thakur College of Engineering & Technology was established in academic year 2001-02 with a clear objective of providing quality technical education in tune with international standards and contemporary global requirements. The College is recognized by All India Council for Technical Education & Govt. of Maharashtra and is affiliated to the University of Mumbai. 68th & 78th rank in All India Rating by Outlook survey published in June 2019 & May 2018 respectively.';
        }
        else if (res.value === "program") {
            message = 'Programmes available in TCET are listed below: <br> <br> 1. UnderGraduate Courses in Information Technology, Computer Engineering, Electronics & Telecommunication Engineering, Electronics Engineering, Mechanical Engineering, Civil Engineering. <br> <br> 2. PostGraduate Courses in M.E. Electronics & Telecommunication Engineering, M.E. Computer Engineering, M.E. Information Technology';
        }
        else if (res.value === "admission") {
            message = 'Admissions in Under Graduate (UG) & Post Graduate (PG) programme are carried out in the institute as per the norms of Directorate of Technical Education – Maharashtra State. The rules and regulations prescribed by All India Council for Technical Education, Directorate of Technical Education – Maharashtra State and University of Mumbai are applicable.';
        }
        else if (res.value === "event") {
            message = 'CAW at TCET is organized as a yearly event from 2010 where the first edition “International Conference and Workshop on Emerging Technologies” (ICWET) was organized and continued till 2012. The Second edition Multicon-W began in 2013 and is a platform for multiple conferences and workshops. Till date under the banner of ICWET and Multicon-W more than 50 conferences, over 250 tracks and 4000 papers have been presented and published in the Proceedings with ISBN numbers.';
        }
        else if (res.value === "time") {
            message = 'The reporting time for college is 9 A.M. Instructional Timing is from 9.15 A.M. to 5.15 P.M. from Monday to Friday. Academic load compensation & practice Session may be arranged on Saturday / holidays.';
        }
        else if (res.value === "contact") {
            message = 'Thakur College Of Engineering And Technology. <br><br> A-Block, Thakur Educational Campus, Shyamnarayan Thakur Marg, Thakur Village, Kandivali(E). Mumbai - 400101. <br><br> Tel: 022 - 28461891 / 022 - 67308000, 67308106 / 07 <br><br> Fax: 022 - 28461890 <br><br> E-Mail:  tcet@thakureducation.org <br><br> Websites: www.tcetmumbai.in, www.thakureducation.org';
        }
        else if (res.value === "place") {
            message = 'Thakur College Of Engineering And Technology. <br><br>  TCET has an enviable record in placement of students.<br> The institute has been accredited by major companies like Infosys, Tata Consultancy Services, Accenture, iGate and Tech-Mahindra etc.At present more than 45 companies are visiting for campus recruitment every year and almost all eligible students are placed through campus.Special efforts are also taken to place the noneligible students.';
        }

        return botui.message.add({
            type: 'html',
            delay: 1000,
            loading: true,
            content: message
        }).then(function ( ) {
            return botui.action.button({
                action:
                    [
                        {
                            icon: 'hand-peace-o',
                            text: 'Cool',
                            value: 'cool'
                        },
                        {
                            
                            text: 'I Need More Help!!',
                            value: 'help'
                        }
                    ]
            })
        })
        }).then(function (res) {
            if (res.value === 'help') {
                shifumi()
            }
            else {
                return botui.message.add({
                    delay: 1000,
                    loading: true,
                    content: 'I know! Thanks.'
                })

            }
        })
};

    function hello() {
        botui.message.bot({
            delay: 500,
            content: "Hi! Welcome to TCET Chat Assistant"
        }).then(function () {
            botui.message.bot({
                delay: 500,
                content: "How can I help?"
            }).then(shifumi)

        })
    }
hello()