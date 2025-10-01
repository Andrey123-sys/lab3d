import Image from "next/image";

export const UserProfile = () => {
  return (
    <div className="w-8 h-8 rounded-full overflow-hidden">
      <Image src="/avatar.png" alt="Аватар" width={32} height={32} />
    </div>
  );
};
