import React from 'react'
import style from './Widget.module.css'
import WidParallax from '../../../components/WidParallax'

import banner from '../../../assets/media/banner/taskManagement1.png'
import banner2 from '../../../assets/media/banner/taskManagement2.png'
import banner3 from '../../../assets/media/banner/taskManagement3.png'
import banner4 from '../../../assets/media/banner/taskManagement4.png'
import banner5 from '../../../assets/media/banner/taskManagement5.png'

import feedbackGreenBig from '../../../assets/media/icons/feedback/feedbackGreenBig.png'
import feedbackGreenSmall from '../../../assets/media/icons/feedback/feedbackGreenSmall.png'
import FeedbackOrangeBig from '../../../assets/media/icons/feedback/FeedbackOrangeBig.png'
import feedbackOrangeSmall from '../../../assets/media/icons/feedback/feedbackOrangeSmall.png'
import feedbackPurpleBig from '../../../assets/media/icons/feedback/feedbackPurpleBig.png'
import feedbackPurpleSmall from '../../../assets/media/icons/feedback/feedbackPurpleSmall.png'
import feedbackYellowBig from '../../../assets/media/icons/feedback/feedbackYellowBig.png'
import feedbackYellowSmall from '../../../assets/media/icons/feedback/feedbackYellowSmall.png'

import taskGreenBig from '../../../assets/media/icons/task/taskGreenBig.png'
import taskGreenSmall from '../../../assets/media/icons/task/taskGreenSmall.png'
import taskOrangeBig from '../../../assets/media/icons/task/taskOrangeBig.png'
import taskOrangeSmall from '../../../assets/media/icons/task/taskOrangeSmall.png'
import taskPurpleBig from '../../../assets/media/icons/task/taskPurpleBig.png'
import taskPurpleSmall from '../../../assets/media/icons/task/taskPurpleSmall.png'
import taskYellowBig from '../../../assets/media/icons/task/taskYellowBig.png'
import taskYellowSmall from '../../../assets/media/icons/task/taskYellowSmall.png'

import roadmapYellowBig from '../../../assets/media/icons/roadmap/roadmapYellowBig.png'
import roadmapYellowSmall from '../../../assets/media/icons/roadmap/roadmapYellowSmall.png'
import roadmapGreenBig from '../../../assets/media/icons/roadmap/roadmapGreenBig.png'
import roadmapGreenSmall from '../../../assets/media/icons/roadmap/roadmapGreenSmall.png'
import roadmapPurpleBig from '../../../assets/media/icons/roadmap/roadmapPurpleBig.png'
import roadmapPurpleSmall from '../../../assets/media/icons/roadmap/roadmapPurpleSmall.png'

import shareBlueBig from '../../../assets/media/icons/share/shareBlueBig.png'
import shareBlueSmall from '../../../assets/media/icons/share/shareBlueSmall.png'
import shareGreenBig from '../../../assets/media/icons/share/shareGreenBig.png'
import shareGreenSmall from '../../../assets/media/icons/share/shareGreenSmall.png'
import shareOrangeBig from '../../../assets/media/icons/share/shareOrangeBig.png'
import shareOrangeSmall from '../../../assets/media/icons/share/shareOrangeSmall.png'
import shareYellowBig from '../../../assets/media/icons/share/shareYellowBig.png'
import shareYellowSmall from '../../../assets/media/icons/share/shareYellowSmall.png'

import createBlueBig from '../../../assets/media/icons/create/createBlueBig.png'
import createBlueSmall from '../../../assets/media/icons/create/createBlueSmall.png'
import createGreenBig from '../../../assets/media/icons/create/createGreenBig.png'
import createGreenSmall from '../../../assets/media/icons/create/createGreenSmall.png'
import createOrangeBig from '../../../assets/media/icons/create/createOrangeBig.png'
import createOrangeSmall from '../../../assets/media/icons/create/createOrangeSmall.png'
import createYellowBig from '../../../assets/media/icons/create/createYellowBig.png'
import createYellowSmall from '../../../assets/media/icons/create/createYellowSmall.png'




import user from '../../../assets/media/icons/user.png'
import user1 from '../../../assets/media/icons/user1.png'
import user2 from '../../../assets/media/icons/user2.png'
import user3 from '../../../assets/media/icons/user3.png'
import user4 from '../../../assets/media/icons/user4.png'

