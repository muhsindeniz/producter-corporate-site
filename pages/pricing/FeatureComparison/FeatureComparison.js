import React, { useContext } from 'react'
import style from './FeatureComparison.module.css'
import FeatureComparisonTable from '../../../components/FeatureComparisonTable/FeatureComparisonTable'
import { GlobalSettingsContext } from '../../../context/GlobalSettingsContext'

const FeatureComparison = () => {

    let { mobile } = useContext(GlobalSettingsContext)

    const HeaderData = {
        mainTitle: "Feature Comparison	",
        column: [
            {
                title: "Startup",
                icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.3241 6.31691C20.3241 9.27823 22.7282 11.6789 25.6939 11.6789C26.0204 11.6773 26.3461 11.6459 26.667 11.5852V22.2154C26.667 26.6876 24.029 29.3335 19.5502 29.3335H9.79547C5.305 29.3335 2.66699 26.6876 2.66699 22.2154V12.475C2.66699 8.00276 5.305 5.3335 9.79547 5.3335H20.4178C20.3548 5.6575 20.3234 5.98685 20.3241 6.31691ZM17.5336 19.8623L21.3441 14.9452V14.9218C21.6703 14.4834 21.5871 13.8654 21.1565 13.5286C20.9481 13.3677 20.6833 13.2981 20.4225 13.3356C20.1618 13.3731 19.9275 13.5146 19.773 13.7276L16.5605 17.8603L12.9025 14.9803C12.6936 14.8176 12.4279 14.7458 12.1654 14.781C11.9029 14.8163 11.6656 14.9556 11.5072 15.1676L7.56782 20.2486C7.42935 20.4212 7.35481 20.6363 7.35678 20.8574C7.33392 21.3043 7.61616 21.7103 8.0435 21.8452C8.47083 21.9801 8.9355 21.8099 9.17408 21.4311L12.4687 17.1696L16.1267 20.0379C16.3348 20.2056 16.6022 20.2817 16.8675 20.2486C17.1329 20.2154 17.3733 20.076 17.5336 19.8623Z" fill="#2D70FD" />
                    <circle opacity="0.4" cx="26.0003" cy="6.00008" r="3.33333" fill="#2D70FD" />
                </svg>,
                theme: "#2D70FD"
            },
            {
                title: "Growth",
                icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M15.7019 29.1166C12.6578 27.2364 9.82807 25.0194 7.26442 22.5061C5.45458 20.7117 4.07238 18.5206 3.22345 16.1004C1.70661 11.3803 3.47231 5.98597 8.40205 4.38453C11.0041 3.56737 13.834 4.06901 16.01 5.73311C18.1868 4.07087 21.0157 3.5694 23.6179 4.38453C28.5476 5.98597 30.3252 11.3803 28.8083 16.1004C27.9663 18.5183 26.5923 20.7092 24.7911 22.5061C22.2251 25.0166 19.3957 27.2334 16.3536 29.1166L16.0218 29.3333L15.7019 29.1166Z" fill="#00D8A7" />
                    <path d="M16.0149 29.3333L15.7016 29.1166C12.6538 27.2365 9.82015 25.0195 7.25235 22.5061C5.43393 20.7141 4.0435 18.5229 3.18768 16.1003C1.68269 11.3803 3.44839 5.98593 8.37813 4.38449C10.9801 3.56734 13.8474 4.06935 16.0149 5.74739V29.3333Z" fill="#00D8A7" />
                    <path d="M24.3079 13.3323C24.0401 13.3151 23.7906 13.1812 23.6181 12.9621C23.4455 12.743 23.3649 12.4579 23.3952 12.1735C23.4242 11.2371 22.8913 10.3847 22.0696 10.053C21.5486 9.91079 21.233 9.34649 21.3634 8.78998C21.487 8.24242 21.9998 7.90196 22.5151 8.02521C22.5802 8.036 22.6428 8.05957 22.6998 8.09473C24.3474 8.72877 25.4142 10.4352 25.3293 12.301C25.3266 12.5838 25.2163 12.8533 25.0238 13.0477C24.8312 13.2422 24.5728 13.3449 24.3079 13.3323Z" fill="#00D8A7" />
                </svg>,
                theme: "#00D8A7"
            },
            {
                title: "Premium",
                icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M17.3021 4.1514L20.2707 10.1171C20.4894 10.5493 20.9068 10.8495 21.3883 10.9162L28.0564 11.8873C28.4458 11.942 28.7992 12.1475 29.0379 12.461C29.274 12.7705 29.3753 13.1627 29.318 13.5482C29.2713 13.8683 29.1206 14.1645 28.8899 14.3913L24.0582 19.075C23.7048 19.4018 23.5447 19.8861 23.6301 20.3596L24.8197 26.9443C24.9464 27.7394 24.4196 28.4891 23.6301 28.6399C23.3047 28.6919 22.9713 28.6372 22.6779 28.4878L16.7299 25.3889C16.2885 25.1661 15.7671 25.1661 15.3256 25.3889L9.37769 28.4878C8.64687 28.876 7.74134 28.6118 7.33459 27.8915C7.18389 27.6047 7.13054 27.2778 7.17989 26.959L8.36948 20.373C8.45483 19.9007 8.29346 19.4138 7.94138 19.087L3.10968 14.406C2.53489 13.851 2.51755 12.9372 3.07101 12.3622C3.08301 12.3502 3.09634 12.3369 3.10968 12.3236C3.33906 12.0901 3.64046 11.942 3.96586 11.9033L10.634 10.9309C11.1141 10.8628 11.5315 10.5653 11.7515 10.1304L14.6135 4.1514C14.8682 3.63914 15.3963 3.32031 15.9698 3.33365H16.1485C16.6459 3.39369 17.0793 3.70184 17.3021 4.1514Z" fill="#FDBE3C" />
                    <path d="M15.9897 25.2227C15.7314 25.2307 15.4798 25.3001 15.2535 25.4242L9.33462 28.5161C8.6104 28.8617 7.74374 28.5935 7.3377 27.9009C7.18727 27.618 7.13269 27.2938 7.18328 26.9762L8.36545 20.4041C8.44533 19.9264 8.28557 19.4407 7.93811 19.1044L3.10424 14.4246C2.53046 13.8628 2.51981 12.9407 3.08161 12.3655C3.0896 12.3575 3.09625 12.3509 3.10424 12.3442C3.33322 12.1173 3.62877 11.9679 3.94694 11.9212L10.6206 10.939C11.1039 10.8776 11.5232 10.5761 11.7362 10.1384L14.6371 4.08408C14.9127 3.59568 15.4412 3.30477 16.0003 3.33546C15.9897 3.73179 15.9897 24.9532 15.9897 25.2227Z" fill="#FDBE3C" />
                </svg>,
                theme: "#FDBE3C"
            },
            {
                title: "Entreprise",
                icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M2.66699 14.7715C2.73366 17.8888 2.92033 23.2208 2.94699 23.8088C3.04166 25.0662 3.52299 26.3368 4.27233 27.2328C5.31499 28.4902 6.59899 29.0515 8.38966 29.0515C10.8643 29.0648 13.5923 29.0648 16.2417 29.0648C18.9017 29.0648 21.483 29.0648 23.663 29.0515C25.4283 29.0515 26.7523 28.4755 27.7817 27.2328C28.531 26.3368 29.0123 25.0528 29.0803 23.8088C29.107 23.3142 29.2403 17.5262 29.3203 14.7715H2.66699Z" fill="#FF9C54" />
                    <path d="M14.9941 20.5122V22.2375C14.9941 22.7895 15.4421 23.2375 15.9941 23.2375C16.5461 23.2375 16.9941 22.7895 16.9941 22.2375V20.5122C16.9941 19.9602 16.5461 19.5122 15.9941 19.5122C15.4421 19.5122 14.9941 19.9602 14.9941 20.5122Z" fill="#FF9C54" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.615 19.4086C13.4817 19.8926 13.0163 20.2019 12.5123 20.1352C9.11099 19.6606 5.86033 18.4539 3.11633 16.6419C2.83499 16.4579 2.66699 16.1432 2.66699 15.8072V11.1859C2.66699 8.3859 4.94966 6.10857 7.75633 6.10857H10.379C10.6297 4.17257 12.2697 2.66724 14.2723 2.66724H17.715C19.7163 2.66724 21.3577 4.17257 21.6083 6.10857H24.2443C27.043 6.10857 29.3203 8.3859 29.3203 11.1859V15.8072C29.3203 16.1432 29.151 16.4566 28.8723 16.6419C26.123 18.4619 22.859 19.6739 19.435 20.1472C19.3883 20.1539 19.343 20.1566 19.2977 20.1566C18.8457 20.1566 18.4417 19.8512 18.3283 19.4032C18.059 18.3419 17.095 17.5992 15.987 17.5992C14.8643 17.5992 13.911 18.3259 13.615 19.4086ZM17.715 4.66724H14.2723C13.375 4.66724 12.6257 5.28057 12.4017 6.10857H19.5843C19.3603 5.28057 18.611 4.66724 17.715 4.66724Z" fill="#FF9C54" />
                </svg>,
                theme: "#FF9C54"
            }
        ]
    };

    const RowData = [
        {
            id: 0,
            title: "Feedback",
            subTitle: "",
            content: [
                {
                    title: "Shared user feedback space for all teams",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Organize feedback with custom tags",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Slack notifications",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "User feedback form",
                    startup: false,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Collect feedback with widgets",
                    startup: false,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Show and hide feedback fields",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Add important feedback to backlog",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Search and filter feedback",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Filter feedback and save as a view",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                }
            ]
        },
        {
            id:1,
            title: "Prioritization",
            subTitle: "(Coming soon)",
            content: [
                {
                    title: "Plan and prioritize in your agile way",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Manage tasks linked to user feedback",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Comment and mention teammates",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Link tasks with Objective and Key Results",
                    startup: false,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Prioritize by the impact score",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Link user personas with tasks",
                    startup: false,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Import tasks from project management tools",
                    startup: false,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Kanban view",
                    startup: false,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
            ]
        },
        {
            id:2,
            title: "Roadmap",
            subTitle: "(Coming soon)",
            content: [
                {
                    title: "Create private and public roadmaps",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Link epics with your roadmaps",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Create dependencies",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Add milestones",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Ganntt chart view",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                }
            ]
        },
        {
            id:3,
            title: "Changelog",
            subTitle: "(Coming soon)",
            content: [
                {
                    title: "Auto-created release content",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Draft and schedule product updates",
                    startup: false,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Notify your customers",
                    startup: false,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
            ]
        },
        {
            id:4,
            title: "User Portal",
            subTitle: "",
            content: [
                {
                    title: "Track customer feedback",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Communicate with your customers",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Auto-update your customers about their feedback",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Share public roadmap with your customers",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Customize user portal",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Share product updates on the changelog",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                }
            ]
        },
        {
            id:5,
            title: "Integrations",
            subTitle: "(Coming soon)",
            content: [
                {
                    title: "Collect feedback from Slack, Intercom, Zendesk, Gmail",
                    startup: false,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Manage tasks by integrating with GitHub, GitLab, Figma",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Import your Jira, Asana, Trello, Basecamp tasks",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
            ]
        },
        {
            id:6,
            title: "Support",
            subTitle: "",
            content: [
                {
                    title: "Email, Slack and Intercom-based support",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Dedicated account manager",
                    startup: false,
                    growth: false,
                    premium: false,
                    entreprise: true
                },
                {
                    title: "1:1 Onboarding",
                    startup: false,
                    growth: false,
                    premium: false,
                    entreprise: true
                },
            ]
        },
        {
            id:7,
            title: "Security & Privacy",
            subTitle: "",
            content: [
                {
                    title: "99% Uptime",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "Personal data deletion",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
                {
                    title: "GDPR",
                    startup: true,
                    growth: true,
                    premium: true,
                    entreprise: true
                },
            ]
        }
    ];

    return (
        <div className='position-relative'>
            <div className={style.listFeatureContainer}>
                <h4>Download full <br />list of features</h4>
                <p>
                    Customer-centric teams love Producter’s fast and, easy-to-use experience.
                </p>
                <button>Download</button>
            </div>
            <div className={style.container}>
                <div className={style.leftLine}></div>
                <FeatureComparisonTable
                    HeaderData={HeaderData}
                    RowData={RowData}
                />
            </div>
        </div>

    )
}

export default FeatureComparison