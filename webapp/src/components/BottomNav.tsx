"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/pickups", label: "Pickup" },
  { href: "/hub/delivered", label: "Record" },
  { href: "/hub/drop", label: "Hub" },
  { href: "/delivery/pick", label: "Pick for Delivery" },
  { href: "/delivery/history", label: "Delivery" },
];

export default function BottomNav() {
  const pathname = usePathname();
  if (
    pathname === "/" ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/verify") ||
    pathname.startsWith("/profile")
  )
    return null;
  return (
    <nav className="sticky bottom-0 w-full bg-white border-t border-gray-200">
      <ul className="flex items-center justify-between px-3 py-2 text-xs">
        {items.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex flex-col items-center px-2 py-1 rounded-md ${
                  active ? "text-blue-600" : "text-gray-600"
                }`}
              >
                <span className="h-6 w-6 rounded bg-blue-50 border border-blue-100 flex items-center justify-center text-[10px] mb-1">
                  •
                </span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}