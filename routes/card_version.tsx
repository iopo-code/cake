import { Head } from "$fresh/runtime.ts";

export default function Card_version() {
  // 新增函数
  const changeVersion = (version: string) => {
    // 这里实现版本切换逻辑
    console.log("切换版本:", version);
    // 例如调用全局函数或更新状态
  };
	return (
		<>
			<Head>
				<link href="/card.css" rel="stylesheet"></link>
				<script src="/js/jquery.min.js"></script>
				
			</Head>

			<div class="w-full leading-8 min-h-screen text-shadow bg-pink-400 text-lg text-red-100">
				<div class="max-w-screen-md text-center mx-auto ">
					<div class="p-2 flex items-center w-full">
						<a class="flex-1" href="/">
							<img src="/logo.png" class="w-12 h-12" />
						</a>
					</div>

					<div class="max-w-md mx-auto p-4">
						<div class="font-black my-4">选择任务卡组合</div>
						<div class="">
							<div onClick="changeVersion('lover0')" class="p-2 cursor-pointer bg-pink-600 rounded border mt-4">恋爱版</div>
							<div onClick="changeVersion('lover1')" class="p-2 cursor-pointer bg-pink-600 rounded border mt-4">热恋版</div>
							<div onClick="changeVersion('sex0')" class="p-2 cursor-pointer bg-pink-600 rounded border mt-4">同居(秘)</div>
							<div onClick="changeVersion('sex1')" class="p-2 cursor-pointer bg-pink-600 rounded border mt-4">进阶版(秘)</div>
							<div onClick="changeVersion('sex2')" class="p-2 cursor-pointer bg-pink-600 rounded border mt-4">私密版(秘)</div>
							<div onClick="changeVersion('sm')" class="p-2 cursor-pointer bg-pink-600 rounded border mt-4">SM版(秘)</div>
							<div onClick="changeVersion('huwai')" class="p-2 cursor-pointer bg-pink-600 rounded border mt-4">户外版(秘)</div>
							<div onClick="changeVersion('nvpu')" class="p-2 cursor-pointer bg-pink-600 rounded border mt-4">男扑版(秘)</div>
							<div onClick="changeVersion('nanpu')" class="p-2 cursor-pointer bg-pink-600 rounded border mt-4">女扑版(秘)</div>
							<div onClick="changeVersion('custom')" class="p-2 cursor-pointer bg-pink-600 rounded border mt-4">自定义(秘)</div>
						</div>
					</div>
				</div>	
			</div>

		</>
	)
}
