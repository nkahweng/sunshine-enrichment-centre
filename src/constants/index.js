import {
  BookOpenText,
  BicepsFlexed,
  Palette,
  BookMarked,
  Bot,
} from "lucide-react";
import {
  msLim,
  mrChew,
  learning,
  strengthening,
  artcraft,
  picturebook,
  robotics,
  english,
} from "../assets";

export const WHATSAPP_NUMBER = "601158804476";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in learning more about Sunshine Enrichment Centre.")}`;

export const routes = {
  home: "/",
  about: "/about",
  learningClass: "/programs/learning-class",
  strengtheningClass: "/programs/strengthening-class",
  artCraft: "/programs/art-craft",
  pictureBook: "/programs/picture-book",
  roboticsSTEAM: "/programs/robotics-steam",
  englishEnrichment: "/programs/english-enrichment",
};

export const programs = [
  {
    id: "learning-class",
    icon: BookOpenText,
    title: "Learning Class",
    ages: "4 - 12 years",
    description:
      "A play-based academic programme that brings core subjects to life.",
    img: learning,
    route: routes.learningClass,
  },
  {
    id: "strengthening-class",
    icon: BicepsFlexed,
    title: "Strengthening Class",
    ages: "3 - 12 years",
    description:
      "Strengthens reading and writing skills through targeted practice and personalised guidance.",
    img: strengthening,
    route: routes.strengtheningClass,
  },
  {
    id: "art-n-craft",
    icon: Palette,
    title: "Art & Craft",
    ages: "5 - 12 years",
    description:
      "Explore art techniques, materials, and self-expression while building confidence through guided projects.",
    img: artcraft,
    route: routes.artCraft,
  },
  {
    id: "picture-book",
    icon: BookMarked,
    title: "Picture Book Program",
    ages: "4 - 8 years",
    description:
      "Learn to read both words and pictures for early reading, comprehension, and imagination.",
    img: picturebook,
    route: routes.pictureBook,
  },
  {
    id: "robotics-n-steam",
    icon: Bot,
    title: "Robotics & STEAM",
    ages: "4 - 18 years",
    description:
      "Develops problem-solving, creativity, and future-ready STEAM skills through progressive learning levels.",
    img: robotics,
    route: routes.roboticsSTEAM,
  },
  {
    id: "english-enrichment",
    icon: Bot,
    title: "English Enrichment Class",
    ages: "7 - 17 years",
    description: "Stop forcing grammar. Start sparking communication.",
    img: english,
    route: routes.englishEnrichment,
  },
];

