"use client";
import StudentCard from "./Cards/StudentCard";
import { db } from "@/app/Firebase/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

interface StudentData {
  name: string;
  roll: number;
  id: string;
  boy: boolean;
  profilePhoto: string;
  coverPhoto: string;
  captain: boolean;
  captainRank? : number;
}

const getPoemCollection = async () => {
  let data: StudentData[] = [];
  const res = await getDocs(query(collection(db, "students"), orderBy('roll')));
  res.forEach((docu) => {
    data.push({ ...docu.data(), id: docu.id } as StudentData);
  });
  return data as StudentData[];
};

const RenderStudentCards = () => {
  const [collectionData, setCollectionData] = useState<StudentData[]>([]);
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
        <h1 className="font-semibold mt-4 p-3 text-2xl rounded-md shadow-sm bg-theme-color-2 text-white">
          Captains
        </h1>
        <div className="grid place-items-center justify-items-center gap-8 mb-4 sm:grid-cols-2 w-auto h-auto">
          {collectionData.map((item) => {
            if (item.captain && item.boy) {
              return (
                <StudentCard
                  name={item.name}
                  roll={item.roll}
                  id={item.id}
                  boy={item.boy}
                  captain={item.captain}
                  profilePhoto={item.profilePhoto}
                  coverPhoto={item.coverPhoto}
                  key={item.id}
                />
              );
            }
          })}
        </div>
        <div className="grid place-items-center justify-items-center gap-8  sm:grid-cols-2 w-auto h-auto">
        {collectionData.map((item) => {
            if (item.captain && !item.boy) {
              return (
                <StudentCard
                  name={item.name}
                  roll={item.roll}
                  id={item.id}
                  boy={item.boy}
                  captain={item.captain}
                  profilePhoto={item.profilePhoto}
                  coverPhoto={item.coverPhoto}
                  key={item.id}
                />
              );
            }
          })}
          
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-2 h-auto">
        <h1 className="font-semibold p-3 text-2xl rounded-md shadow-sm bg-theme-color-2 text-white">
          Students
        </h1>
        <div className="student-card-show-grid w-full h-auto">
          {collectionData.map((item) => {
            if (item.captain == false) {
              return (
                <StudentCard
                  name={item.name}
                  roll={item.roll}
                  id={item.id}
                  boy={item.boy}
                  profilePhoto={item.profilePhoto}
                  coverPhoto={item.coverPhoto}
                  key={item.id}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
export default RenderStudentCards;

// type StudentData = {
//   name: string;
//   roll: string;
//   id: string;
//   profilePhoto: string;
//   coverPhoto: string;
// };

// const RenderStudentCards = () => {
//   return (
//     <div>
//       <StudentCard
//         id="01194816"
//         profilePhoto="https://firebasestorage.googleapis.com/v0/b/daffodilians-9.appspot.com/o/Student_Photos%2F01194816.jpg?alt=media&token=6fe70045-e48f-4ac4-a800-a7f537f05f6f"
//         name="Fahim Shakil"
//         roll="235"
//         coverPhoto="https://firebasestorage.googleapis.com/v0/b/daffodilians-9.appspot.com/o/Student_Photos%2F01194816.jpg?alt=media&token=6fe70045-e48f-4ac4-a800-a7f537f05f6f"
//         key="bruh"
//       />
//     </div>
//   );
// };
