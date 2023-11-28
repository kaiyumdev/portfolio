import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://twitter.com/kaiyumdev"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/kaiyumdev"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/kaiyumdev"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <div>
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
    </header>
  );
};

export default Header;
