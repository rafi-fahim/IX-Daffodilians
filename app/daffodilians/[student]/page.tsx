import { db } from '@/app/Firebase/firebase'
import { collection, doc, getDoc } from 'firebase/firestore'
import React from 'react'
type StudentCardProps = {
  name: string;
  roll: number;
  id: string;
  profilePhoto: string;
  coverPhoto: string;
  boy: boolean;
  captain?: boolean;
};
const getStudentData = async (id: string) => {
  const data = await getDoc(doc(db, "students", `${id}`))
  return data.data() as StudentCardProps
}

const page = async ({ params }: { params: { student: string } }) => {
  const studentData = await getStudentData(params.student)
  
  return (
    <div>page</div>
  )
}

export default page