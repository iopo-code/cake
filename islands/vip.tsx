import { ComponentChildren } from "preact";
import { useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface Props {
  children: ComponentChildren;
}

export default function VipIsland({ children }: Props) {
  useEffect(() => {
    if (IS_BROWSER) {
      // 移除设置会员状态的代码
      // localStorage.setItem('lockVip', JSON.stringify({"type":"boolean","data":true})); // [!code --]
      // localStorage.setItem('vip', true); // [!code --]
      
      // 移除强制跳转
      // location.href = '/' // [!code --]
    }
    return () => {};
  }, []);

  return (
    <div>
      {/* 直接显示内容，不进行会员验证 */}
      {children}
    </div>
  );
}