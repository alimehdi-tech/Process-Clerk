import React from "react";

const ProfileLoading = () => {
  return (
    <>
      <div class="relative flex w-32 animate-pulse p-4">
        <div class="flex-1">
          <div class="absolute top-1/2 left-0 transform -translate-y-1/2 h-5 w-14 rounded-lg bg-gray-300 text-lg"></div>
        </div>
        <div class="h-12 w-12 rounded-full bg-gray-300"></div>
      </div>
    </>
  );
};

export default ProfileLoading;
