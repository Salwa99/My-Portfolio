import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {BiLogoCss3, BiLogoReact, BiLogoTailwindCss, BiLogoPostgresql} from 'react-icons/bi'
import {TbBrandJavascript} from 'react-icons/tb'
import {SiTypescript, SiRubyonrails, SiJest, SiWebpack, SiRedux, SiPostman} from 'react-icons/si'
import {DiRuby} from 'react-icons/di'
import {BsFiletypeSql} from 'react-icons/bs'
import codereview from '../assets/images/codereview.png'
import kanban from '../assets/images/kanban.png'
import scrum from '../assets/images/scrum.png'
import teamwork from '../assets/images/teamwork.png'
import problemsolving from '../assets/images/problemSolving.png'


export const SkillsA = [
  {
    _id: 1,
    html: <AiFillHtml5 />,
    css: <BiLogoCss3 />,
    tailwind: <BiLogoTailwindCss />,
    javascript: <TbBrandJavascript />,
    react: <BiLogoReact />,
    redux: <SiRedux />,
    typescript: <SiTypescript />,
    jest: <SiJest />
  },
  {
    _id: 2,
    ruby: <DiRuby />,
    rubyonrails: <SiRubyonrails />,
    sql: <BsFiletypeSql />,
    postgres: <BiLogoPostgresql />,
    postman: <SiPostman />,
  },
  {
    _id: 3,
    github: <AiFillGithub /> ,
    teamwork: teamwork,
    problemsolving: problemsolving,
    scrum: scrum,
    kanban: kanban,
    codereview: codereview,
  }
];