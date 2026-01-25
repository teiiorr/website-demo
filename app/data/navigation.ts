// app/data/navigation.ts

export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  {
    label: "Bosh sahifa",
    href: "#top",
  },
  {
    label: "Biz haqimizda",
    href: "#about",
  },
  {
    label: "Xabarlar",
    href: "#news",
  },
  {
    label: "Loyihalar",
    href: "#projects",
  },
  {
    label: "Hamkorlar",
    href: "#partners",
  },
  {
    label: "Bog‘lanish",
    href: "#contact",
  },
];
