import Link from "next/link";
import Image from "next/image";
import GroupStudentCard from "./GroupStudentCard";
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
  boy: boolean;
  id: string;
  coverPhoto: string;
};

const GroupCard: React.FC<GroupCardProps> = ({
  id,
  banner,
  coverPhoto,
  members,
  rank,
  boy,
}) => {
  return (
    <Link href={`/groups/${id}`}>
      <div className="flex flex-col min-w-[450px] min-h-[300px] rounded-md shadow-md items-center hover:translate-x-4 hover:-rotate-3 hover:scale-110 transition  gap-2 bg-theme-color-2 text-white">
        <div className="w-full mb-24 bg-gray-300 h-24 rounded-t-md self-start relative">
        <div className="flex absolute -bottom-[85px] left-[155px] items-center justify-center gap-4">
        {members.map((item) => {
            if (item.isLeader) {
                return (
                  <GroupStudentCard
                    id={item.id}
                    isLeader={item.isLeader}
                    name={item.name}
                    profilePhoto={item.profilePhoto}
                    key={item.id}
                  />
                );    
            }
          })}
        </div>
        </div>
        <div className="flex items-center justify-center gap-4">
        {members.map((item) => {
            if (!item.isLeader) {
                return (
                  <GroupStudentCard
                    id={item.id}
                    isLeader={item.isLeader}
                    name={item.name}
                    profilePhoto={item.profilePhoto}
                    key={item.id}
                  />
                );    
            }
          })}
        </div>
        <h3 className="text-2xl uppercase text-center font-bold">{id}</h3>
        <div
          className={`w-11/12 mb-4 h-2 rounded-md ${
            boy ? "bg-theme-color-3" : "bg-rose-400"
          } justify-self-end`}
        ></div>
      </div>
    </Link>
  );
};

export default GroupCard;
