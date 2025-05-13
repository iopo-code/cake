import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export default function VipIsland({ children }: Props) {
  return (
    <div>
      {children}
    </div>
  );
}
