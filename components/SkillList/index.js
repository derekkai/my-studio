import style from './SkillList.module.scss';
import {mySkillListData} from "../../constants";
import SkillCard from "../SkillCard";

const SkillList = () => {
    return (
        <div className={style.container} id="skill">
            <ul className={style.content}>
                {
                    mySkillListData.map(el => el.data.map(skill => (
                        <li>
                            <SkillCard level={el.level} name={skill} />
                        </li>
                    )))
                }
            </ul>

        </div>
    )
};

export default SkillList;