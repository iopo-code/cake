import { FunctionalComponent } from "preact";

interface PositionListProps {
    positions: string[]; // 明确声明为字符串数组
}

const PositionList: FunctionalComponent<PositionListProps> = ({ positions }) => {
    return (
        <div class="grid grid-cols-2 gap-2">
            {positions.map((p: string) => (
                <img src={atob(p)} class="rounded mx-auto block" />
            ))}
        </div>
    );
};

export default PositionList;
