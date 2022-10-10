import ShowUser from "./component/users";

import { useState } from "react";

function BirthdayReminder() {
  const [Users, setUsers] = useState([
    {
      id: 1,
      name: "Bertie Yates",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
      age: 29,
    },
    {
      id: 2,
      name: "Hester Hogan",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
      age: 32,
    },
    {
      id: 3,
      name: "Larry Little",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      age: 36,
    },
    {
      id: 4,
      name: "Sean Walsh",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      age: 32,
    },
    {
      id: 5,
      name: "Lola Gardner",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      age: 29,
    },
  ]);
  return (
    <>
      <ShowUser Users={Users} setUsers={setUsers} />
    </>
  );
}

export default BirthdayReminder;
