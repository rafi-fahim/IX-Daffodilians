"use client";

import { db } from "@/app/Firebase/firebase";
import { useUser } from "@clerk/nextjs";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

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
  const [formText, setFormText] = useState<string>();

  const submitBio = () => {
    updateDoc(doc(db, "students", `${removeLastWord(user?.username!)}`), {
      bio: formText,
    });
  };

  return (
    <>
      {isSignedIn ? (
        <div>
          <form onClick={submitBio}>
            <textarea
              name="bio"
              onChange={(e) => {
                setFormText((prev) => e.target.value);
              }}
              id="bio"
              placeholder="Write your Bio"
            />
            <button type="submit"></button>
          </form>
        </div>
      ) : (
        <h1>Login first then come here</h1>
      )}
    </>
  );
};

export default page;
