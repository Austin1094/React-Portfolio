import Image1 from "/Users/austinadams/bootcamp/react-portfolio/src/assets/project1.jpg"
import Image2 from "/Users/austinadams/bootcamp/react-portfolio/src/assets/project2.jpg"
import Image3 from "/Users/austinadams/bootcamp/react-portfolio/src/assets/body-and-mind.png"
import Image4 from "/Users/austinadams/bootcamp/react-portfolio/src/assets/password-generator.jpg"
import Image5 from "/Users/austinadams/bootcamp/react-portfolio/src/assets/basketball-quiz.jpg"
import Image6 from "/Users/austinadams/bootcamp/react-portfolio/src/assets/note-taker.jpg"
import Image7 from "/Users/austinadams/bootcamp/react-portfolio/src/assets/work-day.jpg"

const data = [
    {
        id: 1,
        category: "Frontend",
        image: Image1,
        title: "Room For Activities (Group Project)",
        description: "Room For Activities allows users to search for and buy tickets to an event they would like to attend. They're able to search by category, state that it's held in, the start date, and the end date. Once the requirements are filled in, the list of events within the dates entered will show, along with a button to pin where at on the map it's located. From there, the user can click the pin on the map, and it will direct them Tickermaster, where they can then buy the tickets.",
        link: 'https://reallyawesomename.github.io/room-for-activities/',
        github: 'https://github.com/ReallyAwesomeName/room-for-activities'
    },
    {
        id: 2,
        image: Image2,
        category: "Backend",
        title: "Achievement Unlocked (Group Project)",
        description: "Achievement Unlocked allows users to connect with other passionate gamers, as they can review and talk about their favorite video games. With plans to help build on Achievement Unlocked, we hope to make it the go-to place for all gaming needs.",
        link: 'https://thawing-cove-75959.herokuapp.com/',
        github: 'https://github.com/Greivin13/AchievementUnlocked '
    },
    {
        id: 3,
        category: "Backend",
        image: Image3,
        title: "Body And Mind (Group Project)",
        description: "Body And Mind is a social platform that focuses on health and fitness. Users can create posts, and even comment on others. Additionally, they're able to search for different types of workouts, categorized by specific words, giving each workout the name, type, muscle, equipment, difficulty, and even proper instructions.",
        link: 'https://body--mind-424f753a39d8.herokuapp.com/',
        github: 'https://github.com/EldenBear/Body_and_Mind'
    },
    {
        id: 4,
        category: "Frontend",
        image: Image4,
        title: "Password Generator",
        description: "Password Generator allows users to generate a random password based on the length of the desired password.",
        link: 'https://austin1094.github.io/Password-Generator/',
        github: 'https://github.com/Austin1094/Password-Generator'
    },
    {
        id: 5,
        category: "Frontend",
        image: Image5,
        title: "Basketball Quiz",
        description: "A short basketball quiz that gives users the chance to showcase their basketball knowledge against other users.",
        link: 'https://austin1094.github.io/created-quiz/',
        github: 'https://github.com/Austin1094/created-quiz'
    },
    {
        id: 6,
        category: "Backend",
        image: Image6,
        title: "Note Taker",
        description: "Note Taker allows the user to create notes (such as reminders) and save them, so that when the page is reloaded, the note will stay put. The user also has the option to delete the notes as well.",
        link: 'https://calm-hollows-09005.herokuapp.com/',
        github: 'https://github.com/Austin1094/Note-Taker'
    },
    {
        id: 7,
        category: "Frontend",
        image: Image7,
        title: "Work Day Scheduler",
        description: "Work Day Scheduler allows users to plan their day accordingly by having them fill each time slot throughout the typical nine-to-five work shift with important things to do, such as an upcoming meeting.",
        link: 'https://austin1094.github.io/New-Work-Day-Scheduler/',
        github: 'https://github.com/Austin1094/New-Work-Day-Scheduler'
    }
]

export default data