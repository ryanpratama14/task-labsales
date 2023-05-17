import { Icon } from "@iconify/react";
import React from "react";

export default function Arrow({ selected, length }) {
  return (
    <div className="flex gap-2">
      <div
        className={`cursor-pointer button-prev-slide ${
          selected === 0 && "hidden"
        }`}
      >
        <Icon icon="material-symbols:arrow-back-ios-new" width={18} />
      </div>
      <div
        className={`cursor-pointer button-next-slide ${
          selected === length && "hidden"
        }`}
      >
        <Icon
          icon="material-symbols:arrow-back-ios-new"
          rotate={2}
          width={18}
        />
      </div>
    </div>
  );
}
