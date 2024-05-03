"use client";
import { db } from "@/app/Firebase/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import GroupCard from "./Cards/GroupCard";

type MemberData = {
  name: string;
  id: number;
  isLeader: boolean;
  profilePhoto: string;
};

type GroupCardProps = {
  banner: string;
  members: MemberData[];
  rank: number;
  id: string;
  coverPhoto: string;
  boy: boolean;
};
const getPoemCollection = async () => {
  let data: GroupCardProps[] = [];
  const res = await getDocs(query(collection(db, "groups"), orderBy('rank')));
  res.forEach((docu) => {
    data.push({ ...docu.data(), id: docu.id } as GroupCardProps);
  });
  return data as GroupCardProps[];
};

const RenderGroupCards = () => {
  const [collectionData, setCollectionData] = useState<GroupCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPoemCollection();
        setCollectionData(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(collectionData);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-2 h-auto">
        <h1 className="font-semibold p-3 text-2xl rounded-md shadow-sm bg-theme-color-2 text-white">
          Groups
        </h1>
        <div className="group-card-show-grid w-full h-auto">
          {collectionData.map((item) => {
            return (
              <GroupCard
                banner={item.banner}
                coverPhoto={item.coverPhoto}
                id={item.id}
                rank={item.rank}
                boy={item.boy}
                members={item.members}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default RenderGroupCards;
