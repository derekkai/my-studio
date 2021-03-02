import Card from "../Card";
import style from "./JobCard.module.scss";
import Image from "next/image";
import SkillIcons from "../SkillIcons";

const JobCard = ({ data }) => {
    const { icon, companyName, jobName, experience, content, skill, current  } = data;
    return (
        <Card>
            <div className={style.front}>
                <div className={style.header}>
                    <Image src={`/${icon}`} width={119} height={43}/>
                    <div className={style.block}>
                        <div className={style.name}>{companyName}</div>
                        <div className={style.job}>{`${jobName} for ${experience} years`}</div>
                    </div>
                </div>
                <div className={style.divider}/>
                <div className={style.content}>
                    <div className={style.title}>work content</div>
                    <ul className={style.list}>
                        {content.map(el => <li key={el}>
                            {el}
                        </li>)}
                    </ul>
                </div>
                <div className={style.divider}/>
                <div className={style.footer}>
                    <div className={style.title}>skill</div>
                    <ul className={style.list}>
                        {
                            skill.map(el =>
                                <li key={el}><SkillIcons  name={el}/></li>,
                            )
                        }
                    </ul>
                </div>
                {current && <div className={style.tips}>🥇 Current job</div>}
            </div>
        </Card>
    )
}

export default JobCard;
