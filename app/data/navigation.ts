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
    label: "Xabarlar va loyihalar",
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
