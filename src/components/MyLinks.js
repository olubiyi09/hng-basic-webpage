import React from "react";
import Link from "./Link";

const links = [
  {
    id: "twitter_link",
    name: "twitter",
    link: "https://twitter.com/its_Seyistrings",
  },
  { id: "btn__zuri", name: "zuri team", link: "https://training.zuri.team" },
  { id: "books", name: "zuri books", link: "https://books.zuri.team" },
  {
    id: "book__python",
    name: "python books",
    link: "https://books.zuri.team/python-for-beginners?ref_id=oluwaseyi",
  },
  {
    id: "pitch",
    name: "background check for coders",
    link: "https://background.zuri.team",
  },
  {
    id: "book__design",
    name: "design books",
    link: "https://books.zuri.team/design-rules",
  },
];

const LinkContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-8 max-w-[800px] mx-auto">
      {links.map((link) => (
        <Link key={link.id} data={link} />
      ))}
    </div>
  );
};

export default LinkContainer;
