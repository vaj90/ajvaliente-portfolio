import { Mail, Phone } from "lucide-react";

const email = "allanjohn.valiente@gmail.com";
const phone = "(647) 528-3291";
const phoneLink = "tel:+16475283291";

export const contactLinks = [
  { name: email, url: `mailto:${email}`, icon: Mail },
  { name: phone, url: phoneLink, icon: Phone },
];
