import { Icon } from "@iconify/react";
import TitleCss from "../styles/title/title.module.css";

export const Title = () => {
  return (
    <div>
      <h1 className={TitleCss.heading}>
        <Icon icon="twemoji:waving-hand" />
        Hello, I am <br /> Daniel
      </h1>
      <p className="job-title">&lt;&gt; Web Developer &lt;/&gt;</p>
    </div>
  );
};
