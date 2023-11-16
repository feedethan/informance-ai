import { Header, Nav } from '@/components';
import * as Toast from '@radix-ui/react-toast';
import { Outlet, useModel } from '@umijs/max';

export default function Layout() {
  const { toastOpen, setToastOpen } = useModel('global');
  const { toastDes } = useModel('toastModel');
  return (
    <Toast.Provider swipeDirection="right">
      <div className="fixed inset-x-0 inset-y-0">
        <Header />
        <main className="flex pt-[66px] gap-[14px] h-full pb-[10px]">
          <Nav />
          <div className="grow rounded-[20px] bg-gray-dark">
            <Outlet />
          </div>
        </main>
      </div>
      <Toast.Root
        className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px]  gap-x-[15px]  data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={toastOpen}
        onOpenChange={setToastOpen}
      >
        <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-black text-base">
          Warning
        </Toast.Title>
        <Toast.Description asChild className="text-gray-switch text-sm">
          <div>{toastDes}</div>
        </Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </Toast.Provider>
  );
}
