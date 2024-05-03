import Link from "next/link";
import Image from "next/image";

type StudentCardProps = {
  name: string;
  roll: number;
  id: string;
  profilePhoto: string;
  coverPhoto: string;
  boy: boolean;
  captain?: boolean;
};

const StudentCard: React.FC<StudentCardProps> = ({
  id,
  name,
  coverPhoto,
  captain,
  boy,
  profilePhoto,
  roll,
}) => {
  return (
    <Link href={`/daffodilians/${id}`}>
      <div className="flex flex-col w-[220px] min-h-[300px] rounded-md shadow-md items-center hover:translate-x-4 hover:-rotate-3 hover:scale-110 transition  gap-2 bg-theme-color-2 text-white">
        <div className="w-full bg-gray-300 h-24 rounded-t-md self-start relative">
          <Image
            className="absolute -bottom-14 bg-theme-color-2 left-[60px] rounded-full p-2"
            alt={name}
            src={profilePhoto}
            height={105}
            width={105}
          />
        </div>
        <h3 className="text-lg text-center font-bold mt-10">{name}</h3>
        <div className="flex flex-col justify-center items-start gap-2 w-full p-2">
          <p>Roll: {roll}</p>
          <p>ID: {id}</p>
        </div>
        <div
          className={`w-11/12 mb-4 h-2 rounded-md ${
            boy ? "bg-theme-color-3" : "bg-rose-400"
          } justify-self-end`}
        ></div>
      </div>
    </Link>
  );
};

export default StudentCard;
