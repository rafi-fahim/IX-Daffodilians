"use client"
import { useUser } from "@clerk/nextjs";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase/firebase";
import ProfileCard from "@/components/Cards/ProfileCard";

type userData = {
  name: string;
  roll: number;
  id: string;
  profilePhoto: string;
  coverPhoto: string;
  boy: boolean;
  captain?: boolean;
  bio?: string;
};

function removeLastWord(inputString: string): string {
  // Split the input string into an array of words
  const words: string[] = inputString.split(" ");

  // Remove the last word from the array
  words.pop();

  // Join the remaining words back into a string
  const result: string = words.join(" ");

  return result;
}


const page = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [userData, setUserData] = useState<userData>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          getDoc(doc(db, "students", `${removeLastWord(user.username!)}`))
            .then(data => {
                setUserData(data.data() as userData);
            })
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        console.error("Error fetching data:", error);
      }
    };

    if (isLoaded) {
      fetchData();
    }
  }, [isLoaded, user]);

  if (isSignedIn) {
    return (
      <div className="w-full min-h-screen gap-4">
        {loading ? (
          <h1>Loading</h1>
        ) : userData ? (
          <>
          <ProfileCard
            boy={userData.boy}
            coverPhoto={userData.coverPhoto}
            id={userData.id}
            name={userData.name}
            profilePhoto={userData.profilePhoto}
            roll={userData.roll}
            captain={userData?.captain}
          />
          <p>{userData.bio}</p>
          </>
        ) : (
          <h1>No user data found</h1>
        )}
      </div>
    );
  } else if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4">
        <h1 className="font-semibold text-3xl text-center p-2 bg-theme-color-1 text-white rounded-sm">
          You are in a restricted page....
        </h1>
      </div>
    );
  }
};

export default page;
