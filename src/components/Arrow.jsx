import { Icon } from "@iconify/react";
import React from "react";

export default function Arrow() {
  return (
    <div className="flex gap-2">
      <div className="button-prev-slide">
        <Icon icon="material-symbols:arrow-back-ios-new" width={18} />
      </div>
      <div className="button-next-slide">
        <Icon
          icon="material-symbols:arrow-back-ios-new"
          rotate={2}
          width={18}
        />
      </div>
    </div>
  );
}
