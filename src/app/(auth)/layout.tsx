export default function AuthLayout({ children }: LayoutProps<"/">) {
  return <div className="grid grid-cols-12 gap-6">
<div className="col-span-6">test</div>
<div className="col-span-6">{children}</div>
  </div>;
}
