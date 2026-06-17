export default function TypeBadge({ type }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#e7e8ea] text-textSecondary">
      {type}
    </span>
  );
}
