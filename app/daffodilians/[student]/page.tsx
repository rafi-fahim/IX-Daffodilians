import { db } from "@/app/Firebase/firebase";
import ProfileCard from "@/components/Cards/ProfileCard";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
type StudentCardProps = {
  name: string;
  roll: number;
  id: string;
  profilePhoto: string;
  coverPhoto: string;
  boy: boolean;
  captain?: boolean;
  bio?: string;
};
const getStudentData = async (id: string) => {
  const data = await getDoc(doc(db, "students", `${id}`));
  return data.data() as StudentCardProps;
};

const page = async ({ params }: { params: { student: string } }) => {
  const studentData = await getStudentData(params.student);

  return (
    <div className="flex flex-col items-center gap-4 justify-start min-h-screen w-full p-4">
      <ProfileCard
        boy={studentData.boy}
        coverPhoto={studentData.coverPhoto}
        id={studentData.id}
        name={studentData.name}
        profilePhoto={studentData.profilePhoto}
        roll={studentData.roll}
        captain={studentData?.captain}
      />
      <h1>Small details about me 😀</h1>
      <p className="bg-theme-color-4 rounded-sm p-4 text-justify">
        {studentData.bio ? studentData.bio : "I am too lazy to write a bio 🙂" }
      </p>
    </div>
  );
};

export default page;
