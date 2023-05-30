import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface VideoCollectionProps {
  id: number;
  thumbnail: string;
  title: string;
  author: string;
  source: string;
  views: string;
  icon: JSX.Element;
}

export const collectionData: VideoCollectionProps[] = [
  {
    id: 1,
    thumbnail: `https://picsum.photos/536/354`,
    title: "K-pop group BLACKPINK to release Ready For Love...",
    author: "Blackpink",
    source: "YouTube.com",
    views: "65m",
    icon: <MaterialCommunityIcons name="youtube" color={"#dc2626"} size={15} />,
  },
  {
    id: 2,
    thumbnail: `https://picsum.photos/536/354`,
    title: "K-pop group BLACKPINK to release Ready For Love...",
    author: "BP Fans",
    source: "YouTube.com",
    views: "873k",
    icon: <MaterialCommunityIcons name="youtube" color={"#dc2626"} size={15} />,
  },
  {
    id: 3,
    thumbnail: `https://picsum.photos/536/354`,
    title: "K-pop group BLACKPINK to release Ready For Love...",
    author: "Koreaboo",
    source: "YouTube.com",
    views: "30m",
    icon: <MaterialCommunityIcons name="youtube" color={"#dc2626"} size={15} />,
  },
  {
    id: 4,
    thumbnail: `https://picsum.photos/536/354`,
    title: "K-pop group BLACKPINK to release Ready For Love...",
    author: "Kpop News",
    source: "YouTube.com",
    views: "123k",
    icon: <MaterialCommunityIcons name="youtube" color={"#dc2626"} size={15} />,
  },
  // {
  //   id: 5,
  //   thumbnail: `https://picsum.photos/536/354`,
  //   title: "K-pop group BLACKPINK to release Ready For Love...",
  //   author: "Blackpink",
  //   source: "YouTube.com",
  //   views: "65m",
  //   icon: <MaterialCommunityIcons name="youtube" color={"#dc2626"} size={15} />,
  // },
  // {
  //   id: 6,
  //   thumbnail: `https://picsum.photos/536/354`,
  //   title: "K-pop group BLACKPINK to release Ready For Love...",
  //   author: "BP Fans",
  //   source: "YouTube.com",
  //   views: "873k",
  //   icon: <MaterialCommunityIcons name="youtube" color={"#dc2626"} size={15} />,
  // },
  // {
  //   id: 7,
  //   thumbnail: `https://picsum.photos/536/354`,
  //   title: "K-pop group BLACKPINK to release Ready For Love...",
  //   author: "Koreaboo",
  //   source: "YouTube.com",
  //   views: "30m",
  //   icon: <MaterialCommunityIcons name="youtube" color={"#dc2626"} size={15} />,
  // },
  // {
  //   id: 8,
  //   thumbnail: `https://picsum.photos/536/354`,
  //   title: "K-pop group BLACKPINK to release Ready For Love...",
  //   author: "Kpop News",
  //   source: "YouTube.com",
  //   views: "123k",
  //   icon: <MaterialCommunityIcons name="youtube" color={"#dc2626"} size={15} />,
  // },
  // {
  //   id: 9,
  //   thumbnail: `https://picsum.photos/536/354`,
  //   title: "K-pop group BLACKPINK to release Ready For Love...",
  //   author: "Koreaboo",
  //   source: "YouTube.com",
  //   views: "30m",
  //   icon: <MaterialCommunityIcons name="youtube" color={"#dc2626"} size={15} />,
  // },
  // {
  //   id: 10,
  //   thumbnail: `https://picsum.photos/536/354`,
  //   title: "K-pop group BLACKPINK to release Ready For Love...",
  //   author: "Kpop News",
  //   source: "YouTube.com",
  //   views: "123k",
  //   icon: <MaterialCommunityIcons name="youtube" color={"#dc2626"} size={15} />,
  // },
];
