/** @format */

import styled from "styled-components";
import Slick from "./Slick";
import styles from "./ProjectItems.module.css";

import { useDispatch } from "react-redux";
import { hover } from "../../features/displaySlice";

interface itemsProps {
  item: string;
  name: string;
  href: string;
}

const SliderItem = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const items: itemsProps[] = [
  {
    item: `${process.env.PUBLIC_URL}/img/project_image/PhotoAlbum.png`,
    href: "https://photoalbumproject.netlify.app/",
    name: "PhotoAlbum",
  },
  {
    item: `${process.env.PUBLIC_URL}/img/project_image/OpenTable.png`,
    href: "https://opentableclone.netlify.app/",
    name: "OpenTable",
  },
  {
    item: `${process.env.PUBLIC_URL}/img/project_image/Netfle.png`,
    href: "https://sondaehoonflix.netlify.app/",
    name: "Netfle",
  },
  {
    item: `${process.env.PUBLIC_URL}/img/project_image/Hnm.png`,
    href: "https://sonhnm.netlify.app/",
    name: "H&M",
  },
  {
    item: `${process.env.PUBLIC_URL}/img/project_image/TsTodoList.png`,
    href: "https://creative-nasturtium-945124.netlify.app/",
    name: "TsTodoList",
  },
  {
    item: `${process.env.PUBLIC_URL}/img/project_image/tire.png`,
    href: "https://thseogns.github.io/tire/",
    name: "tire",
  },
  {
    item: `${process.env.PUBLIC_URL}/img/project_image/air.png`,
    href: "https://silver-kelpie-5dd0f4.netlify.app/",
    name: "air",
  },
  {
    item: `${process.env.PUBLIC_URL}/img/project_image/frz_title.png`,
    href: "https://thseogns.github.io/frizm/",
    name: "frz_title",
  },
  {
    item: `${process.env.PUBLIC_URL}/img/project_image/빙그레.png`,
    href: "https://thseogns.github.io/pf1/",
    name: "빙그레",
  },
  {
    item: `${process.env.PUBLIC_URL}/img/project_image/svelteP.png`,
    href: "https://friendly-squirrel-3fcaa2.netlify.app/",
    name: "svelte",
  },
];

function ProjectItems() {
  const dispatch = useDispatch();

  let imgAlt = "";
  const handleMouseHover = (e: any) => {
    imgAlt = e.target.alt;
    dispatch(hover(imgAlt));
  };
  const handleMouseOut = () => {
    dispatch(hover(null));
  };
  return (
    <Slick>
      {items.map((item, index) => (
        <SliderItem key={index}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={handleMouseHover}
            onMouseOut={handleMouseOut}
          >
            <img className={styles.imgStyle} src={item.item} alt={item.name} />
          </a>
        </SliderItem>
      ))}
    </Slick>
  );
}

export default ProjectItems;