const WidgetParallax = (props) => {
  const { feedbackRef, taskRef, roadMapRef, shareRef, createRef } = props

  let datas =
    [{
      ref: feedbackRef,
      id: "widgetParallax",
      image: banner,
      title: [
        "Collect user feedback",
        "Engage with your users",
        "Collect insight with widgets",
        "Quick feedback link"
      ],
      description: [
        "Collect feedback from your customers and teammates. Inform your stakeholders with automated notifications.",
        "From idea to launch, engage with your users by actively collecting product feedback",
        "Collect feedback while your users on your product — help them reach you to give insights easily.",
        "Collect feedback even if your users not on your product — just send them the link and get user feedback in secs."
      ],
      buttonText: "Explore Feedback Module",
      buttonHoverColor: "green",
      containerColor: "#00D8A7",
      buttonColor: "rgba(0, 216, 167, 0.03)",
      officerUserData: {
        content: "“Producter is a rising star in product feedback. It’s very easy to integrate and use. Provides all we need. We get direct and valuable feedback from users.”",
        username: "Dirk Schmedding",
        profilePicture: user1,
        title: "CPO at ",
        work: "Contentpepper"
      },
      headerIcons: [
        { big: feedbackGreenBig, small: feedbackGreenSmall },
        { big: feedbackYellowBig, small: feedbackYellowSmall },
        { big: feedbackPurpleBig, small: feedbackPurpleSmall },
        { big: FeedbackOrangeBig, small: feedbackOrangeSmall }
      ]
    },
    {
      ref: taskRef,
      id: "prioritize",
      image: banner2,
      title: [
        "Prioritize what matters",
        "Run effective sprints",
        "Know the need behind tasks",
        "Share product progress"
      ],
      description: [
        "Decide what to build next around the customer insight and your product strategy. Align across teams effortlessly.",
        "Take a quick look at your sprint to make sure your team doesn’t have roadblocks and the workload is balanced.",
        "Know when a task is connected with customer feedback or a roadmap item. So you confidently prioritize the need.",
        "Show what your team is currently working on with your users. Let them know about their feedback’s status."
      ],
      buttonText: "Explore Task Module",
      buttonHoverColor: "orange",
      containerColor: "#FFD166",
      buttonColor: "rgba(255, 209, 102, 0.03)",
      officerUserData: {
        content: "“Producter is perfect for product teams to collect feedback, manage tasks, plan roadmaps and share updates. It has all the features product teams would look for.”",
        username: "Fatih Babacan",
        profilePicture: user2,
        title: "Cofounder & COO at ",
        work: "helo!"
      },
      headerIcons: [
        { big: taskYellowBig, small: taskYellowSmall },
        { big: taskGreenBig, small: taskGreenSmall },
        { big: taskPurpleBig, small: taskPurpleSmall },
        { big: taskOrangeBig, small: taskOrangeSmall }
      ]
    },
    {
      ref: roadMapRef,
      id: "roadMaps",
      image: banner3,
      title: [
        "Focus on the big picture",
        "Align with all teams",
        "Beware of roadblocks",
      ],
      description: [
        "Don’t lose sight of the overall product strategy while dealing with tasks. Zoom in and out easily to achieve product success.",
        "Communicate product strategy to customer-facing teams to drive a shared product success.",
        "Plans change — the critical thing is how you and other teams stay up-to-date to avoid delays. Sync teams automatically"
      ],
      buttonText: "Explore Roadmap Module",
      buttonHoverColor: "purple",
      containerColor: "#7B61FF",
      buttonColor: "rgba(123, 97, 255, 0.03)",
      officerUserData: {
        content: "“I like being able to provide my customers with transparency into what features are being considered lets them know that their requests are not falling on deaf ears.”",
        username: "Kevin Kramer",
        profilePicture: user,
        title: "Product Manager at ",
        work: "Align"
      },
      headerIcons: [
        { big: roadmapPurpleBig, small: roadmapPurpleSmall },
        { big: roadmapGreenBig, small: roadmapGreenSmall },
        { big: roadmapYellowBig, small: roadmapYellowSmall }
      ]
    },
    {
      ref: shareRef,
      id: "productUpdates",
      image: banner4,
      title: ["Close the feedback loop",
        "Increase user engagement",
        "Increase internal awareness",
      ],
      description: [
        "Make a smooth transition from collecting product feedback to prioritizing and launching in your changelog.",
        "Don't let your users miss out on new features. Keep them updated on how your product is improving.",
        "Collaborate with customer-facing teams when sharing product updates. Ensure that all teams are aware of new features."
      ],
      buttonText: "Explore Changelog Module",
      buttonHoverColor: "blue",
      containerColor: "#2D70FD",
      buttonColor: "rgba(45, 112, 253, 0.03)",
      officerUserData: {
        content: "“With Producter, we manage our product fast and efficiently. Not only does collecting users' feedback also help us to take action on the impactful one.”",
        username: "Neslihan Emikoglu",
        profilePicture: user3,
        title: "Co-founder at ",
        work: "heybooster"
      },
      headerIcons: [
        { big: shareBlueBig, small: shareBlueSmall },
        { big: shareGreenBig, small: shareGreenSmall },
        { big: shareYellowBig, small: shareYellowSmall }
      ]
    },
    {
      ref: createRef,
      id: "productDocs",
      image: banner5,
      title: [
        "Take action on your doc",
        "Single source of truth",
        "Create items on your doc"
      ],
      description: [
        "Don't let important action points float to the bottom of your doc. Create tasks and feedback for each valuable action right away.",
        "Keep your documents close to where you make your most critical product decisions. Single source of truth for all your decisions.",
        "Add related tasks, feedback, and roadmap items to your doc. Stay organized to make decisions faster and easier."
      ],
      buttonText: "Explore Documentation Module",
      buttonHoverColor: "darkGreen",
      containerColor: "#00D4C9",
      buttonColor: "rgba(0, 212, 201, 0.03)",
      officerUserData: {
        content: "“It's a very user-friendly tool, and the documentation feature is helping us pretty much on the task to align all stakeholders and the leadership team.”",
        username: "Alejandra Moreira",
        profilePicture: user4,
        title: "Head of Product at ",
        work: "Narrato"
      },
      headerIcons: [
        { big: createGreenBig, small: createGreenSmall },
        { big: createBlueBig, small: createBlueSmall },
        { big: createYellowBig, small: createYellowSmall }
      ]
    }]

  return (
    <>
      <div className={style.container}>
        <div className={style.firstDivider}></div>
        <div className={style.secondDivider}></div>
        {datas.map((values, index) => <div key={index} className="position-relative widparallax">
          <WidParallax data={values} />
        </div>)}
      </div>
    </>
  )
}

export default WidgetParallax