export const testimonials = [
  {
    name: "Nicol",
    class: "Robotics & STEAM Learning 机器人与编程班",
    description:
      '"My child has learned to use creative thinking to build robots and has developed the patience to program them. Through this process, they have also learned how to collaborate better with classmates. Parents, don’t hesitate! I brought my child for a trial class as soon as I saw the program, and they were instantly captivated by the world of robotics and coding after just one session!“',
    descChinese:
      '"孩子在这里不仅学会了运用创意思维来构建机器人，还培养了编写程序所需的耐心。在这个过程中，他也学会了如何与同学相处。家长们，别再犹豫了！当初我一看到这个课程就带孩子来试课，结果仅仅是一堂体验课，孩子就被机器人编程深深吸引了！"',
  },
  {
    name: "Xin Yan 妈妈",
    class: "Learning Class 学习班",
    description:
      "\"My child has gained a wealth of knowledge here. The teachers tailor their explanations to my child's specific needs, ensuring they understand how to apply what they learn. The environment is comfortable, and the teachers are highly responsible. They also organize occasional activities to reward the students, which my child really loves. “",
    descChinese:
      '"孩子在这里学到了丰富的知识。老师们会根据孩子的需求进行讲解，让孩子不仅理解，更懂得如何运用这些知识。这里的环境舒适，老师也非常尽责；中心偶尔还会举办活动奖励学生，孩子真的很喜欢这里。"',
  },
  {
    name: "Fiona",
    class: "Robotics & STEAM Learning 机器人与编程班",
    description:
      '"The Robotics program effectively cultivates logical thinking and structural design skills. I appreciate that they don\'t just rely on repetitive exercises; instead, they teach through games and hands-on activities."',
    descChinese:
      '"Robotics 课程有效地培养了孩子的逻辑思考与结构设计能力。这里的教学不是一味地枯燥练习，而是通过游戏和动手实践的方式来引导孩子学习。"',
  },
  {
    name: "Maggie",
    class: "Learning Class 学习班, Strengthening Class 加强班",
    description:
      "\"My child has been here since the age of three. The teachers truly care about student growth, creating a warm atmosphere and a comfortable environment where children feel physically and mentally at ease. Since joining the academic classes, my child has made rapid progress. This is a place with 'heart'—it is not just a place for lessons, but also a space for joy and play. The diversified teaching methods ensure that classes are never boring!",
    descChinese:
      '"孩子从3岁起就在这里学习了。老师非常关心学生的成长，亲切的态度和舒适的环境让孩子身心都很放松。自从上了学习班后，孩子的进步神速。这里是一个真正‘有温度’的地方——它既是学习的场所，也是孩子快乐玩耍的天地。多元化的教学方式让课程生动有趣，上课绝不沉闷！"',
  },
  {
    name: "Mary",
    class: "Art & Craft Program 美工班, Picture Book Program 绘本班",
    description:
      '"The teachers are warm and approachable. After the storytelling sessions, they organize games and activities, ensuring the kids have a wonderful time. Beyond just learning from the picture books, my child gets to make new friends and interact with the teachers in a setting that is both relaxing and fun.“',
    descChinese:
      '"老师们非常亲切。绘本讲读结束后，还会安排小游戏和活动，让孩子们度过一段快乐的时光。小朋友在这里不仅能从绘本中汲取知识，还能结交新朋友，与老师互动，整个学习过程轻松又好玩。"',
  },
  {
    name: "Helen Tei",
    class: "Picture Book Program 绘本班, Art & Craft Program 美工班",
    description:
      '"My child finds joy in the learning process and makes steady progress. The engaging activities are excellent for cultivating their concentration. “',
    descChinese:
      '"孩子能够在学习过程中获得乐趣，并取得稳步的进步。这些有趣的活动还能有效培养孩子的专注力。"',
  },
  // {
  //   name: "Xin Yan 妈妈",
  //   class: "Learning Class 学习班",
  //   description:
  //     "\"My child has gained a wealth of knowledge here. The teachers tailor their explanations to my child's specific needs, ensuring they understand how to apply what they learn. The environment is comfortable, and the teachers are highly responsible. They also organize occasional activities to reward the students, which my child really loves. “",
  //   descChinese:
  //     '"孩子在这里学到了丰富的知识。老师们会根据孩子的需求进行讲解，让孩子不仅理解，更懂得如何运用这些知识。这里的环境舒适，老师也非常尽责；中心偶尔还会举办活动奖励学生，孩子真的很喜欢这里。"',
  // },
  // {
  //   name: "Xin Yan 妈妈",
  //   class: "Learning Class 学习班",
  //   description:
  //     "\"My child has gained a wealth of knowledge here. The teachers tailor their explanations to my child's specific needs, ensuring they understand how to apply what they learn. The environment is comfortable, and the teachers are highly responsible. They also organize occasional activities to reward the students, which my child really loves. “",
  //   descChinese:
  //     '"孩子在这里学到了丰富的知识。老师们会根据孩子的需求进行讲解，让孩子不仅理解，更懂得如何运用这些知识。这里的环境舒适，老师也非常尽责；中心偶尔还会举办活动奖励学生，孩子真的很喜欢这里。"',
  // },
];

export const managements = [
  {
    name: "Ms. Lim",
    position: "Founder, SECEdu",
    description:
      '"I believe that learning should be a fun and engaging experience that inspires children to question, explore and discover."',
    imagePath: msLim,
    alt: "Ms. Lim - Founder of SECEdu",
  },
  {
    name: "Mr. Chew",
    position: "Founder, SECEdu",
    description:
      '"Each child is unique, and I will have the highest expectations for each child so that they will have the confidence to be their best self."',
    imagePath: mrChew,
    alt: "Mr. Chew - Founder of SECEdu ",
  },
  // {
  //   name: "Ms. Wong",
  //   position: "Head of centre",
  //   description:
  //     '"Education is not just about imparting knowledge; it’s about lighting the fire of curiosity and guiding each child to discover their unique potential."',
  //   imagePath: kw,
  //   alt: "Ms. Wong - Head of Centre of SECEdu",
  // },
];

export const subjects = [
  {
    title: "Bahasa Melayu",
    color: "bg-[#F7941F]/80",
  },
  {
    title: "中文",
    color: "bg-[#F44640]/80",
  },
  {
    title: "English",
    color: "bg-[#37B376]/80",
  },
  {
    title: "Mathematics",
    color: "bg-[#14264D]/80",
  },
  {
    title: "Science",
    color: "bg-[#FAC946]/80",
  },
  {
    title: "History",
    color: "bg-[#7C46FA]/80",
  },
];
