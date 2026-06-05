import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { contact } from "@/lib/data";

export default function QuickContact() {
  const items = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: `https://wa.me/${contact.whatsapp}`,
      external: true,
      tint: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: Phone,
      label: "Call us",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/[^+\d]/g, "")}`,
      tint: "bg-brand/10 text-brand",
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      tint: "bg-accent/10 text-accent",
    },
  ];

  return (
    <div className="space-y-3">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          {...(it.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-soft"
        >
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${it.tint}`}
          >
            <it.icon size={20} />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-ink-mute">
              {it.label}
            </div>
            <div className="font-semibold text-ink">{it.value}</div>
          </div>
        </a>
      ))}

      <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink/5 text-ink-soft">
          <MapPin size={20} />
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-ink-mute">
            Visit us
          </div>
          <div className="font-semibold text-ink">{contact.address}</div>
        </div>
      </div>
    </div>
  );
}
