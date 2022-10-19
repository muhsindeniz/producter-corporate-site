import classNames from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react'
import style from "../TabBar/TabBar.module.css"

const TabBar = () => {
    const [current, setCurrent] = useState(0);
    const handleOnClick = index => {
        setCurrent(index);
    }
    let menuTabbar = ["Privacy Policy", "Terms of Use", "Subscription Agreement", "GDPR", "Cookies Policy"]
    return (
        <div className={style.main}>
            <div className={style.navbar}>
                {menuTabbar.map((name, index) => <div key={index} className={classNames(style.navbarItem, index === current ? style.active : "")} onClick={() => handleOnClick(index)}>{name}</div>)}
            </div>
            <div>
                <div className={classNames(style.container, current === 0 ? style.activeTabContainer : "")}>


                    Effective as of July 1, 2021, Producter, Inc., (“Producter”) and its subsidiaries (collectively, the “Producter Group” or “we” or “us” or “our”) have updated our<br /><br />   Privacy Policy (“Policy”). <br /><br />

                    For a prior version of our Privacy Policy, click **[here](<Link href='http://producter.co/privacy-policy' passHref>
                        <a target="_blank" className={style.links} alt="instatus">http://producter.co/privacy-policy</a></Link>)**.<br /><br />

                    **1. Introduction** <br /><br />

                    This Policy details our commitment to protecting the privacy of individuals who visit our Websites (as herein defined) (“Website Visitors”), who are authorized to use our Services through a Subscriber’s Account (“Users”), or who attend or register to attend events which we organize or co-organize (“Attendees”). For the purposes of this Policy, the term, “Websites”, shall refer collectively to **[www.producter.co](http://producter.co)**, **[be.producter.co/portal](http://be.producter.co/portal)** as well as the other websites that the Producter Group operates and that link to this Policy, the term “Services” shall refer to our on-demand product excellence system, and tools and services made available from the Websites. The term “Subscriber” shall refer to an individual or an entity that has agreed to a Service Agreement for use of our Services, including an individual representing the Subscribing company , the term “Account” shall mean all Producter accounts or instances created by or on behalf of Subscriber within the Service.<br></br> <br></br>

                    **2. Scope Of This Policy**<br /><br />

                    In this Policy, personal information means information relating to an identified or identifiable natural person. An identifiable person is one who can be identified, directly or indirectly, in particular by reference to an identification number or to one or more factors specific to his/her physical, physiological, mental, economic, cultural or social identity.<br /><br />

                    Personal information does not include “Usage Data” which we define as encoded or pseudonymized information or aggregated data we collect about a group or category of services, features or users. Usage Data helps us understand trends in usage of the Service so that we can better consider new features or otherwise tailor the Service. In addition to collecting and using Usage Data ourselves, we may share Usage Data with third parties, including our customers, partners and service providers, for various purposes, including to help us better understand our customers’ needs and improve the Service as well as for advertising and marketing purposes. We do not share Usage Data with third parties in a way that would enable them to identify you personally.<br /><br />

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices.<br /><br />

                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.

                    We may transfer personal information to companies that help us provide our Services to Subscribers. Our processing of personal data under the direction of our Subscribers and transfers to subsequent third parties for these purposes are governed by the Service Agreements with our Subscribers, including the data processing agreement.<br /><br />

                    **3. Information That You Provide To Us**<br /><br />

                    Account and Registration Information:

                    If you are Subscriber or User, we ask for and collect personal information about you and your Users such as name, address, phone number, email address, instant messaging ID, and credit card information of the Subscriber, as well as certain related information like Subscriber company name and website name email address and name or alias from each User. If you sign-up for a free trial Account, you are not required to enter your credit card information unless and until you decide to continue with a paid subscription to our Services. A third-party intermediary is used to manage credit card processing.

                    We refer to any information described above as “Account Information” for the purposes of this Policy. By voluntarily providing us with Account Information, you represent that you are the owner of such personal data or are otherwise authorized to provide it to us, specifically, if you as a Subscriber provide us Account Information related to the User, you represent that the User has not objected to such processing.

                    Submissions by the Website Visitor:

                    We ask for and collect personal information from you when you submit web forms on our Websites or as you use interactive features of the Websites, including, participation in surveys, contests, promotions, sweepstakes, providing user feedback, requesting customer support, or communicating with us.

                    Attendee Information:<br /><br />

                    We ask for and collect personal information such as your name, address, phone number and email address when you register for or attend an event as an Attendee.

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices. <br /><br />

                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.<br /><br />

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.<br /><br />

                    We may transfer personal information to companies that help us provide our Services to Subscribers. Our processing of personal data under the direction of our Subscribers and transfers to subsequent third parties for these purposes are governed by the Service Agreements with our Subscribers, including the data processing agreement. <br /><br />
                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices.
                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.<br /><br />

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices. Our Websites may contain links to other websites and the information practices and the content Our Websites may contain links to other websites and the information practices and the content


                </div>

                <div className={classNames(style.container, current === 1 ? style.activeTabContainer : "")}>
                    Effective as of July 1, 2021, Producter, Inc., (“Producter”) and its subsidiaries (collectively, the “Producter Group” or “we” or “us” or “our”) have updated our<br /><br />   Privacy Policy (“Policy”). <br /><br />

                    For a prior version of our Privacy Policy, click **[here](http://producter.co/privacy-policy)**.<br /><br />

                    **1. Introduction** <br /><br />

                    This Policy details our commitment to protecting the privacy of individuals who visit our Websites (as herein defined) (“Website Visitors”), who are authorized to use our Services through a Subscriber’s Account (“Users”), or who attend or register to attend events which we organize or co-organize (“Attendees”). For the purposes of this Policy, the term, “Websites”, shall refer collectively to **[www.producter.co](http://producter.co)**, **[be.producter.co/portal](http://be.producter.co/portal)** as well as the other websites that the Producter Group operates and that link to this Policy, the term “Services” shall refer to our on-demand product excellence system, and tools and services made available from the Websites. The term “Subscriber” shall refer to an individual or an entity that has agreed to a Service Agreement for use of our Services, including an individual representing the Subscribing company , the term “Account” shall mean all Producter accounts or instances created by or on behalf of Subscriber within the Service.<br></br> <br></br>

                    **2. Scope Of This Policy**<br /><br />

                    In this Policy, personal information means information relating to an identified or identifiable natural person. An identifiable person is one who can be identified, directly or indirectly, in particular by reference to an identification number or to one or more factors specific to his/her physical, physiological, mental, economic, cultural or social identity.<br /><br />

                    Personal information does not include “Usage Data” which we define as encoded or pseudonymized information or aggregated data we collect about a group or category of services, features or users. Usage Data helps us understand trends in usage of the Service so that we can better consider new features or otherwise tailor the Service. In addition to collecting and using Usage Data ourselves, we may share Usage Data with third parties, including our customers, partners and service providers, for various purposes, including to help us better understand our customers’ needs and improve the Service as well as for advertising and marketing purposes. We do not share Usage Data with third parties in a way that would enable them to identify you personally.<br /><br />

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices.<br /><br />

                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.

                    We may transfer personal information to companies that help us provide our Services to Subscribers. Our processing of personal data under the direction of our Subscribers and transfers to subsequent third parties for these purposes are governed by the Service Agreements with our Subscribers, including the data processing agreement.<br /><br />

                    **3. Information That You Provide To Us**<br /><br />

                    Account and Registration Information:

                    If you are Subscriber or User, we ask for and collect personal information about you and your Users such as name, address, phone number, email address, instant messaging ID, and credit card information of the Subscriber, as well as certain related information like Subscriber company name and website name email address and name or alias from each User. If you sign-up for a free trial Account, you are not required to enter your credit card information unless and until you decide to continue with a paid subscription to our Services. A third-party intermediary is used to manage credit card processing.

                    We refer to any information described above as “Account Information” for the purposes of this Policy. By voluntarily providing us with Account Information, you represent that you are the owner of such personal data or are otherwise authorized to provide it to us, specifically, if you as a Subscriber provide us Account Information related to the User, you represent that the User has not objected to such processing.

                    Submissions by the Website Visitor:

                    We ask for and collect personal information from you when you submit web forms on our Websites or as you use interactive features of the Websites, including, participation in surveys, contests, promotions, sweepstakes, providing user feedback, requesting customer support, or communicating with us.

                    Attendee Information:<br /><br />

                    We ask for and collect personal information such as your name, address, phone number and email address when you register for or attend an event as an Attendee.

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices. <br /><br />

                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.<br /><br />

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.<br /><br />

                    We may transfer personal information to companies that help us provide our Services to Subscribers. Our processing of personal data under the direction of our Subscribers and transfers to subsequent third parties for these purposes are governed by the Service Agreements with our Subscribers, including the data processing agreement. <br /><br />
                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices.
                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.<br /><br />

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices. Our Websites may contain links to other websites and the information practices and the content Our Websites may contain links to other websites and the information practices and the content


                </div>

                <div className={classNames(style.container, current === 2 ? style.activeTabContainer : "")}>
                    Effective as of July 1, 2021, Producter, Inc., (“Producter”) and its subsidiaries (collectively, the “Producter Group” or “we” or “us” or “our”) have updated our<br /><br />   Privacy Policy (“Policy”). <br /><br />

                    For a prior version of our Privacy Policy, click **[here](http://producter.co/privacy-policy)**.<br /><br />

                    **1. Introduction** <br /><br />

                    This Policy details our commitment to protecting the privacy of individuals who visit our Websites (as herein defined) (“Website Visitors”), who are authorized to use our Services through a Subscriber’s Account (“Users”), or who attend or register to attend events which we organize or co-organize (“Attendees”). For the purposes of this Policy, the term, “Websites”, shall refer collectively to **[www.producter.co](http://producter.co)**, **[be.producter.co/portal](http://be.producter.co/portal)** as well as the other websites that the Producter Group operates and that link to this Policy, the term “Services” shall refer to our on-demand product excellence system, and tools and services made available from the Websites. The term “Subscriber” shall refer to an individual or an entity that has agreed to a Service Agreement for use of our Services, including an individual representing the Subscribing company , the term “Account” shall mean all Producter accounts or instances created by or on behalf of Subscriber within the Service.<br></br> <br></br>

                    **2. Scope Of This Policy**<br /><br />

                    In this Policy, personal information means information relating to an identified or identifiable natural person. An identifiable person is one who can be identified, directly or indirectly, in particular by reference to an identification number or to one or more factors specific to his/her physical, physiological, mental, economic, cultural or social identity.<br /><br />

                    Personal information does not include “Usage Data” which we define as encoded or pseudonymized information or aggregated data we collect about a group or category of services, features or users. Usage Data helps us understand trends in usage of the Service so that we can better consider new features or otherwise tailor the Service. In addition to collecting and using Usage Data ourselves, we may share Usage Data with third parties, including our customers, partners and service providers, for various purposes, including to help us better understand our customers’ needs and improve the Service as well as for advertising and marketing purposes. We do not share Usage Data with third parties in a way that would enable them to identify you personally.<br /><br />

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices.<br /><br />

                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.

                    We may transfer personal information to companies that help us provide our Services to Subscribers. Our processing of personal data under the direction of our Subscribers and transfers to subsequent third parties for these purposes are governed by the Service Agreements with our Subscribers, including the data processing agreement.<br /><br />

                    **3. Information That You Provide To Us**<br /><br />

                    Account and Registration Information:

                    If you are Subscriber or User, we ask for and collect personal information about you and your Users such as name, address, phone number, email address, instant messaging ID, and credit card information of the Subscriber, as well as certain related information like Subscriber company name and website name email address and name or alias from each User. If you sign-up for a free trial Account, you are not required to enter your credit card information unless and until you decide to continue with a paid subscription to our Services. A third-party intermediary is used to manage credit card processing.

                    We refer to any information described above as “Account Information” for the purposes of this Policy. By voluntarily providing us with Account Information, you represent that you are the owner of such personal data or are otherwise authorized to provide it to us, specifically, if you as a Subscriber provide us Account Information related to the User, you represent that the User has not objected to such processing.

                    Submissions by the Website Visitor:

                    We ask for and collect personal information from you when you submit web forms on our Websites or as you use interactive features of the Websites, including, participation in surveys, contests, promotions, sweepstakes, providing user feedback, requesting customer support, or communicating with us.

                    Attendee Information:<br /><br />

                    We ask for and collect personal information such as your name, address, phone number and email address when you register for or attend an event as an Attendee.

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices. <br /><br />

                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.<br /><br />

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.<br /><br />

                    We may transfer personal information to companies that help us provide our Services to Subscribers. Our processing of personal data under the direction of our Subscribers and transfers to subsequent third parties for these purposes are governed by the Service Agreements with our Subscribers, including the data processing agreement. <br /><br />
                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices.
                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.<br /><br />

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices. Our Websites may contain links to other websites and the information practices and the content Our Websites may contain links to other websites and the information practices and the content


                </div>

                <div className={classNames(style.container, current === 3 ? style.activeTabContainer : "")}>
                    Effective as of July 1, 2021, Producter, Inc., (“Producter”) and its subsidiaries (collectively, the “Producter Group” or “we” or “us” or “our”) have updated our<br /><br />   Privacy Policy (“Policy”). <br /><br />

                    For a prior version of our Privacy Policy, click **[here](http://producter.co/privacy-policy)**.<br /><br />

                    **1. Introduction** <br /><br />

                    This Policy details our commitment to protecting the privacy of individuals who visit our Websites (as herein defined) (“Website Visitors”), who are authorized to use our Services through a Subscriber’s Account (“Users”), or who attend or register to attend events which we organize or co-organize (“Attendees”). For the purposes of this Policy, the term, “Websites”, shall refer collectively to **[www.producter.co](http://producter.co)**, **[be.producter.co/portal](http://be.producter.co/portal)** as well as the other websites that the Producter Group operates and that link to this Policy, the term “Services” shall refer to our on-demand product excellence system, and tools and services made available from the Websites. The term “Subscriber” shall refer to an individual or an entity that has agreed to a Service Agreement for use of our Services, including an individual representing the Subscribing company , the term “Account” shall mean all Producter accounts or instances created by or on behalf of Subscriber within the Service.<br></br> <br></br>

                    **2. Scope Of This Policy**<br /><br />

                    In this Policy, personal information means information relating to an identified or identifiable natural person. An identifiable person is one who can be identified, directly or indirectly, in particular by reference to an identification number or to one or more factors specific to his/her physical, physiological, mental, economic, cultural or social identity.<br /><br />

                    Personal information does not include “Usage Data” which we define as encoded or pseudonymized information or aggregated data we collect about a group or category of services, features or users. Usage Data helps us understand trends in usage of the Service so that we can better consider new features or otherwise tailor the Service. In addition to collecting and using Usage Data ourselves, we may share Usage Data with third parties, including our customers, partners and service providers, for various purposes, including to help us better understand our customers’ needs and improve the Service as well as for advertising and marketing purposes. We do not share Usage Data with third parties in a way that would enable them to identify you personally.<br /><br />

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices.<br /><br />

                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.

                    We may transfer personal information to companies that help us provide our Services to Subscribers. Our processing of personal data under the direction of our Subscribers and transfers to subsequent third parties for these purposes are governed by the Service Agreements with our Subscribers, including the data processing agreement.<br /><br />

                    **3. Information That You Provide To Us**<br /><br />

                    Account and Registration Information:

                    If you are Subscriber or User, we ask for and collect personal information about you and your Users such as name, address, phone number, email address, instant messaging ID, and credit card information of the Subscriber, as well as certain related information like Subscriber company name and website name email address and name or alias from each User. If you sign-up for a free trial Account, you are not required to enter your credit card information unless and until you decide to continue with a paid subscription to our Services. A third-party intermediary is used to manage credit card processing.

                    We refer to any information described above as “Account Information” for the purposes of this Policy. By voluntarily providing us with Account Information, you represent that you are the owner of such personal data or are otherwise authorized to provide it to us, specifically, if you as a Subscriber provide us Account Information related to the User, you represent that the User has not objected to such processing.

                    Submissions by the Website Visitor:

                    We ask for and collect personal information from you when you submit web forms on our Websites or as you use interactive features of the Websites, including, participation in surveys, contests, promotions, sweepstakes, providing user feedback, requesting customer support, or communicating with us.

                    Attendee Information:<br /><br />

                    We ask for and collect personal information such as your name, address, phone number and email address when you register for or attend an event as an Attendee.

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices. <br /><br />

                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.<br /><br />

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.<br /><br />

                    We may transfer personal information to companies that help us provide our Services to Subscribers. Our processing of personal data under the direction of our Subscribers and transfers to subsequent third parties for these purposes are governed by the Service Agreements with our Subscribers, including the data processing agreement. <br /><br />
                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices.
                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.<br /><br />

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices. Our Websites may contain links to other websites and the information practices and the content Our Websites may contain links to other websites and the information practices and the content


                </div>

                <div className={classNames(style.container, current === 4 ? style.activeTabContainer : "")}>
                    Effective as of July 1, 2021, Producter, Inc., (“Producter”) and its subsidiaries (collectively, the “Producter Group” or “we” or “us” or “our”) have updated our<br /><br />   Privacy Policy (“Policy”). <br /><br />

                    For a prior version of our Privacy Policy, click **[here](http://producter.co/privacy-policy)**.<br /><br />

                    **1. Introduction** <br /><br />

                    This Policy details our commitment to protecting the privacy of individuals who visit our Websites (as herein defined) (“Website Visitors”), who are authorized to use our Services through a Subscriber’s Account (“Users”), or who attend or register to attend events which we organize or co-organize (“Attendees”). For the purposes of this Policy, the term, “Websites”, shall refer collectively to **[www.producter.co](http://producter.co)**, **[be.producter.co/portal](http://be.producter.co/portal)** as well as the other websites that the Producter Group operates and that link to this Policy, the term “Services” shall refer to our on-demand product excellence system, and tools and services made available from the Websites. The term “Subscriber” shall refer to an individual or an entity that has agreed to a Service Agreement for use of our Services, including an individual representing the Subscribing company , the term “Account” shall mean all Producter accounts or instances created by or on behalf of Subscriber within the Service.<br></br> <br></br>

                    **2. Scope Of This Policy**<br /><br />

                    In this Policy, personal information means information relating to an identified or identifiable natural person. An identifiable person is one who can be identified, directly or indirectly, in particular by reference to an identification number or to one or more factors specific to his/her physical, physiological, mental, economic, cultural or social identity.<br /><br />

                    Personal information does not include “Usage Data” which we define as encoded or pseudonymized information or aggregated data we collect about a group or category of services, features or users. Usage Data helps us understand trends in usage of the Service so that we can better consider new features or otherwise tailor the Service. In addition to collecting and using Usage Data ourselves, we may share Usage Data with third parties, including our customers, partners and service providers, for various purposes, including to help us better understand our customers’ needs and improve the Service as well as for advertising and marketing purposes. We do not share Usage Data with third parties in a way that would enable them to identify you personally.<br /><br />

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices.<br /><br />

                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.

                    We may transfer personal information to companies that help us provide our Services to Subscribers. Our processing of personal data under the direction of our Subscribers and transfers to subsequent third parties for these purposes are governed by the Service Agreements with our Subscribers, including the data processing agreement.<br /><br />

                    **3. Information That You Provide To Us**<br /><br />

                    Account and Registration Information:

                    If you are Subscriber or User, we ask for and collect personal information about you and your Users such as name, address, phone number, email address, instant messaging ID, and credit card information of the Subscriber, as well as certain related information like Subscriber company name and website name email address and name or alias from each User. If you sign-up for a free trial Account, you are not required to enter your credit card information unless and until you decide to continue with a paid subscription to our Services. A third-party intermediary is used to manage credit card processing.

                    We refer to any information described above as “Account Information” for the purposes of this Policy. By voluntarily providing us with Account Information, you represent that you are the owner of such personal data or are otherwise authorized to provide it to us, specifically, if you as a Subscriber provide us Account Information related to the User, you represent that the User has not objected to such processing.

                    Submissions by the Website Visitor:

                    We ask for and collect personal information from you when you submit web forms on our Websites or as you use interactive features of the Websites, including, participation in surveys, contests, promotions, sweepstakes, providing user feedback, requesting customer support, or communicating with us.

                    Attendee Information:<br /><br />

                    We ask for and collect personal information such as your name, address, phone number and email address when you register for or attend an event as an Attendee.

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices. <br /><br />

                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.<br /><br />

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.<br /><br />

                    We may transfer personal information to companies that help us provide our Services to Subscribers. Our processing of personal data under the direction of our Subscribers and transfers to subsequent third parties for these purposes are governed by the Service Agreements with our Subscribers, including the data processing agreement. <br /><br />
                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices.
                    If you have purchased a subscription to our Services additional terms relating to data rights are set forth in and governed by our Terms of Service, available here: **[https://legal.productboard.com/terms](https://legal.productboard.com/terms)**, or such other applicable agreement between you and any member of the Producter Group relating to your access to and use of such Services (“Service Agreement”). If you access and use the Websites in any other manner, our Website & Portal Terms of Use, available at: **[https://www.productboard.com/website-terms-of-use](https://www.productboard.com/website-terms-of-use)** (“Website Terms”) apply.

                    We may process certain personal data as a data processor for our Subscribers. Subscribers to our Services act as data controllers and are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, as well as any and all privacy policies, agreements or other obligations, relating to the collection of personal information in connection with the use of our Services by individuals with whom our Subscribers interact. If you are an individual who interacts with a Subscriber using our Services, then you will be directed to contact our Subscriber for assistance with any requests or questions relating to your personal information processed in connection with such interaction.<br /><br />

                    Our Websites may contain links to other websites and the information practices and the content of such other websites are governed by the privacy statements of such other websites. We encourage you to review the privacy statements of any such other websites to understand their information practices. Our Websites may contain links to other websites and the information practices and the content Our Websites may contain links to other websites and the information practices and the content


                </div>
            </div>
        </div>
    )
}

export default TabBar