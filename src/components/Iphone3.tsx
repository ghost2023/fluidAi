import bg from "../assets/iphone-bg2.png";
import iphoneStatus from "../assets/iphone-status.svg";
import iphoneTabbar from "../assets/iphone-tabbar2.png";
import plus from "../assets/plus.svg";
import sort from "../assets/sort.svg";
import IphoneFrame from "./IphoneFrame";

export default function Iphone3() {
  const chats = [
    {
      name: "Alex Linderson",
      lastMessage: "How are you today?",
      lastMessage2: "We need to discuss our trip.",
      unread: 6,
      profilePicture:
        "https://xsgames.co/randomusers/assets/avatars/female/41.jpg",
      social: "https://picsum.photos/id/10/200/200",
      lastOnline: "2 min ago",
    },
    {
      name: "Tip to Rome",
      lastMessage: "Don’t forget to attend the meeting! ",
      lastMessage2: "We will be waiting for you!",
      unread: 2,
      profilePicture:
        "https://xsgames.co/randomusers/assets/avatars/male/41.jpg",
      social: "https://picsum.photos/id/10/200/200",
      lastOnline: "12 min ago",
    },
    {
      name: "Sarah A.",
      lastMessage: "How are you today?",
      lastMessage2: "We need to discuss our trip.",
      unread: 1,
      profilePicture:
        "https://xsgames.co/randomusers/assets/avatars/female/40.jpg",
      social: "https://picsum.photos/id/10/200/200",
      lastOnline: "20 min ago",
    },
    {
      name: "Laith",
      lastMessage: "How are you today?",
      unread: 0,
      profilePicture:
        "https://xsgames.co/randomusers/assets/avatars/female/46.jpg",
      social: "https://picsum.photos/id/10/200/200",
      lastOnline: "1 hour ago",
    },
    {
      name: "Sabila Sayma",
      lastMessage: "Have a good day!",
      unread: 0,
      profilePicture:
        "https://xsgames.co/randomusers/assets/avatars/female/47.jpg",
      social: "https://picsum.photos/id/10/200/200",
      lastOnline: "1 hour ago",
    },
    {
      name: "Laith",
      lastMessage: "How are you today?",
      unread: 0,
      profilePicture:
        "https://xsgames.co/randomusers/assets/avatars/female/45.jpg",
      social: "https://picsum.photos/id/10/200/200",
      lastOnline: "1 hour ago",
    },
    {
      name: "Sabila Sayma",
      lastMessage: "Have a good day!",
      unread: 0,
      profilePicture: "https://picsum.photos/id/10/200/200",
      social: "https://picsum.photos/id/10/200/200",
      lastOnline: "1 hour ago",
    },
  ];

  return (
    <IphoneFrame>
      <img
        src={bg}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative w-full h-full flex flex-col ">
        <img src={iphoneStatus} />
        <div className="px-2 ">
          <div className="flex justify-between items-center pt-1.5 mb-3">
            <div className="flex gap-2.5">
              <p className="text-xl py-1">Messages</p>
            </div>
            <div className="flex gap-1">
              <div className="size-8 p-1.5 border border-white/20 rounded-full flex justify-center items-center">
                {/* TODO: gear */}
                <img src={sort} />
              </div>
              <div className="size-8 p-1.5 border border-white/20 rounded-full flex justify-center items-center">
                <img src={plus} />
              </div>
            </div>
          </div>

          <div className="bg-white/10 py-2 px-2 self-stretch border border-white/15 rounded-[10px] flex items-center gap-2">
            {/* TODO: Search */}
            <img src={plus} />
            <div className="text-sm text-white/40">Search</div>
          </div>
        </div>

        <div className="flex border-b text-white/50 text-xs border-white/20 w-full gap-4 mt-4 px-2.5">
          <div className="">
            <p className="text-white font-medium">All</p>
            <div className="h-px -translate-x-0.5 rounded-full bg-white w-5 mt-1.5"></div>
          </div>
          <div className="flex items-center pb-2 gap-1">
            <p className="font-medium ">Unread</p>
            <div className="px-1.5 leading-3 h-3 text-[9px] rounded-full text-white bg-[#F3E3BF]/50 ">
              9
            </div>
          </div>
          <div className="flex items-center pb-2 gap-1">
            <p className="font-medium ">Groups</p>
            <div className="px-1.5 leading-3 h-3 text-[9px] rounded-full text-white bg-[#F3E3BF]/50 ">
              6
            </div>
          </div>
          <div className="flex items-center pb-2 gap-1">
            <p className="font-medium ">Facebook</p>
          </div>
          <div className="flex items-center pb-2 gap-1">
            <p className="font-medium ">WhatsApp</p>
          </div>
        </div>
        <div className="px-3 ">
          {chats.map((chat, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className="relative shrink-0 pt-2.5 ">
                {/* TODO: Profile */}
                <img
                  className="bg-white size-9 rounded-full overflow-hidden"
                  src={chat.profilePicture}
                />

                {/* TODO: Social */}
                <img
                  className="absolute bottom-0 right-0 bg-blue-200 size-2 rounded-full overflow-hidden"
                  src={chat.social}
                />
              </div>

              <div className="border-b pb-2 pt-2  border-white/20 w-full flex justify-between">
                <div>
                  <p className="font-medium mb-0.5">{chat.name}</p>
                  <p className="text-white/60 leading-3 text-xs">
                    {chat.lastMessage}
                    {chat.lastMessage2 && <br />}
                    {chat.lastMessage2}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <p className="text-xs text-white/60">{chat.lastOnline}</p>
                  {!!chat.unread && (
                    <div className="p-0.5 px-1 leading-3 text-xs rounded-full text-white bg-[#F3E3BF]/50 ">
                      {chat.unread}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-black to-[50%] "></div>
        <img src={iphoneTabbar} className="absolute -bottom-4 " />
        <div className="absolute bottom-0 left-1/2 w-1/3 -translate-x-1/2 bg-white h-1 rounded-3xl"></div>
      </div>
    </IphoneFrame>
  );
}
